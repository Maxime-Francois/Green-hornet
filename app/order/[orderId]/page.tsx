import Container from "@/app/components/Container";
import OrderDetails from "./OrderDetails";
import getOrderById from "@/app/actions/getOrderById";
import NullData from "@/app/components/NullData";

interface Iprams {
  orderId?: string;
}

const Order = async ({ params }: { params: Iprams }) => {
  const order = await getOrderById(params);

  if(!order) return <NullData title="Aucne commande"></NullData>

  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;