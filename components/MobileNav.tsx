import { navLinks } from "@/constants/constant";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function MobileNav() {
  return (
    <nav className="w-full flex md:hidden justify-between border-primary    absolute bottom-0">
      {navLinks.map((link) => (
        <Button
          className="w-full rounded-none py-2"
          key={link.href}
          size={"lg"}
          asChild
        >
          <Link href={link.href} className="text-2xl">
            <link.icon />
          </Link>
        </Button>
      ))}
    </nav>
  );
}

export default MobileNav;
