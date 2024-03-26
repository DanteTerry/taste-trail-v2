import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <div className="container w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary">Welcome</h2>
          <p className="text-lg font-normal text-gray-600">
            Sign in to your account
          </p>
        </div>

        <form action="" className="flex w-3/4 flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border-2 border-primary/50 p-2 py-3 text-lg text-primary outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border-2 border-primary/50 p-2 py-3 text-lg text-primary outline-none"
          />

          <Button className="w-full rounded-md bg-primary p-2 text-lg text-white">
            Sign In
          </Button>
          <p className="text-gray-600">
            Don&apos;t have an account yet ?{" "}
            <Link href="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
