"use client";
import Image from "next/image";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { Button } from "./ui/button";
import Cart from "./Cart";
import { useCartStore } from "@/lib/store/cart-store";

function Header() {
  const cart = useCartStore((state) => state.cart);
  return (
    <header className="fixed top-0 z-50 flex w-screen items-center justify-between border-b-2 bg-white p-4   md:px-6 ">
      <div className="flex items-center md:hidden ">
        <Sheet>
          <SheetTrigger>
            <Menu size={"30px"} />
          </SheetTrigger>
          <SheetContent side={"left"} className="w-2/4 md:hidden">
            <Sidebar className="h-full border-none px-0" />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src={"/icons/logo.svg"} alt="logo" height={40} width={40} />
          <h2 className="text-2xl font-semibold text-primary">TasteTrail</h2>
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <NavLinks />
        <UserProfile />
        <Sheet>
          <SheetTrigger asChild className="hidden md:flex">
            <Button className="hidden gap-2  md:flex">
              <ShoppingCart /> {cart.length > 0 && `(${cart.length})`}
            </Button>
          </SheetTrigger>
          <SheetContent className="xs:max-w-full p-0 sm:max-w-full md:max-w-[500px] ">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
