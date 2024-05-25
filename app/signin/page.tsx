"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
      <div className="text-3xl">
        Hi welcome to our app! Please sign in to continue.
      </div>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
        <LoginLink>Sign in</LoginLink>
      </div>
    </div>
  );
}
