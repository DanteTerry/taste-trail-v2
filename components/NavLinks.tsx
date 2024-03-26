"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/constant";

import Cart from "./Cart";

function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-5 font-semibold text-neutral-400 md:flex">
      {navLinks.map((link) => (
        <li className="list-none" key={link.href}>
          <Link
            className={cn(
              "flex gap-2 transition-all duration-300 hover:text-neutral-600",
              pathname === link.href && "text-primary hover:text-primary",
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
