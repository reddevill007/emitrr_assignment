import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: slug },
    });

    return new NextResponse(JSON.stringify(user));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};

export const POST = async (req, { params }) => {
  const { slug } = params;
  const body = await req.json();

  try {
    const post = await prisma.user.update({
      where: { id: slug },
      data: { score: body.totalPoints },
    });

    return new NextResponse(JSON.stringify(post));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
