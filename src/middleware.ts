import withAuth from "next-auth/middleware";

export default withAuth({
  //   secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/signin",
  },
});
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
