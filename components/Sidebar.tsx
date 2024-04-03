"use client";
import { sideBarLinks } from "@/constants/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar({ className }: { className?: string }) {
  const pathName = usePathname();
  return (
    <div
      className={cn(
        "col-span-1  h-3/4  border-r-2  px-5 py-4 lg:block",
        className,
      )}
    >
      <div className="my-auto flex  w-full flex-col items-center justify-between gap-6">
        {sideBarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              "flex w-full flex-col items-center rounded-lg  p-2  text-4xl  text-[#828487] transition-all",
              pathName === link.href
                ? "bg-primary text-white"
                : "hover:bg-neutral-200",
            )}
          >
            <link.icon size={"36"} />
            <span className="text-sm font-semibold">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
