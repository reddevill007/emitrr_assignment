import { db } from "@/lib/db";
import prisma from "@/prisma";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        try {
          await db();
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (!user?.hashedPassword) return null;

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (isPasswordCorrect) return user;
          return null;
        } catch (error) {
          console.log(error);
          return null;
        } finally {
          prisma.$disconnect;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
