import Order from "@/models/OrderModel";
import { NextResponse } from "next/server";

const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getCartItem = async (line_items: any) => {
  return new Promise(async (resolve, reject) => {
    let items: any = [];

    try {
      for (const item of line_items.data) {
        const product = await Stripe.products.retrieve(item.price.product);

        const productId = product.metadata.productId;

        items.push({
          menuData: productId,
          name: product.name,
          quantity: item.quantity,
          images: product.images[0],
          price: item.price.unit_amount / 100,
        });
      }

      if (items.length === line_items.data.length) {
        resolve(items);
      } else {
        reject("Error in getting items");
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const POST = async (req: Request) => {
  const body = await req.text();

  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" });
  }

  let event;

  try {
    event = Stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err: any) {
    console.log(err);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const line_items = await Stripe.checkout.sessions.listLineItems(
      event.data.object.id,
    );

    const orderItems = await getCartItem(line_items);

    const userId = session.client_reference_id;
    const amountPaid = session.amount_total / 100;
    const paymentInfo = {
      id: session.payment_intent,
      amountPaid,
      status: session.payment_status,
    };
    const orderData = {
      orderId: Math.floor(Math.random() * 9000) + 1000,
      user: userId,
      paymentInfo,
      orderItems,
      shippinginfo: {
        address: session.metadata.shipping_address,
        city: session.metadata.shipping_city,
        pinCode: session.metadata.shipping_pinCode,
      },
    };

    const order = await Order.create(orderData);
  }

  return NextResponse.json({ received: true });
};
