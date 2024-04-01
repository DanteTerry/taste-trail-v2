import React from "react";
import FindTaste from "@/components/FindTaste";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative ml-3 h-full w-full  bg-neutral-200 lg:pt-4">
      <FindTaste />
      <section className="-z-30  bg-neutral-100 pt-12">{children}</section>
    </section>
  );
}

export default layout;
