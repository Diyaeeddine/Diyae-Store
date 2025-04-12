import connectDB from "@/config/db";
import User from "@/models/user";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(request) {
  try {
    const userId = getAuth(request);
    await connectDB();
    const user = await User.findById(userId);
    const { cartItems } = user;
    return Nextresponse.json({ success: true, cartItems });
  } catch (error) {
    return Nextresponse.json({ success: false, message: error.message });
  }
}
