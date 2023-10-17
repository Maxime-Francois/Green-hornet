import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "./ListRating";
import getProductById from "@/app/actions/getProductById";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface Iprams {
  id: string;
}

const Product = async ({ params }: { params: Iprams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product) return <NullData title="Ce produit n'existe pas" />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
