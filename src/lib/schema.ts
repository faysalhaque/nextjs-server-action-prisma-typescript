import { z } from "zod";

export const UserCreateSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string(),
});