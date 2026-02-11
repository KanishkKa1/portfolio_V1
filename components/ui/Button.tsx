import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    ariaLabel?: string;
};

const baseStyles =
    "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
        "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
    secondary:
        "border-border bg-surface text-foreground hover:border-primary hover:text-primary",
    ghost: "border-transparent bg-transparent text-muted hover:text-foreground",
};

export function Button({
    children,
    href,
    variant = "primary",
    className,
    ariaLabel,
}: ButtonProps) {
    const classes = cn(baseStyles, variantStyles[variant], className);

    if (href) {
        return (
            <Link href={href} className={classes} aria-label={ariaLabel}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" className={classes} aria-label={ariaLabel}>
            {children}
        </button>
    );
}
