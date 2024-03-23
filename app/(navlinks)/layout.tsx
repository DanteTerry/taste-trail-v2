import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <section className="h-full w-full p-5">{children}</section>;
}

export default layout;
