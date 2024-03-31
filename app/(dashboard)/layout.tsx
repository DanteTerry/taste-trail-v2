import React from "react";
import FindTaste from "@/components/FindTaste";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative h-full w-full  bg-neutral-200 lg:pt-4">
      <FindTaste />
      <section className="pt-12">{children}</section>
    </section>
  );
}

export default layout;
