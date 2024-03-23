import React from "react";
import FindTaste from "@/components/FindTaste";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full w-full lg:pt-4">
      <FindTaste />
      <section className="p-4">{children}</section>
    </section>
  );
}

export default layout;
