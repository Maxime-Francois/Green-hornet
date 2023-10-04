import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "./ListRating";
import { products } from "@/app/utils/products";

interface Iprams {
  id: string;
}

const Product = ({ params }: { params: Iprams }) => {
  console.log("params", params);

  const product = products.find((item) => item.id ===
  params.id);

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
