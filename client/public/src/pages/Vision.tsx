import { PageHeader } from "@/components/PageHeader";
import { Lightbulb, Target, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import visionImg from "@/pages/assets/14.jpg";

export default function Vision() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("vision.title")}
        subtitle={t("vision.subtitle")}
        image={visionImg}
      />

      <div className="relative">
        {/* Page Background */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-medium leading-relaxed text-foreground"
            >
              "{t("vision.p1")}"
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Lightbulb,
                title: t("vision.item1_title"),
                desc: t("vision.item1_desc")
              },
              {
                icon: Target,
                title: t("vision.item2_title"),
                desc: t("vision.item2_desc")
              },
              {
                icon: Compass,
                title: t("vision.item3_title"),
                desc: t("vision.item3_desc")
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-card/80 backdrop-blur-sm p-10 rounded-2xl border border-border shadow-lg text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
