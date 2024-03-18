"use client";
import { sideBarLinks } from "@/constants/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar({ className }: { className?: string }) {
  const pathName = usePathname();
  return (
    <div className={cn("col-span-1 lg:block  py-4 border-r-2 px-5", className)}>
      <div className="flex w-full gap-6 flex-col">
        {sideBarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              "flex flex-col rounded-lg items-center  transition-all  text-[#828487]  text-4xl p-2",
              pathName === link.href
                ? "bg-primary text-white"
                : "hover:bg-neutral-200"
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
