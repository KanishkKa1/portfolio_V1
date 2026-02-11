import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
    title: "Contact | Kanishk Agarwal",
    description:
        "Contact Kanishk Agarwal for software engineering roles, collaborations, and project opportunities.",
    path: "/contact",
});
