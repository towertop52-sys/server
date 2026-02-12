import { PageHeader } from "@/components/PageHeader";
import { useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, MouseEvent } from "react";
import { X } from "lucide-react";

// Get all commercial images
const commercialImages = Object.values(import.meta.glob("./assets/commercial/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: 'default',
})) as string[];

// Get all apartment images
const apartmentImages = Object.values(import.meta.glob("./assets/Apartments/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: 'default',
})) as string[];

export default function Services() {
  const { t } = useTranslation();
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // High-end commercial architecture header image
  const commercialHeader = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

  const servicesData = {
    commercial: {
      title: t("services.commercial_title"),
      subtitle: t("services.commercial_subtitle"),
      description: t("services.commercial_desc"),
      images: commercialImages,
      header: commercialHeader
    },
    residential: {
      title: t("services.residential_title"),
      subtitle: t("services.residential_subtitle"),
      description: t("services.residential_desc"),
      images: apartmentImages,
      header: apartmentImages[0]
    },
  };

  const type = (params.type || 'commercial') as keyof typeof servicesData;
  const data = servicesData[type] || servicesData.commercial;

  return (
    <div className="min-h-screen" >
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        image={data.header}
      />

      <div className="relative">
        {/* Page Background */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img
            src={commercialHeader}
            alt={t("services.commercial_title")}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${t("services.project")} ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-6 py-2 border border-white/50 rounded-full">{t("services.view_project")}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 z-50 flex items-center gap-2 text-white/75 hover:text-white transition-colors bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <span className="text-sm font-medium tracking-wide uppercase">{t("services.close")}</span>
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e: MouseEvent) => e.stopPropagation()}
              src={selectedImage}
              alt={t("services.full_view")}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
