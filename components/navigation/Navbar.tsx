"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
            <Container className="flex min-h-16 items-center justify-between gap-4">
                <Link
                    href="/"
                    className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
                    aria-label="Go to home page"
                >
                    Kanishk
                </Link>

                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted hover:text-foreground md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-controls="mobile-navigation"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((current) => !current)}
                >
                    <span className="sr-only">Menu</span>
                    <span aria-hidden>{isOpen ? "X" : "="}</span>
                </button>

                <nav className="hidden items-center gap-1 md:flex" aria-label="Desktop">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm font-medium transition",
                                pathname === link.href
                                    ? "bg-surface text-foreground"
                                    : "text-muted hover:text-foreground",
                            )}
                            aria-current={pathname === link.href ? "page" : undefined}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </Container>

            {isOpen && (
                <nav
                    id="mobile-navigation"
                    className="border-t border-border bg-surface md:hidden"
                    aria-label="Mobile"
                >
                    <Container className="flex flex-col py-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "rounded-lg px-3 py-2 text-sm font-medium",
                                    pathname === link.href
                                        ? "bg-surface-muted text-foreground"
                                        : "text-muted hover:text-foreground",
                                )}
                                aria-current={pathname === link.href ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Container>
                </nav>
            )}
        </header>
    );
}
