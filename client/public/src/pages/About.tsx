import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import headerImg from "@/pages/assets/13.jpg";
import contentImg from "@/pages/assets/115.jpeg";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        image={headerImg}
      />

      <div className="relative">
        {/* Page Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t("about.heading")}</h2>
              <div className="h-1 w-20 bg-primary mb-8" />

              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-foreground">{t("about.company_name")}</h3>
                <p className="text-sm text-muted-foreground">{t("about.registration")}</p>
                <p className="text-sm text-muted-foreground">{t("about.established")}</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("about.p1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("about.p2")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("about.p3")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[t("about.check1"), t("about.check2"), t("about.check3"), t("about.check4")].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4" />
              <img
                src={contentImg}
                alt="Team at work"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
