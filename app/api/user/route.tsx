import { connectDB } from "@/database/db";
import { UserModel } from "@/models/UserModel";
import bcryptjs from "bcryptjs";

export const GET = async () => {
  try {
    await connectDB();
    const user = await UserModel.find();
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error: any) {
    console.log(error.message);
    return new Response(error.message, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const data = await req.json();

    const salt = await bcryptjs.genSalt(10);
    data.password = await bcryptjs.hash(data.password, salt);

    const user = await UserModel.create(data);
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error: any) {
    console.log(error.message);
    return new Response(error.message, { status: 500 });
  }
};
