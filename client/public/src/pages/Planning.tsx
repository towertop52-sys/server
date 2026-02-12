import { PageHeader } from "@/components/PageHeader";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import planningImg from "@/pages/assets/10.jpg";

export default function Planning() {
    const { t } = useTranslation();

    const sections = [
        "concept",
        "site",
        "architectural",
        "structural",
        "budget",
        "coordination",
    ] as const;

    return (
        <div className="min-h-screen">
            <PageHeader
                title={t("expertise.planning_page.title")}
                subtitle={t("expertise.planning_page.subtitle")}
                image={planningImg}
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {sections.map((section, idx) => {
                            // Safely getting bullets as an array
                            const bullets = t(`expertise.planning_page.sections.${section}.bullets`, { returnObjects: true });
                            const bulletArray = Array.isArray(bullets) ? bullets : [];

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
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                                                0{idx + 1}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-display font-bold">
                                                {t(`expertise.planning_page.sections.${section}.title`)}
                                            </h2>
                                        </div>
                                        <ul className="space-y-4">
                                            {bulletArray.map((bullet: string, bIdx: number) => (
                                                <li key={bIdx} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
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
