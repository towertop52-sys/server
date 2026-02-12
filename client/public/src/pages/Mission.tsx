import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import missionHeader from "@/pages/assets/15.jpg";
import handshakeImg from "@/pages/assets/1.jpeg";

export default function Mission() {
  const { t } = useTranslation();
  const cards = [
    {
      title: t("mission.card1_title"),
      content: t("mission.card1_desc"),
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" // Planning / Architecture
    },
    {
      title: t("mission.card2_title"),
      content: t("mission.card2_desc"),
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" // Execution / Construction
    },
    {
      title: t("mission.card3_title"),
      content: t("mission.card3_desc"),
      image: handshakeImg // Professional Hands Shaking
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("mission.title")}
        subtitle={t("mission.subtitle")}
        image={missionHeader}
      />

      <div className="relative">
        {/* Page Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt={t("mission.title")}
            className="w-full h-full object-cover grayscale"
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
              "{t("mission.p1")}"
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group h-[500px] perspective-1000 relative"
              >
                {/* Card Container */}
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl border border-border group-hover:shadow-2xl transition-all duration-500">
                  {/* Image Background - Filling the div */}
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  </div>

                  {/* Content - White Background with Black Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/95 backdrop-blur-sm border-t border-border">
                    <h3 className="text-3xl font-display font-bold mb-4 text-black">{card.title}</h3>
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <p className="text-black font-medium leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
