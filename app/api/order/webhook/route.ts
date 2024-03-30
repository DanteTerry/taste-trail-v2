import { NextResponse } from "next/server";

const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

    console.log("Payment was successful", session);
  }

  return NextResponse.json({ received: true });
};
