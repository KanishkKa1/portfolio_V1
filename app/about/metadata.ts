import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
    title: "About | Kanishk Agarwal",
    description:
        "About Kanishk Agarwal, software engineer focused on scalable systems and clean product execution.",
    path: "/about",
});
