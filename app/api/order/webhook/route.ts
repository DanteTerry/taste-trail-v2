import { NextResponse } from "next/server";

const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getCartItem = async (line_items: any) => {
  return new Promise(async (resolve, reject) => {
    let items: any = [];

    try {
      for (const item of line_items.data) {
        const product = await Stripe.products.retrieve(item.price.product);

        items.push({
          name: product.name,
          price: product.default_price,
          quantity: item.quantity,
          images: product.images[0],
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

    const items = await getCartItem(line_items);

    console.log(items);

    console.log("Payment was successful");
  }

  return NextResponse.json({ received: true });
};
