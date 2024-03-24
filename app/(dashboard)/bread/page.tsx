"use client";
import { RootState } from "@/lib/redux/store/store";
import React from "react";
import { useSelector } from "react-redux";

function BreadPage() {
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart);
  return <div>BreadPage</div>;
}

export default BreadPage;
