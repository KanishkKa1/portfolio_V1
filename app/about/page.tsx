export { metadata } from "./metadata";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/constants/site";

const values = [
    {
        title: "Ownership",
        detail:
            "I prefer end-to-end accountability from architecture decisions to production stability.",
    },
    {
        title: "Clarity",
        detail:
            "I optimize for clean code paths and direct communication between product and engineering.",
    },
    {
        title: "Execution",
        detail:
            "I value teams that ship often, learn quickly, and improve through measurable feedback loops.",
    },
];

export default function AboutPage() {
    return (
        <Container>
            <Section eyebrow="About" title={`Hi, I'm ${siteConfig.name}`}>
                <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                    <Card>
                        <p className="text-base leading-relaxed text-muted">
                            I am a software engineer with experience building
                            backend platforms, clean frontend interfaces, and
                            practical AI-assisted features. My current focus is
                            creating systems that scale without losing product
                            simplicity.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted">
                            Based in {siteConfig.location}, I enjoy working
                            across product and platform concerns where strong
                            architecture directly improves user experience.
                        </p>
                    </Card>
                    <Card>
                        <p className="text-sm uppercase tracking-[0.2em] text-primary">
                            Currently
                        </p>
                        <p className="mt-2 text-lg font-semibold text-foreground">
                            {siteConfig.company}
                        </p>
                        <p className="mt-2 text-sm text-muted">
                            Building modern engineering workflows and quality
                            developer experiences.
                        </p>
                    </Card>
                </div>
            </Section>

            <Section eyebrow="Principles" title="How I work">
                <div className="grid gap-4 sm:grid-cols-3">
                    {values.map((value) => (
                        <Card key={value.title}>
                            <h3 className="text-lg font-semibold text-foreground">
                                {value.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                                {value.detail}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>
        </Container>
    );
}
