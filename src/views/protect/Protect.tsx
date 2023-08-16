"use client";
import { useSession } from "next-auth/react";

const ProtectView = () => {
  const { data: session } = useSession();

  if (!session) return <div>Please sign in...</div>;

  return (
    <div className="bg-red-200 flex flex-col items-center justify-center">
      <p>Protect Page ...</p>
      <p>Hi {session.user.name}!</p>
    </div>
  );
};

export default ProtectView;
