import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
    children: ReactNode;
    className?: string;
};

export function Card({ children, className }: CardProps) {
    return (
        <article
            className={cn(
                "rounded-2xl border border-border bg-surface p-5 sm:p-6",
                className,
            )}
        >
            {children}
        </article>
    );
}
