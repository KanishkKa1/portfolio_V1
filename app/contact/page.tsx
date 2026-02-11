export { metadata } from "./metadata";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/constants/site";

export default function ContactPage() {
    return (
        <Container>
            <Section eyebrow="Contact" title="Let’s talk">
                <div className="grid gap-5 md:grid-cols-2">
                    <Card>
                        <h3 className="text-lg font-semibold text-foreground">
                            Direct
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-muted">
                            <p>
                                Email:{" "}
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="text-primary hover:underline"
                                >
                                    {siteConfig.email}
                                </a>
                            </p>
                            <p>
                                Phone:{" "}
                                <a
                                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                                    className="text-primary hover:underline"
                                >
                                    {siteConfig.phone}
                                </a>
                            </p>
                            <p>Location: {siteConfig.location}</p>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-lg font-semibold text-foreground">
                            Social
                        </h3>
                        <div className="mt-4 space-y-3 text-sm">
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-primary hover:underline"
                                aria-label="Open LinkedIn profile"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={siteConfig.social.github}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-primary hover:underline"
                                aria-label="Open GitHub profile"
                            >
                                GitHub
                            </a>
                        </div>
                    </Card>
                </div>
            </Section>
        </Container>
    );
}
