import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import { getProjectMetadata } from "./metadata";

type ProjectDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: ProjectDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    return getProjectMetadata(slug);
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <Container>
            <Section eyebrow={project.year} title={project.title}>
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <Card>
                        <Image
                            src={project.image}
                            alt={`${project.title} showcase`}
                            className="h-auto w-full rounded-xl border border-border object-cover"
                            placeholder="blur"
                        />
                        <p className="mt-5 text-sm leading-relaxed text-muted">
                            {project.summary}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs text-muted"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Role
                        </p>
                        <p className="mt-2 text-lg font-semibold text-foreground">
                            {project.role}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button href={project.liveUrl} variant="primary">
                                Live Demo
                            </Button>
                            <Button href={project.repoUrl} variant="secondary">
                                Source
                            </Button>
                        </div>
                    </Card>
                </div>
            </Section>

            <Section title="Case study">
                <div className="grid gap-4 sm:grid-cols-3">
                    <Card>
                        <h3 className="text-lg font-semibold text-foreground">
                            Problem
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            {project.problem}
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-lg font-semibold text-foreground">
                            Solution
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            {project.solution}
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-lg font-semibold text-foreground">
                            Impact
                        </h3>
                        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                            {project.impact.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </Section>

            <Section>
                <Link
                    href="/projects"
                    className="text-sm font-semibold text-primary hover:underline"
                    aria-label="Back to all projects"
                >
                    Back to all projects
                </Link>
            </Section>
        </Container>
    );
}
