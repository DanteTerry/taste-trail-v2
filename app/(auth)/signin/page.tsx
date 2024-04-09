"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { SignInSchema } from "@/lib/validation";
import { TSignIn } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { AiFillGoogleCircle } from "react-icons/ai";

function SignInPage() {
  const {
    register,

    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<TSignIn>({
    resolver: zodResolver(SignInSchema),
  });

  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center justify-center">
        <h2 className="text-3xl text-primary">You are already signed in</h2>
      </div>
    );
  }

  const onsubmit = async (data: TSignIn) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    const res = await signIn("credentials", {
      redirect: false,
      email: user.email,
      password: user.password,
    });

    if (res?.ok) {
      reset();
    }

    if (res?.error) {
      toast("Invalid Email or Password");
    }
  };

  return (
    <div className=" container w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary">Welcome</h2>
          <p className="text-lg font-normal text-gray-600">
            Sign in to your account
          </p>
        </div>

        <div className="w-full text-center md:w-3/4">
          <Button
            className="w-full rounded-md border-2 border-primary bg-white p-2 py-4 text-lg text-primary hover:bg-white"
            onClick={() => signIn("google")}
          >
            Sign In with Google{" "}
            <AiFillGoogleCircle className=" ml-2 text-2xl" />
          </Button>
        </div>

        <form
          className="flex w-full flex-col gap-4 md:w-3/4"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div>
            <p className="text-center text-2xl font-semibold text-gray-600">
              or
            </p>
            <label htmlFor="email" className="text-lg text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border-2 border-primary/50 p-2 py-3 text-lg text-primary outline-none"
              {...register("email")}
              defaultValue={"johndoe@gmail.com"}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-lg  text-primary">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-md border-2 border-primary/50 p-2 py-3 text-lg text-primary outline-none"
              {...register("password")}
              defaultValue={"asdfghjkl"}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button
            className="w-full rounded-md bg-primary p-2 py-4 text-lg text-white"
            disabled={isSubmitting}
          >
            Sign In
          </Button>
          <p className="text-center text-gray-600">
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
