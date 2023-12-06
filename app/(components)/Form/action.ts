"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/db/prisma";


const register = async (formData: FormData) => {
    try {
     // check if email is already taken
    const email = await prisma.user.findUnique({
      where: {
        email: formData.get("email") as string,
      },
    });

    if (email) throw new Error("Email already taken");

    // check if username is already taken
    const username = await prisma.user.findUnique({
      where: {
        username: formData.get("username") as string,
      },
    });
    if (username) throw new Error("Username already taken");
    
    // check if password match
    if (
      formData.get("password") !== formData.get("passwordConfirmation")
    ) throw new Error("Password do not match");
    

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(formData.get("password") as string, salt);

    // create user
    await prisma.user.create({
      data: {
        username: formData.get("username") as string,
        email: formData.get("email") as string,
        hashPassword: hash,
      },
    });
    } catch (error) {
      throw error
    }
  
};

export { register }