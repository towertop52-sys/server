import { PageHeader } from "@/components/PageHeader";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import estimationImg from "@/pages/assets/commercial/51.jpeg";

export default function Estimation() {
    const { t } = useTranslation();

    const sections = [
        "cost",
        "timeline",
        "resource",
        "risk",
    ] as const;

    return (
        <div className="min-h-screen">
            <PageHeader
                title={t("expertise.estimation_page.title")}
                subtitle={t("expertise.estimation_page.subtitle")}
                image={estimationImg}
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {sections.map((section, idx) => {
                            const sentences = t(`expertise.estimation_page.sections.${section}.sentences`, { returnObjects: true });
                            const sentenceArray = Array.isArray(sentences) ? sentences : [];

                            return (
                                <motion.div
                                    key={section}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="group p-8 md:p-10 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="mb-0">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                                <Calculator className="w-6 h-6" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-display font-bold">
                                                {t(`expertise.estimation_page.sections.${section}.title`)}
                                            </h2>
                                        </div>
                                        <div className="space-y-4">
                                            {sentenceArray.map((sentence: string, sIdx: number) => (
                                                <p key={sIdx} className="text-lg text-muted-foreground leading-relaxed">
                                                    {sentence}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
