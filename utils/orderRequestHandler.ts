export const getOrder = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/order", {
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getting order", error);
  }
};
