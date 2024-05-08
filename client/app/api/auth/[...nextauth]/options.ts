import type { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CognitoProvider({
      clientId: process.env.USER_POOL_CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      issuer: process.env.COGNITO_ISSUER,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user_name: {
          label: "Username:",
          type: "text",
          placeholder: "username",
        },
        last_name: {
          label: "Lastname:",
          type: "text",
          placeholder: "lastname",
        },
        email: {
          label: "Email:",
          type: "text",
          placeholder: "email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        const res = await fetch("/users/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  }
};
