import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/db/prisma";
import bcrypt from "bcrypt";
import { NextAuthOptions, User } from "next-auth";

type SafeUser = Omit<User, "hashPassword">;

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Provide your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Provide your password",
        },
      },
      async authorize(credentials): Promise<SafeUser | null> {
        if(!credentials){
          return null
        }
        try {
          const foundUser = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
          console.log("Found User: ", foundUser);
          if (!foundUser) return null;

          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            foundUser.hashPassword
          );
          if (!passwordsMatch) return null;
          return {
            id: foundUser.id.toString(),
            email: foundUser.email,
            name: foundUser.username,
          };
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return token;
      }
      return { ...token };
    },
    async session({ session, token }) {
      if (session?.user) {
        return session;
      }
      return { ...session, user: token };
    }
  },
};
