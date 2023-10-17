export const revalidate = 0;

import getProducts, { IProductParams } from "./actions/getProducts";
import Banner from "./components/Banner";
import Container from "./components/Container";
import NullData from "./components/NullData";
import Category from "./components/navbar/Category";
import ContainerSlide from "./components/products/ContainerSlide";
import ProductCard from "./components/products/ProductCard";


interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  console.log("searchParams:", searchParams);
  const products = await getProducts(searchParams);
  console.log("products:", products);
  if (products.length === 0) {
    console.log("Aucun produit ne correspond.");
    return (
      <NullData title="Aucun produit ne correspond. Clickez sur tous pour enlever les filtres"/>
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
    <div>
      <Banner />
      {/* <ContainerSlide category="fleur"/>
          <ContainerSlide category="résine"/>
          <ContainerSlide category="huile"/> */}
      <Container>
      
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 mb-20">
          {shuffledProducts.map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
