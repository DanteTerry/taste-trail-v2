import { toast } from "sonner";

export const getMenu = async () => {
  try {
    const res = await fetch("http://192.168.0.31:3000/api/menu", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
