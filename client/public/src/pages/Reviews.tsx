import { PageHeader } from "@/components/PageHeader";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Get all review images
const reviewImages = Object.values(import.meta.glob("./assets/review/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: 'default',
})) as string[];

export default function Reviews() {
  const { t } = useTranslation();

  const displayReviews = reviewImages.map((image, idx) => ({
    image: image,
    rating: 5,
    id: idx
  }));

  return (
    <div className="min-h-screen bg-secondary/30">
      <PageHeader
        title={t("reviews.title")}
        subtitle={t("reviews.subtitle")}
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="relative">
        {/* Page Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
            alt="Reviews Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayReviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotate: -2 }}
                whileInView={{ opacity: 1, rotate: idx % 2 === 0 ? 2 : -2 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/95 backdrop-blur-sm p-4 pb-8 shadow-xl"
                style={{ borderRadius: "2px" }} // Polaroid look
              >
                <div className="aspect-[3/4] bg-slate-100 mb-4 overflow-hidden relative">
                  <img
                    src={review.image}
                    alt="Client Review"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="font-handwriting text-center">
                  <div className="flex justify-center gap-1 text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
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
