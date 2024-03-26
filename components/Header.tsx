import Image from "next/image";
import DiningDropDown from "./DiningDropDown";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { Button } from "./ui/button";
import Cart from "./Cart";

function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-screen items-center justify-between border-b-2 bg-white p-4 px-6 ">
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

      <div className="flex items-center gap-3">
        <NavLinks />
        <DiningDropDown />
        <Sheet>
          <SheetTrigger asChild>
            <Button>Cart</Button>
          </SheetTrigger>
          <SheetContent className="xs:max-w-full p-0 sm:max-w-full md:max-w-[500px] ">
            <Cart />
          </SheetContent>
        </Sheet>
        {/* <HeaderTime /> */}
        <UserProfile />
      </div>
    </header>
  );
}

export default Header;
