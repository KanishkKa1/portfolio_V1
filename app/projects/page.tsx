export { metadata } from "./metadata";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
    return (
        <Container>
            <Section
                eyebrow="Projects"
                title="Recent software engineering and AI work"
            >
                <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                    A curated selection of projects across product engineering,
                    data systems, and AI-enhanced workflows.
                </p>
                <ProjectGrid projects={projects} />
            </Section>
        </Container>
    );
}
