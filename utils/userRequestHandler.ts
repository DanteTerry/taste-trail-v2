export const getUser = async () => {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
