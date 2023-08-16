import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Profile {
    identities?: { providerType: string }[] & Profile;
  }
  interface Session {
    user: {
      id: number;
      accessToken: string;
      idToken: string;
    } & DefaultSession["user"];
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}
