import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <section className="h-full w-full px-3 py-2 ">{children}</section>;
}

export default layout;
