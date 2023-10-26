'use client'
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import firebaseApp from "@/app/libs/firebase";
import axios from "axios";

import { TiDelete } from "react-icons/ti";
import Image from "next/image";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import UploadImage from "@/app/components/inputs/UploadImage";
import CustomCheckBox from "@/app/components/inputs/CustomCheckBox";
import Button from "@/app/components/Button";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import { categories } from "@/app/utils/Categories";
import { useRouter } from "next/navigation";

interface EditProductFormProps {
  product?: any;
  onUpdateProduct: (updatedProduct: any) => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  onUpdateProduct,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: product.name,
      description: product.description,
      category: product.category,
      cover: product.cover,
      inStock: product.inStock,
      price: product.price,
    },
  });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    toast("Mise à jour du produit, veuillez patienter");

    if (!data.category) {
      setIsLoading(false);
      toast.error("La catégorie n'a pas été sélectionnée");
      return;
    }

    if (!data.cover) {
      setIsLoading(false);
      toast.error("Aucune image n'a été sélectionnée");
      return;
    }

    const handleCoverUpload = async () => {
      try {
        if (data.cover) {
          const updateUrl = `/api/product/${product.id}`;
          const fileName = new Date().getTime() + `-` + data.cover.name;
          let storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `products/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, data.cover);

          await new Promise<void>((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
              },
              (error) => {
                console.log("Erreur upload image", error);
                setIsLoading(false);
                toast.error("Erreur lors de l'upload de l'image");
                reject(error);
              },
              () => {
                const downloadURL = getDownloadURL(uploadTask.snapshot.ref);
                downloadURL
                  .then((url) => {
                    // Enregistrez l'URL de téléchargement dans votre base de données
                    const productData = { ...data, cover: url };

                    axios
                      .put(updateUrl, productData)
                      .then((response) => {
                        if (response.status === 200) {
                          toast.success("Produit mis à jour avec succès");
                          onUpdateProduct(productData);
                          router.push(`/product/${product.id}`);
                        } else {
                          toast.error(
                            "Erreur : le produit n'a pas été mis à jour dans la base de données"
                          );
                          console.error(
                            "Réponse de mise à jour de l'API :",
                            response
                          );
                        }
                      })
                      .catch((error) => {
                        toast.error(
                          "Erreur : le produit n'a pas été mis à jour dans la base de données"
                        );
                        console.error(
                          "Erreur lors de la mise à jour du produit :",
                          error
                        );
                      })
                      .finally(() => {
                        setIsLoading(false);
                      });

                    resolve();
                  })
                  .catch((error) => {
                    console.log("error getting the download URL", error);
                    setIsLoading (false);
                    toast.error(
                      "Erreur lors de la récupération de l'URL de téléchargement"
                    );
                    reject(error);
                  });
              }
            );
          });
        }
      } catch (error) {
        setIsLoading(false);
        toast.error("Erreur lors du téléchargement de l'image");
        console.log("error handling image upload", error);
      }
    };

    await handleCoverUpload();
    reset();
  };

  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleFileChange = (file: File) => {
    setValue("cover", file);
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  const handleRemoveImage = () => {
    setValue("cover", null);
    setUploadedImage(null);
  };

  return (
    <>
      <Heading title="Modifier le produit" center />
      <Input
        id="name"
        label="Nom"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="Prix"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />

      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomCheckBox
        id="inStock"
        register={register}
        label="Ce produit est en stock"
      />
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Sélectionner une catégorie</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
          {categories.map((item) => {
            if (item.label === "all") {
              return null;
            }

            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2 font-semibold">Sélectionner une image</div>
        <UploadImage handleFileChange={handleFileChange} />
      </div>
      {uploadedImage && (
        <div className="mt-4">
          <div className="flex items-start">
            <Image
              src={uploadedImage}
              alt="Image Téléchargée"
              width={300}
              height={300}
            />
            <button
              onClick={handleRemoveImage}
              className="text-slate-500 relative top-0"
            >
              <TiDelete size={30} />
            </button>
          </div>
        </div>
      )}
      <Button
        label={isLoading ? "Chargement..." : "Mettre à jour le produit"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default EditProductForm;
