"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcryptjs from "bcryptjs";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid credentials!" };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcryptjs.hash(password, 10);
  //make sure the email is not taken
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "This email is taken" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO :Send verification token email
  return { success: " User created successfully!" };
};
