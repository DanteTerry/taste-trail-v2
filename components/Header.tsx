import Image from "next/image";
import DiningDropDown from "./DiningDropDown";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <header className="flex items-center w-full justify-between z-50 p-4 py-3 border-b-2">
      <div className="flex items-center md:hidden ">
        <Sheet>
          <SheetTrigger>
            <Menu size={"30px"} />
          </SheetTrigger>
          <SheetContent side={"left"} className="w-2/4 md:hidden">
            <Sidebar className="border-none px-0 h-full" />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src={"/icons/logo.svg"} alt="logo" height={40} width={40} />
          <h2 className="text-2xl font-semibold text-primary">TasteTrail</h2>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <NavLinks />
        <DiningDropDown />
        {/* <HeaderTime /> */}
        <UserProfile />
      </div>
    </header>
  );
}

export default Header;
