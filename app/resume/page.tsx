export { metadata } from "./metadata";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const experience = [
    {
        period: "2024 - Present",
        role: "Software Engineer",
        company: "Harman International",
        points: [
            "Delivered platform features with a focus on reliability and maintainability.",
            "Improved developer workflows by introducing cleaner service boundaries.",
            "Partnered with product and QA to accelerate release confidence.",
        ],
    },
    {
        period: "2022 - 2024",
        role: "Associate Engineer",
        company: "Engineering Projects and Research",
        points: [
            "Built full-stack applications with measurable business outcomes.",
            "Implemented observability and performance improvements in core services.",
            "Contributed to AI/ML prototypes with production-minded rollout criteria.",
        ],
    },
];

const skills = [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "System Design",
];

export default function ResumePage() {
    return (
        <Container>
            <Section eyebrow="Resume" title="Experience and capabilities">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-4">
                        {experience.map((item) => (
                            <Card key={`${item.company}-${item.period}`}>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    {item.period}
                                </p>
                                <h3 className="mt-2 text-lg font-semibold text-foreground">
                                    {item.role}
                                </h3>
                                <p className="text-sm text-muted">{item.company}</p>
                                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                                    {item.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>

                    <Card>
                        <h3 className="text-lg font-semibold text-foreground">
                            Core Skills
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs text-muted"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-muted">
                            Need the full PDF version? Share your email, and I
                            can send the latest resume.
                        </p>
                        <div className="mt-4">
                            <Button href="/contact" variant="secondary">
                                Request Resume PDF
                            </Button>
                        </div>
                    </Card>
                </div>
            </Section>
        </Container>
    );
}
