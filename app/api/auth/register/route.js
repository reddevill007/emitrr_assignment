import { db } from "@/lib/db";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();
    const score = 0;

    if (!name || !email || !password)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });

    const hashedPassword = await bcrypt.hash(password, 10);
    await db();

    const newUser = await prisma.user.create({
      data: { email, name, hashedPassword, score },
    });

    return NextResponse.json({ newUser }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
