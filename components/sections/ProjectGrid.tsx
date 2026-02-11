import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/types/project";

type ProjectGridProps = {
    projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <Card key={project.slug} className="group">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="block"
                        aria-label={`Open project: ${project.title}`}
                    >
                        <div className="overflow-hidden rounded-xl border border-border">
                            <Image
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                                placeholder="blur"
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                {project.year}
                            </p>
                            <h3 className="text-lg font-semibold text-foreground">
                                {project.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted">
                                {project.summary}
                            </p>
                        </div>
                    </Link>
                </Card>
            ))}
        </div>
    );
}
