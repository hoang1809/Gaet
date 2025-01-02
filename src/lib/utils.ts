import { API_URL } from "@/constant/app"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiMedia(url: string) {
  if (url.startsWith("/")) {
    return `${API_URL}${url}`
  }
  return url
}
