import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";


export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-08-16",
});

// Initialisez Prisma


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    return res.status(400).send("Il manque la signature stripe");
  }
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
      console.error(
        "Erreur lors de la construction de l'événement Stripe:",
        err
      );
    return res.status(400).send("erreur webhook" + err);
  }
  switch (event.type) {
    case "charge.succeeded":
      const charge: any = event.data.object as Stripe.Charge;

      console.log("Objet de l'événement charge :", charge);

      if (typeof charge.payment_intent === "string") {
        await prisma.order.update({
          where: { paymentIntentId: charge.payment_intent },
          data: { status: "complete", address: charge.shipping?.address },
        });
      }
      break;
    default:
      console.log("Unhandled event type:" + event.type);
  }
  res.json({ received: true });
}
