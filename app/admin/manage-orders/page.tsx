import Container from "@/app/components/Container";
import ManageOrdersClient from "./ManageOrdersClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrders from "@/app/actions/getOrders";


const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role != "ADMIN") {
    return <NullData title="Accès refusé" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
