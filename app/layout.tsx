import type { Metadata } from "next";
import { Space_Grotesk, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Cart from "@/components/Cart";
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
  const cart = "";
  return (
    <html lang="en">
      <body className={`${spaceSpace_Grotesk.className}  h-full`}>
        <Header />
        <MobileNav />
        <main className="grid grid-cols-12">
          <Sidebar className="hidden h-full" />
          <section
            className={cn(
              "col-span-8",
              !cart && "lg:col-span-11 col-span-12 h-full"
            )}
          >
            {children}
          </section>
          {cart && <Cart />}
        </main>
      </body>
    </html>
  );
}
