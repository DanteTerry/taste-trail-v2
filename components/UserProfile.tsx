import Image from "next/image";
import React from "react";

function UserProfile() {
  return (
    <div className="w-[40px] h-[40px]">
      <Image
        src={"/icons/profile.png"}
        width={0}
        height={0}
        alt="avatar"
        sizes="100%"
        className="w-full"
      />
    </div>
  );
}

export default UserProfile;
