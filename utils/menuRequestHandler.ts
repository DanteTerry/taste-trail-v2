export const getMenu = async () => {
  try {
    const res = await fetch(`${process.env.LOCALHOST}/api/menu`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
