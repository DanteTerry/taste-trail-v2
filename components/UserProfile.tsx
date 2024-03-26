"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function UserProfile() {
  const router = useRouter();
  const session = null;
  return (
    <div className="flex">
      <Button onClick={() => router.push("/signin")}>Sign In</Button>
      {session && (
        <Image src={"/icons/profile.png"} width={30} height={30} alt="avatar" />
      )}
    </div>
  );
}

export default UserProfile;
