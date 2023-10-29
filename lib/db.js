import prisma from "@/prisma";
import React from "react";

export const db = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to db");
  }
};
