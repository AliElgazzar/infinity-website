"use client";

import { usePathname } from "next/navigation";

/** Lightweight identity wrapper — avoids animating whole pages on every route change. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div key={pathname}>{children}</div>;
}
