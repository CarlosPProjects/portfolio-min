import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toggleMenu = () => {
  const menuContainer = document.getElementById("__menuContainer");

  menuContainer?.classList.toggle("active");
  console.log("Ready");
};
