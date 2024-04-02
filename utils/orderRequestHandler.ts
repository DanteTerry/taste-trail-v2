export const getOrder = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST}/api/order`, {
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getting order", error);
  }
};
