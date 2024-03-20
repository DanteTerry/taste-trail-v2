import { navLinks } from "@/constants/constant";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function MobileNav() {
  return (
    <nav className="fixed bottom-0 z-50 flex w-full justify-between border-primary md:hidden">
      {navLinks.map((link) => (
        <Button
          className="h-[50px] w-full rounded-none py-5"
          key={link.href}
          size={"lg"}
          asChild
        >
          <Link href={link.href} className="text-3xl">
            <link.icon />
          </Link>
        </Button>
      ))}
    </nav>
  );
}

export default MobileNav;
