export const getUser = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST}/api/user`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
