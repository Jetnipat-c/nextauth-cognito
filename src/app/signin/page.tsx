import SignInButton from "@/components/SignInButton";

const SignInPage = async () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-4 rounded-md grid gap-2">
        <p className="font-bold">Welcome to FINS BOF</p>
        <SignInButton />
      </div>
    </div>
  );
};

export default SignInPage;
