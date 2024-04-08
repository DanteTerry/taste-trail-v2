"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/constant";

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
      {/* <Link
        className={cn(
          "flex gap-2 transition-all duration-300 hover:text-neutral-600",
          pathname === "/admin" && "text-primary hover:text-primary",
        )}
        href={"/admin"}
      >
        <UserCog /> Admin
      </Link> */}
    </nav>
  );
}

export default NavLinks;
