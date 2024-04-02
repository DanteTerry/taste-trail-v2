import { IMenuItem } from "@/types/types";

export const getCartItems = async (): Promise<IMenuItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST}/api/cart`, {
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

export const createCartItems = async (item: IMenuItem) => {
  try {
    const res = await fetch(`${process.env.LOCALHOST}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await res.json();

    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

// get the response from the stripe hook

export const getHookResponse = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LOCALHOST}/api/order/webhook`,
  );
  return res;
};
