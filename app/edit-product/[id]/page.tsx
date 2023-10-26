
import getCurrentUser from "@/app/actions/getCurrentUser";
import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import EditProductForm from "./EditProductForm"; // Assurez-vous d'importer EditProductForm ici
import getProductById from "@/app/actions/getProductById";

interface Iprams {
  id: string;
}

const UpdateProduct = async ({ params }: { params: Iprams }) => {
  const product = await getProductById(params); // Obtenez les détails du produit à partir de getProductById
  const currentUser = await getCurrentUser();

  if (!product) return <NullData title="Ce produit n'existe pas" />;


  return (
    <div className="p-8">
      <Container>
        <EditProductForm
          product={product}
         
          
        />
      </Container>
    </div>
  );
};


export default UpdateProduct;
