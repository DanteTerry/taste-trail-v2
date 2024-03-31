"use client";
import { navLinks } from "@/constants/constant";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Cart from "./Cart";
import { useCartStore } from "@/lib/store/cart-store";

function MobileNav() {
  const cart = useCartStore((state) => state.cart);
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

      <Sheet>
        <SheetTrigger asChild className="hidden md:flex">
          <Button className="flex h-[50px] w-full gap-2 rounded-none py-5  md:flex">
            <ShoppingCart /> {cart.length > 0 && `(${cart.length})`}
          </Button>
        </SheetTrigger>
        <SheetContent className="xs:max-w-full p-0 sm:max-w-full md:max-w-[500px] ">
          <Cart />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
