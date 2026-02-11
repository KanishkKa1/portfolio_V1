import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/data/projects";
import { createMetadata } from "@/lib/seo";

export function getProjectMetadata(slug: string): Metadata {
    const project = getProjectBySlug(slug);

    if (!project) {
        return createMetadata({
            title: "Project Not Found | Kanishk Agarwal",
            description: "The requested project could not be found.",
            path: `/projects/${slug}`,
        });
    }

    return createMetadata({
        title: `${project.title} | Projects`,
        description: project.summary,
        path: `/projects/${slug}`,
    });
}
