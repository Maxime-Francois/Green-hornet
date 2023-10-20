"use client";
import React from "react";
import Slideshow from "../Slideshow";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface ContainerSlideProps {
  categories: string[]; // Un tableau de catégories
  products: any[];
}

const ContainerSlide: React.FC<ContainerSlideProps> = ({
  categories,
  products,
}) => {
  const router = useRouter(); // Initialisez le routeur

  const redirectToCategoryPage = (category: string) => {
    // Construisez l'URL avec le paramètre de catégorie
    const categoryURL = `/products?category=${category}`;
    // Redirigez l'utilisateur vers la page de catégorie
    router.push(categoryURL);
  };
  return (
    <div className=" ">
      {categories &&
        categories.map((category) => {
          const filteredProducts = products.filter(
            (product) => product.category === category
          );

          // let containerClass = "";
          // if (category === "Fleurs") {
          //   containerClass = "bg-weedColor";
          // } else if (category === "Résines") {
          //   containerClass = "bg-shitColor";
          // } else if (category === "Huiles") {
          //   containerClass = "bg-oilColor";
          // }

          return (
            <div
              key={category}
              className={`flex justify-center flex-col  rounded-xl  container-product-slider`}
            >
              <div className="flex justify-center flex-col p-8">
                <h2 className="text-2xl  tracking-wider text-b pb-5 title-slider ">
                  {category.toUpperCase()} CBD
                </h2>
             

                <Slideshow productData={filteredProducts} />

                <div className="flex justify-center mt-5">
                  <Button
                    onClick={() => redirectToCategoryPage(category)}
                    className="bg-weedColor text-white hover:shadow-xl hover:border-solid border-2 border-weedColor hover:bg-weedColor hover:text-white ease-in-out duration-300 hover:scale-110 "
                  >
                    VOIR TOUTE LA COLLECTION
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ContainerSlide;
