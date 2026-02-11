import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
    title: "Projects | Kanishk Agarwal",
    description:
        "Explore portfolio projects spanning backend systems, frontend architecture, and practical AI/ML implementations.",
    path: "/projects",
});
