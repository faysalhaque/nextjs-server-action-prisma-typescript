'use server'

import { UserCreateSchema } from "@/lib/schema";
import { createUser } from "@/lib/user"

export async function createUserAction(data: any) {
    const { name, email, password } = Object.fromEntries(data);
    if(!name || !email || !password) throw new Error('Invalid input');

    // validation goes here
    // const { error: zodError } = UserCreateSchema.safeParse({ name, email, password });
    // if(zodError) {
    //     return { error: zodError.format()}
    // }

    const response = await createUser({ name, email, password });
    console.log(response);
    return response;
}