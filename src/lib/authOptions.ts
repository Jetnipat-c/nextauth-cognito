import { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.NEXTAUTH_URL_COGNITO_CLIENT_ID || "",
      clientSecret: process.env.NEXTAUTH_URL_COGNITO_CLIENT_SECRET || "",
      issuer: process.env.NEXTAUTH_URL_COGNITO_ISSUER,
      checks: ["state", "pkce", "nonce"],
      // idToken: true,
    }),
  ],
  secret: process.env.NEXTAUTH_URL_NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  },
};
