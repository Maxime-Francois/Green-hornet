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

          let containerClass = "";
          if (category === "Fleurs") {
            containerClass = "bg-weedColor";
          } else if (category === "Résines") {
            containerClass = "bg-shitColor";
          } else if (category === "Huiles") {
            containerClass = "bg-oilColor";
          }

          return (
            <div
              key={category}
              className={`flex justify-center flex-col ${containerClass} border rounded-xl shadow-xl container-product-slider`}
            >
              <div className="flex justify-center flex-col p-8">
                <h3 className="text-2xl font-sans tracking-wider text-white pb-5 title-slider">
                  {category.toUpperCase()} CBD
                </h3>

                <Slideshow productData={filteredProducts} />

                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => redirectToCategoryPage(category)}
                    className="bg-white text-black hover:shadow-xl ease-in-out duration-300 hover:scale-110"
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
