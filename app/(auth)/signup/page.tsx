"use client";

import { Button } from "@/components/ui/button";
import { SignUpSchema } from "@/lib/validation";
import { TSignUp } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { AiFillGoogleCircle } from "react-icons/ai";
import { toast } from "sonner";

function SignUpPage() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<TSignUp>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: TSignUp) => {
    const user = {
      name: data.name,
      password: data.password,
      email: data.email,
    };

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast("Account created successfully");
        router.push("/signin");
      } else {
        throw new Error("An error occurred");
      }

      reset();
    } catch (error: any) {
      toast(error.message);
    }
  };

  return (
    <div className="container w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary">Welcome</h2>
          <p className="text-lg font-normal text-gray-600">
            Sign up for an account
          </p>
        </div>

        <div className="w-full text-center md:w-3/4">
          <Button
            className="w-full rounded-md border-2 border-primary bg-white p-2 py-4 text-lg text-primary hover:bg-white"
            onClick={() => signIn("google")}
          >
            Sign Up with Google{" "}
            <AiFillGoogleCircle className=" ml-2 text-2xl" />
          </Button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 md:w-3/4"
        >
          <p className="text-center text-2xl font-semibold text-gray-600">or</p>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border-2 border-primary/50 p-2 py-3 text-lg text-primary outline-none"
            {...register("name")}
          />

          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-md border-2 border-primary/50 p-2 py-3 text-lg text-primary outline-none"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border-2 border-primary/50 p-2 py-3 text-lg text-primary outline-none"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
          <input
            type="password"
            placeholder="Confirm Password   "
            className="w-full rounded-md border-2 border-primary/50 p-2 py-3 text-lg text-primary outline-none"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}

          <Button
            className="w-full rounded-md bg-primary p-2 py-4 text-lg text-white"
            disabled={isSubmitting}
          >
            Sign Up
          </Button>

          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
