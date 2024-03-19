import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <section className="px-5">{children}</section>;
}

export default layout;
