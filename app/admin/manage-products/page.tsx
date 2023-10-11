import Container from "@/app/components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/app/actions/getProducts";
import getCurrentUser from "@/app/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import { products } from "@/app/utils/products";

const ManageProducts = async () => {

  const products = await getProducts({category: null})
  const currentUser = await getCurrentUser()

    if (!currentUser || currentUser.role != "ADMIN") {
      return <NullData title="Accès refusé" />;
    }
  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products = {products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
