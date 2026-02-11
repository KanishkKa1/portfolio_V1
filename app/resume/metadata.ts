import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
    title: "Resume | Kanishk Agarwal",
    description:
        "Professional experience, engineering focus areas, and technical skills of Kanishk Agarwal.",
    path: "/resume",
});
