import projectOne from "@/images/project-1.png";
import projectTwo from "@/images/project-2.png";
import projectThree from "@/images/project-3.jpg";
import projectFour from "@/images/project-4.png";
import type { Project } from "@/types/project";

// Centralized data enables static generation for /projects and /projects/[slug].
export const projects: Project[] = [
    {
        slug: "ai-support-copilot",
        title: "AI Support Copilot",
        summary:
            "Internal co-pilot that drafts contextual responses for support engineers from historical tickets.",
        year: "2025",
        role: "Full-stack Engineer",
        stack: ["Next.js", "TypeScript", "Node.js", "Vector DB", "OpenAI API"],
        image: projectOne,
        liveUrl: "https://example.com/ai-support-copilot",
        repoUrl: "https://github.com/KanishkKa1",
        problem:
            "Support teams lost time searching old incidents and writing repetitive first-draft responses.",
        solution:
            "Built a retrieval-first co-pilot with relevance-ranked ticket context and response templates tuned by team feedback.",
        impact: [
            "Reduced average first-response time by 36%.",
            "Improved internal quality score from 3.8 to 4.5/5.",
            "Cut duplicate incident escalations by surfacing prior fixes.",
        ],
    },
    {
        slug: "realtime-observability-dashboard",
        title: "Realtime Observability Dashboard",
        summary:
            "A low-latency service health dashboard for product and engineering leadership.",
        year: "2024",
        role: "Backend + Data Visualization",
        stack: ["Next.js", "WebSockets", "PostgreSQL", "Redis", "Docker"],
        image: projectTwo,
        liveUrl: "https://example.com/observability-dashboard",
        repoUrl: "https://github.com/KanishkKa1",
        problem:
            "Teams lacked a single view of latency, error rates, and deployment impact across services.",
        solution:
            "Designed a streaming metrics pipeline with lightweight edge caching and a focused incident timeline UI.",
        impact: [
            "Enabled under-2-second incident detection on core APIs.",
            "Improved cross-team incident communication during on-call.",
            "Lowered mean time to recovery by 22%.",
        ],
    },
    {
        slug: "portfolio-analytics-engine",
        title: "Portfolio Analytics Engine",
        summary:
            "A modular analytics pipeline to evaluate engagement and optimize portfolio conversion.",
        year: "2024",
        role: "Product Engineer",
        stack: ["TypeScript", "Next.js", "Server Actions", "Plausible", "Vercel"],
        image: projectThree,
        liveUrl: "https://example.com/portfolio-analytics",
        repoUrl: "https://github.com/KanishkKa1",
        problem:
            "Portfolio visitors dropped off before reaching projects and contact sections.",
        solution:
            "Instrumented section-level analytics and refactored page information hierarchy for faster content discovery.",
        impact: [
            "Increased project detail click-through by 48%.",
            "Raised contact page completion rate by 27%.",
            "Maintained near-perfect Lighthouse performance scores.",
        ],
    },
    {
        slug: "ml-feature-lab",
        title: "ML Feature Lab",
        summary:
            "A small experimentation platform to ship and evaluate ML-assisted product features safely.",
        year: "2023",
        role: "ML Engineer",
        stack: ["Python", "FastAPI", "Next.js", "Pydantic", "Azure"],
        image: projectFour,
        liveUrl: "https://example.com/ml-feature-lab",
        repoUrl: "https://github.com/KanishkKa1",
        problem:
            "ML ideas took too long to evaluate, and feature quality was inconsistent across experiments.",
        solution:
            "Implemented a reproducible experiment workflow with feature flags, offline evaluation reports, and rollout gates.",
        impact: [
            "Reduced prototype-to-pilot cycle from 4 weeks to 10 days.",
            "Introduced traceable model evaluation standards.",
            "Improved confidence in launching ML-backed features.",
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
