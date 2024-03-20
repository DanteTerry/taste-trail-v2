import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function UserProfile() {
  const session = null;
  return (
    <div className="flex">
      <Button>Login</Button>
      {session && (
        <Image src={"/icons/profile.png"} width={30} height={30} alt="avatar" />
      )}
    </div>
  );
}

export default UserProfile;
