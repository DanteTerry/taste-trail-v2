import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const spaceSpace_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TasteTrail - A one-stop shop for all your food needs",
  description:
    "TasteTrail is a one-stop shop for all your food needs. We provide recipes, ingredients, and more.TasteTrail is your ultimate destination for an immersive culinary experience, right at your fingertips. With TasteTrail, we bring the joy of discovering delectable dishes, reserving tables, and ordering food online to a whole new level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceSpace_Grotesk.className} w-screen overflow-x-hidden`}
      >
        <Header />
        <MobileNav />
        <main>
          <Sidebar className="hidden h-full bg-white lg:fixed lg:pt-20" />
          <section className={cn("h-full pt-[65px] lg:pl-[128px]")}>
            {children}
          </section>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
