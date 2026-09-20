import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-orange text-navy hover:bg-[#ff9f3d] shadow-[0_12px_34px_rgba(242,140,40,0.32)] btn-sheen",
  secondary:
    "bg-transparent text-white border border-white/25 hover:border-orange hover:text-orange backdrop-blur-sm",
  ghost:
    "bg-white/5 text-white border border-electric/35 hover:bg-electric/15 hover:border-electric",
  dark: "bg-navy text-white hover:bg-steel border border-transparent btn-sheen",
  outline:
    "bg-transparent text-navy border border-navy/20 hover:border-orange hover:text-orange",
} as const;

const sizes = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-6 text-sm md:text-base",
  lg: "min-h-14 px-8 text-base md:text-lg",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-heading font-semibold tracking-tight transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
