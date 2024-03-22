import { ICartItem } from "@/types/types";

export const getCartItems = async (): Promise<ICartItem[]> => {
  try {
    const res = await fetch(
      `${process.env.LOCALHOST || "http://localhost:3000/"}/api/cart`,
      {
        cache: "no-store",
      },
    );

    return res.json();
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

export const createCartItems = async (data: ICartItem) => {
  try {
    const res = await fetch(
      `${process.env.LOCALHOST || "http://localhost:3000/"}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    return res;
  } catch (error: any) {
    console.log(error.message);
  }
};
