import React from "react";

function HeaderTime() {
  //
  const currentTime = new Date().toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentDate = new Date().getDate();
  const currentMonth = new Date().toLocaleString("default", {
    month: "2-digit",
  });
  const currentYear = new Date().getFullYear();

  return (
    <div className="hidden lg:flex items-center gap-4 bg-neutral-100 px-4 py-2 rounded-full">
      <span>{currentTime}</span>
      <span>{`${currentDate}/${currentMonth}/${currentYear}`}</span>
    </div>
  );
}

export default HeaderTime;
