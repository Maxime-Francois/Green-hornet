import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "./ListRating";
import { products } from "@/app/utils/products";
import getProductById from "@/app/actions/getProductById";
import NullData from "@/app/components/NullData";

interface Iprams {
  id: string;
}

const Product = async ({ params }: { params: Iprams }) => {
  const product = await getProductById(params);

  if(!product) return <NullData title="Ce produit n'existe pas"/>

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Donnez votre avis</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
