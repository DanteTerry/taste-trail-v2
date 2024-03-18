import {
  Home,
  NotepadText,
  Clock8,
  ShoppingBasket,
  Sandwich,
  Soup,
} from "lucide-react";

import { SiBuymeacoffee } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";
import { GiWineBottle } from "react-icons/gi";
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
  {
    href: "/history", // History page URL
    label: "History", // Label for the history link
    icon: Clock8, // History icon component
  },
  {
    href: "/cart", // Bills page URL
    label: "Cart", // Label for the bills link
    icon: ShoppingBasket, // Bills icon component
  },
];

export const sideBarLinks: SideBarLinksProp[] = [
  {
    href: "/coffee",
    label: "Coffee",
    icon: SiBuymeacoffee,
  },
  {
    href: "/beverages",
    label: "Beverages",
    icon: GiWineBottle,
  },
  {
    href: "/food",
    label: "Food",
    icon: IoFastFoodOutline,
  },
  {
    href: "/appetizer",
    label: "Appetizer",
    icon: Soup,
  },
  {
    href: "/bread",
    label: "Bread",
    icon: GiSlicedBread,
  },
  {
    href: "/snack",
    label: "Snack",
    icon: Sandwich,
  },
];

export const selectOptions = [
  {
    placeHolder: "Sort by",
    title: [
      "Popularity",
      "Rating: High to Low",
      "Cost: Low to High",
      "Cost: High to Low",
    ],
    value: [
      "popularity",
      "priceHighToLow",
      "priceLowToHigh",
      "ratingHighToLow",
      "ratingLowtoHigh",
    ],
  },
  {
    placeHolder: "Cuisines",
    title: ["Italian", "Mexican", "Chinese", "Indian", "Japanese", "Czech"],
    value: ["italian", "mexican", "chinese", "indian", "japanese", "czech"],
  },
  {
    placeHolder: "Rating",
    title: ["⭐ Any", "⭐ 3.5", "⭐ 4.0", "⭐ 4.5", "⭐ 5.0"],
    value: ["any", "3.5", "4.0", "4.5", "5"],
  },
];
