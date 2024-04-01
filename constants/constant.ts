import {
  Home,
  NotepadText,
  Sandwich,
  CakeSlice,
  Pizza,
  Soup,
} from "lucide-react";

import { SiBuymeacoffee } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

// Define an interface for navigation links
interface NavLinkProps {
  href: string; // URL path for the link
  label: string; // Display text for the link
  icon: React.ComponentType<any>; // React component representing the icon
}
interface SideBarLinksProp {
  href: string; // URL path for the link
  label: string; // Display text for the link
  icon: React.ComponentType<any>; // React component representing the icon
}

// Define an array of navigation links
export const navLinks: NavLinkProps[] = [
  {
    href: "/", // Home page URL
    label: "Home", // Label for the home link
    icon: Home, // Home icon component
  },
  {
    href: "/orders", // Order page URL
    label: "Orders", // Label for the order link
    icon: NotepadText, // Order icon component
  },
];

export const sideBarLinks: SideBarLinksProp[] = [
  {
    href: "/main",
    label: "Main Course",
    icon: IoFastFoodOutline,
  },
  {
    href: "/appetizer",
    label: "Appetizer",
    icon: Soup,
  },
  {
    href: "/sandwich",
    label: "Sandwiches",
    icon: Sandwich,
  },
  {
    href: "/pizza",
    label: "Pizzas",
    icon: Pizza,
  },
  {
    href: "/beverage",
    label: "Beverages",
    icon: SiBuymeacoffee,
  },
  {
    href: "/dessert",
    label: "Dessert",
    icon: CakeSlice,
  },
];

export const selectOptions = [
  {
    placeHolder: "Sort",
    title: ["Popularity", "Cost: High to Low", "Cost: Low to High"],
    value: ["popularity", "priceHighToLow", "priceLowToHigh"],
  },
  {
    placeHolder: "Cuisines",
    title: ["Italian", "Mexican", "Indian", "Japanese", "Czech"],
    value: ["italian", "mexican", "indian", "japanese", "czech"],
  },
  {
    placeHolder: "Rating",
    title: ["⭐ Any", "⭐ 3.5", "⭐ 4.0", "⭐ 4.5", "⭐ 5.0"],
    value: ["any", "3.5", "4.0", "4.5", "5"],
  },
];

export const customerImg = [
  "customer-1.jpg",
  "customer-2.jpg",
  "customer-3.jpg",
  "customer-4.jpg",
  "customer-5.jpg",
  "customer-6.jpg",
];

export const cuisineImg = ["czech", "indian", "italian", "japanese"];
