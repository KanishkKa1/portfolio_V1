import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";

type MetadataInput = {
    title: string;
    description: string;
    path: string;
};

export function createMetadata({
    title,
    description,
    path,
}: MetadataInput): Metadata {
    const absoluteUrl = new URL(path, siteConfig.siteUrl).toString();

    return {
        metadataBase: new URL(siteConfig.siteUrl),
        title,
        description,
        alternates: {
            canonical: absoluteUrl,
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl,
            siteName: `${siteConfig.name} Portfolio`,
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}
