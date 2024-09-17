import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const url = process.env.NEXT_PUBLIC_BASE_URI || "http://localhost:4000";

export const axiosInstance = axios.create({
  baseURL: `${url}`,
  withCredentials: true,
})
