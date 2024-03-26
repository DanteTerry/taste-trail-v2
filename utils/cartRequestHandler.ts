import { IMenuItem } from "@/types/types";

export const getCartItems = async (): Promise<IMenuItem[]> => {
  try {
    const res = await fetch(
      `${process.env.LOCALHOST || "http://localhost:3000/"}/api/cart`,
      {
        cache: "no-store",
      },
    );

    const data = await res.json();

    return data;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

export const createCartItems = async (item: IMenuItem) => {
  try {
    const res = await fetch(
      `${process.env.LOCALHOST || "http://localhost:3000/"}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      },
    );

    const data = await res.json();

    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
