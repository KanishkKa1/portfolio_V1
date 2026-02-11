import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
    title: "Home | Kanishk Agarwal",
    description:
        "Software engineer portfolio featuring selected projects, work experience, and contact details.",
    path: "/",
});
