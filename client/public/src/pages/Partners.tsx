import { PageHeader } from "@/components/PageHeader";
import { useTranslation } from "react-i18next";
import headerImg from "./assets/4.jpg";

// Dynamically import all partner images from the local assets folder
const partnerImageFiles = import.meta.glob("./assets/partner/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// Convert the object values to an array of image paths
const partnerImages = Object.values(partnerImageFiles);

export default function Partners() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("partners.title")}
        subtitle={t("partners.subtitle")}
        image={headerImg}
      />

      <div className="relative">
        {/* Page Background */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
            alt="Partners Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
            {partnerImages.map((image, idx) => (
              <div
                key={idx}
                className="aspect-square bg-white/80 backdrop-blur-sm border border-border rounded-2xl flex items-center justify-center p-6 md:p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <img
                  src={image}
                  alt={`Partner ${idx + 1}`}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              {t("partners.cta_title")}
            </h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {t("partners.cta_description")}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {t("partners.cta_button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
