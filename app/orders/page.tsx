import Container from "@/app/components/Container";
import OrdersClient from "./OrderClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrdersByUserId from "../actions/getOrdersByUserId";

const Orders = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="Accès refusé" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="Vous n'avez pas encore de commandes" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
