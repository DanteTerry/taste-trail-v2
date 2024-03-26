import Image from "next/image";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-[90vh] w-full px-3 py-2 md:grid-cols-2">
      <div className="hidden w-full overflow-hidden md:flex">
        <Image
          src={"/icons/signup.jpg"}
          alt="food image"
          sizes="100%"
          height={0}
          width={0}
          priority={true}
          className="h-full w-full object-cover"
        />
      </div>
      {children}
    </div>
  );
}

export default layout;
