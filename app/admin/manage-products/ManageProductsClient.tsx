"use client";

import { Product } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { formatPrice } from "@/app/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteObject, getStorage, ref } from "firebase/storage";
import firebaseApp from "@/app/libs/firebase";
import { AiFillEdit } from "react-icons/ai";

interface ManageProductsClientProps {
  products: Product[];
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products,
}) => {
  const router = useRouter();
  const storage = getStorage(firebaseApp);
  let rows: any = [];

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        inStock: product.inStock,
        cover: product.cover,
      };
    });
  }
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Nom", width: 220 },
    {
      field: "price",
      headerName: "Prix(EUR)",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "Catégorie", width: 100 },
    {
      field: "inStock",
      headerName: "En Stock",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            {params.row.inStock === true ? (
              <Status
                text="En Stock"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="Rupture de stock"
                icon={MdClose}
                bg="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionBtn
              icon={MdCached}
              onClick={() => {
                handleToggleStock(params.row.id, params.row.inStock);
              }}
            />
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                handleDelete(params.row.id, params.row.cover);
              }}
            />
            <ActionBtn
              icon={AiFillEdit} // Remplacez MdEdit par l'icône de modification souhaitée
              onClick={() => {
                router.push(`/edit-product/${params.row.id}`);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/product/${params.row.id}`);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleToggleStock = useCallback((id: string, inStock: boolean) => {
    axios
      .put("/api/product", {
        id,
        inStock: !inStock,
      })
      .then((res) => {
        toast.success("Status du produit changé");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Quelque chose n'a pas marché");
        console.log(err);
      });
  }, []);

  const handleDelete = useCallback(async (id: string, cover: any) => {
    toast("Suppression du produit veuillez patienter");

    const handleImageDelete = async (coverUrl: string) => {
      try {
        const coverRef = ref(storage, coverUrl);
        await deleteObject(coverRef);
        console.log("image deleted", coverUrl);
      } catch (error) {
        console.log("Deleting image error", error);
      }
    };

    if (cover) {
      const coverArray = Array.isArray(cover) ? cover : [cover];
      for (const coverUrl of coverArray) {
        await handleImageDelete(coverUrl);
      }
    }

    axios
      .delete(`/api/product/${id}`)
      .then((res) => {
        toast.success("Produit suprimé");
        router.refresh();
      })
      .catch((err) => {
        toast.error("la suppression n'a pa fonctionnée");
        console.log(err);
      });
  }, []);
  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Gestion des produits" />
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageProductsClient;
