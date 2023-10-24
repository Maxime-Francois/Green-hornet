import React from "react";
import Container from "../components/Container";
import ProductCard from "../components/products/ProductCard";
import getProducts, { IProductParams } from "../actions/getProducts";
import NullData from "../components/NullData";

interface ProductProps {
  searchParams: IProductParams;
}

export default async function Products({ searchParams }: ProductProps) {
  console.log("searchParams:", searchParams);
  const products = await getProducts(searchParams);
  console.log("products:", products);

  const category = searchParams.category;

  if (products.length === 0) {
    console.log("Aucun produit ne correspond.");
    return (
      <NullData title="Aucun produit ne correspond. Clickez sur tous pour enlever les filtres" />
    );
  }
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledProducts = shuffleArray(products);
  return (
    <div className="mt-8 products">
      <Container>

        <h2 className="text-2xl  tracking-wider pb-5 title-slider mt-16">
          {category && category.toUpperCase()} CBD
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-8 mb-20"> 
        {/* <div className="flex flex-wrap gap-5  mb-20 center mt-10"> */}
          {shuffledProducts.map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>  
      </Container>
    </div>
  );
}
