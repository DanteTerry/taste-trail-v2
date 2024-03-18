import FindTaste from "@/components/FindTaste";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <FindTaste />
      <section className="p-4">{children}</section>
    </section>
  );
}

export default layout;
