import getCurrentUser from "@/app/actions/getCurrentUser";
import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import AddProductForm from "./AddProductForm";
import FormWrap from "@/app/components/FormWrap";


const AddProducts = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser || currentUser.role != 'ADMIN') {
        return <NullData title="Accès refusé"/>
    }
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
        <AddProductForm />
         </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
