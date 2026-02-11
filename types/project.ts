import type { StaticImageData } from "next/image";

export type Project = {
    slug: string;
    title: string;
    summary: string;
    year: string;
    role: string;
    stack: string[];
    image: StaticImageData;
    liveUrl: string;
    repoUrl: string;
    problem: string;
    solution: string;
    impact: string[];
};
