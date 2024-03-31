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
  const { orderData } = await req.json();

  const data: IMenuItem[] = orderData.items;

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
          images: [item.image],
          default_price_data: {
            currency: "czk",
            unit_amount: item.price * 100,
          },
          metadata: {
            productId: item._id,
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
    customer_email: orderData.user.email,
    client_reference_id: orderData.user.userId,
    metadata: {
      shipping_address: orderData.user.address,
      shipping_city: orderData.user.city,
      shipping_pinCode: orderData.user.pinCode,
    },
  });

  return NextResponse.json({ url: session.url });
};
