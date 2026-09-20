"use client";

import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { mainNav, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const mounted = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);
  const showMenu = menuOpen && menuPath === pathname;
  const menuId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const openMenu = () => {
    setMenuPath(pathname);
    setMenuOpen(true);
  };

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => {
    if (showMenu) closeMenu();
    else openMenu();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  useEffect(() => {
    if (!showMenu) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        openButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showMenu]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname],
  );

  const overHero = pathname === "/" && !scrolled && !showMenu;

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {showMenu ? (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] flex flex-col bg-[#061A26] lg:hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 blueprint-grid opacity-20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(242,140,40,0.12),transparent_40%)]"
            />
            <div className="noise-overlay opacity-[0.04]" />
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
            />

            <div className="relative z-10 flex h-[4.75rem] items-center justify-between border-b border-white/10 px-4 sm:px-6">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label={`${siteConfig.name} home`}
                onClick={closeMenu}
              >
                <Image
                  src={siteConfig.logo.src}
                  alt=""
                  width={siteConfig.logo.width}
                  height={siteConfig.logo.height}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/25 bg-white/5 text-white"
                aria-label="Close menu"
                onClick={() => {
                  closeMenu();
                  openButtonRef.current?.focus();
                }}
              >
                <X className="size-5" />
              </button>
            </div>

            <Container className="relative z-10 flex flex-1 flex-col overflow-y-auto pt-6 pb-10">
              <p className="eyebrow text-orange">Navigate</p>
              <nav className="mt-6 flex flex-1 flex-col" aria-label="Mobile primary">
                {mainNav.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="flex min-h-14 items-center justify-between border-b border-white/15 py-4 font-heading text-[1.85rem] leading-none"
                        style={{ color: active ? "#F28C28" : "#FFFFFF" }}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMenu}
                      >
                        <span className="pr-4">{item.label}</span>
                        <span
                          className="shrink-0 font-mono-tech text-xs tracking-[0.16em]"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="mt-8" onClick={closeMenu}>
                <Button href="/contact" size="lg" className="w-full">
                  Start a Project
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition duration-300",
          showMenu
            ? "pointer-events-none opacity-0"
            : scrolled
              ? "border-b border-white/10 bg-navy/80 shadow-[0_12px_50px_rgba(6,26,38,0.45)] backdrop-blur-md"
              : overHero
                ? "bg-transparent"
                : "border-b border-white/10 bg-navy/90 backdrop-blur-md",
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-orange via-electric/60 to-transparent"
        />
        <Container className="flex h-[4.75rem] items-center justify-between gap-4 md:h-[5.25rem]">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="relative flex h-11 w-[4.75rem] items-center md:h-12 md:w-[5.25rem]">
              <Image
                src={siteConfig.logo.src}
                alt=""
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="h-full w-full object-contain drop-shadow-[0_6px_18px_rgba(22,138,173,0.35)]"
                priority
              />
            </span>
            <span className="hidden font-heading text-sm leading-tight font-semibold tracking-tight text-white sm:block md:text-[0.95rem]">
              Infinity Engineering
              <span className="mt-0.5 block font-mono-tech text-[0.62rem] font-medium tracking-[0.18em] text-white/55 uppercase">
                Services
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition duration-300",
                    active ? "text-white" : "text-white/60 hover:text-white",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-orange"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Start a Project
            </Button>
          </div>

          <button
            ref={openButtonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/20 bg-white/5 text-white lg:hidden"
            aria-expanded={showMenu}
            aria-controls={menuId}
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            <Menu className="size-5" />
          </button>
        </Container>
      </header>
      {mobileMenu}
    </>
  );
}
