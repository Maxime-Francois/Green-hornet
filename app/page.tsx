import getProducts, { IProductParams } from "./actions/getProducts";
import Banner from "./components/Banner";
import Container from "./components/Container";
import NullData from "./components/NullData";

import ContainerSlide from "./components/products/ContainerSlide";
import ProductCard from "./components/products/ProductCard";
import { products } from "./utils/products";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);
  if (products.length === 0) {
    return (
      <NullData title="Aucun produit ne correspond. Clickez sur tous pour enlever les filtres"></NullData>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
          {shuffledProducts.map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
