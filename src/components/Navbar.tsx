"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between space-x-3 px-10 h-12 bg-gray-200">
      <div className="flex space-x-3">
        <div className="text-sm font-bold hover:text-blue-800">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="text-sm font-bold hover:text-blue-800">
          <Link href={"/protected"}>Protected</Link>
        </div>
      </div>

      <div className="text-sm font-bold hover:text-blue-800">
        {!session ? (
          <>
            <Link href={"/signin"}>Sign in</Link>
          </>
        ) : (
          <>
            <Link onClick={() => signOut()} href={"#"}>
              Sign out
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
