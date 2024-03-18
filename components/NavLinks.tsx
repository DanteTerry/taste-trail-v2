"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/constant";

function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex gap-5 text-neutral-400 font-semibold">
      {navLinks.map((link) => (
        <li className="list-none" key={link.href}>
          <Link
            className={cn(
              "flex gap-2 hover:text-neutral-600 transition-all duration-300",
              pathname === link.href && "text-primary hover:text-primary"
            )}
            href={link.href}
          >
            <link.icon /> {link.label}
          </Link>
        </li>
      ))}
    </nav>
  );
}

export default NavLinks;
