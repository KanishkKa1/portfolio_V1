import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/constants/site";

export function Hero() {
    return (
        <section className="grid items-center gap-8 py-12 sm:py-16 md:grid-cols-[1.2fr_0.8fr]">
            <FadeIn>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {siteConfig.title}
                </p>
                <h1 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
                    Building products that are fast, reliable, and quietly
                    delightful.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                    {siteConfig.description} I care about execution quality,
                    readable architecture, and measurable outcomes.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="/projects" ariaLabel="View project work">
                        View Projects
                    </Button>
                    <Button
                        href="/contact"
                        variant="secondary"
                        ariaLabel="Open contact page"
                    >
                        Contact Me
                    </Button>
                </div>
            </FadeIn>

            <FadeIn delay={0.08} className="mx-auto w-full max-w-xs sm:max-w-sm">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-3">
                    <Image
                        src="/Kanishk_avatar.png"
                        width={620}
                        height={680}
                        className="h-auto w-full rounded-2xl object-cover"
                        alt="Portrait of Kanishk Agarwal"
                        priority
                    />
                    <div className="mt-4 space-y-1 p-2">
                        <p className="text-sm font-semibold text-foreground">
                            {siteConfig.name}
                        </p>
                        <p className="text-sm text-muted">{siteConfig.location}</p>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
