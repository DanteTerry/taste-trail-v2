"use client";
import React from "react";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

function UserProfile() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="flex">
      {session ? (
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/profile.png"}
              width={30}
              height={30}
              alt="avatar"
            />
            <p>{session?.user?.name ?? "Unknown"}</p>
          </div>

          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      ) : (
        <Link href="/signin">
          <Button>sign in</Button>
        </Link>
      )}
    </div>
  );
}

export default UserProfile;
