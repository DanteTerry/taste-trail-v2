export const getOrder = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/order/${id}`,
      {
        cache: "no-store",
      },
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getting order", error);
  }
};
