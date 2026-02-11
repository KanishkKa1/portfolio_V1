export { metadata } from "./metadata";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/constants/site";

const strengths = [
    "Production-grade TypeScript architecture",
    "Performance-first frontend implementation",
    "API design and platform reliability",
    "Pragmatic AI/ML feature delivery",
];

export default function HomePage() {
    return (
        <Container>
            <Hero />

            <Section
                id="highlights"
                eyebrow="Highlights"
                title="Focused engineering, measurable outcomes"
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    {strengths.map((strength) => (
                        <Card key={strength}>
                            <p className="text-sm leading-relaxed text-muted">
                                {strength}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section
                id="featured-projects"
                eyebrow="Selected Work"
                title="Recent projects"
            >
                <ProjectGrid projects={projects.slice(0, 3)} />
            </Section>

            <Section id="quick-contact" eyebrow="Open To" title="Let’s build">
                <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-base font-semibold text-foreground">
                            Available for impactful software engineering roles.
                        </p>
                        <p className="mt-1 text-sm text-muted">
                            Reach out via{" "}
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-primary hover:underline"
                            >
                                {siteConfig.email}
                            </a>
                            .
                        </p>
                    </div>
                    <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                        aria-label="Visit LinkedIn profile"
                    >
                        LinkedIn
                    </a>
                </Card>
            </Section>
        </Container>
    );
}
