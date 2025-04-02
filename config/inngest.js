import { Inngest } from "inngest";
import connectDB from "./db";
import { User } from "@clerk/nextjs/dist/types/server";

export const inngest = new Inngest({ id: "diyaeStore-next" });

//Inngest function to save user data to a database
export const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
  },
  { e: "clerk/user.created" },
  async ({ e }) => {
    const { id, first_name, last_name, email_addresses, image_url } = e.data;
    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      imageUrl: image_url,
    };
    await connectDB();
    await User.create(userData);
  }
);

//inngest function to update user data in database
export const syncUserUpdation = inngest.createFunction(
  {
    id: "update-user-from-clerk",
  },
  {
    e: "clerk/user.update",
  },
  async ({ e }) => {
    const { id, first_name, last_name, email_addresses, image_url } = e.data;
    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      imageUrl: image_url,
    };
    await connectDB();
    await User.findByIdAndUpdate(id, userData);
  }
);

//inngest function to delete user data from database
export const syncUserDeletion = inngest.createFuntion(
  {
    id: "delete-user-from-clerk",
  },
  { e: "clerk/user.delete" },
  async (e) => {
    const { id } = e.data;
    await connectDB();
    await User.fintByIdAndDelete(id);
  }
);
