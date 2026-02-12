import { PageHeader } from "@/components/PageHeader";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import founderImg from "@/pages/assets/founder/214.jpeg";
import headerBg from "./assets/11.jpg";

export default function Founder() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("founder.title")}
        subtitle={t("founder.subtitle")}
        image={headerBg}
        imageClassName="object-cover"
      />

      <div className="relative">
        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto bg-card/90 backdrop-blur-sm rounded-3xl border border-border overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Optimized Image Container: Fills the entire half of the card */}
            <div className="md:w-1/2 relative bg-muted/20">
              <img
                src={founderImg}
                alt={t("founder.name")}
                className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
              />
            </div>

            <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-4xl font-display font-bold mb-2">{t("founder.name")}</h2>
                <p className="text-primary font-medium tracking-wide uppercase">{t("founder.role")}</p>
              </div>

              <div className="relative">
                <Quote className="absolute -top-6 -left-4 w-12 h-12 text-primary/10 rotate-180" />
                <p className="text-muted-foreground text-lg leading-relaxed italic mb-8 relative z-10">
                  "{t("founder.quote")}"
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t("founder.bio1")}
                </p>
                <p>
                  {t("founder.bio2")}
                </p>
                <p>
                  {t("founder.bio3")}
                </p>
                <p>
                  {t("founder.bio4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
