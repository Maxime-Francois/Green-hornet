"use client";

import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/app/utils/formatPrice";
import { Order } from "@prisma/client";
import moment from "moment";

import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import OrderItem from "./OrderItem";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Détails de la commande" />
      </div>
      <div>Id de la commande: {order.id}</div>
      <div>
        Total:{" "}
        <span className="font-bold">{formatPrice(order.amount / 100)}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div>Statut du paiement:</div>
        <div>
          {order.status === "pending" ? (
            <Status
              text="En attente"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complete" ? (
            <Status
              text="payé"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>Statut de la livraison:</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              text="En attente"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              text="Expédié"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status
              text="livré"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>Date: {moment(order.createDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Produits commandés</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
          <div className="col-span-2 justify-self-start">PRODUIT</div>
          <div className=" justify-self-center">PRIX</div>
          <div className=" justify-self-center">QTY</div>
          <div className=" justify-self-end">TOTAL</div>
        </div>
        {order.products &&
         order.products.map((item) => {
            return <OrderItem key={item.id} item={item}></OrderItem>
        })}
      </div>
    </div>
  );
};

export default OrderDetails;
