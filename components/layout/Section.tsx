import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
    children: ReactNode;
    title?: string;
    eyebrow?: string;
    className?: string;
    id?: string;
};

export function Section({
    children,
    title,
    eyebrow,
    className,
    id,
}: SectionProps) {
    return (
        <section id={id} className={cn("py-12 sm:py-16", className)}>
            {(title || eyebrow) && (
                <header className="mb-6 sm:mb-8">
                    {eyebrow && (
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            {eyebrow}
                        </p>
                    )}
                    {title && (
                        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                            {title}
                        </h2>
                    )}
                </header>
            )}
            {children}
        </section>
    );
}
