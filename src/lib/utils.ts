import { type ClassValue, clsx } from "clsx";

/** Lightweight className merger without pulling in a heavy utility stack. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function absoluteUrl(path = ""): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://infinityesc.com";
  if (!path) return base;
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatPhoneDisplay(phone: string): string {
  return phone;
}

export function currentYear(): number {
  return new Date().getFullYear();
}
