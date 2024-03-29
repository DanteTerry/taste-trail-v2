import { IMenuItem } from "@/types/types";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getActiveProducts = async () => {
  const prods = await stripe.products.list();
  const availableProduct = prods.data.filter(
    (prod: any) => prod.active === true,
  );
  return availableProduct;
};

export const POST = async (req: any) => {
  const { cartItem } = await req.json();

  const data: IMenuItem[] = cartItem;

  let activeProducts = await getActiveProducts();
  try {
    for (const item of data) {
      const stripeProduct = activeProducts?.find(
        (product: any) =>
          item?.name?.toLowerCase() === product?.name?.toLowerCase(),
      );

      if (stripeProduct === undefined) {
        const prod = await stripe.products.create({
          name: item.name,
          description: item.description,
          images: [item.image],
          default_price_data: {
            currency: "czk",
            unit_amount: item.price * 100,
          },
        });
      }
    }
  } catch (error) {
    console.error("Error in creating product", error);
  }

  activeProducts = await getActiveProducts();

  let stripeProducts: any = [];

  for (const item of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) => item?.name?.toLowerCase() === prod?.name?.toLowerCase(),
    );

    if (stripeProduct) {
      stripeProducts.push({
        price: stripeProduct?.default_price,
        quantity: item.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeProducts,
    mode: "payment",
    success_url: "http://localhost:3000/orders",
    cancel_url: "http://localhost:3000/cart",
  });

  console.log(session);

  return NextResponse.json({ url: session.url });
};
