import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFirstLetters(str) {
  const firstLetters = str
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return firstLetters;
}
