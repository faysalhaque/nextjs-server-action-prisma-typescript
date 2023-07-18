import { IRegisterForm } from "@/app/types";
import prisma from "./prisma";
import { NextResponse } from "next/server";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

export async function createUser(data: IRegisterForm) {
  try {
    const user = await prisma.user.create({data});
    return {
      success: true,
      data: JSON.stringify(user)
    };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { 
        success: false,
        data: "User with email already exists"
      };
    }
    
    return { 
      success: false,
      data: error.message
    };
  }
}