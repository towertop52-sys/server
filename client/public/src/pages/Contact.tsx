import { PageHeader } from "@/components/PageHeader";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { trackCTAClick } from "@/lib/analytics";
import contactImg from "@/pages/assets/7.jpg";

export default function Contact() {
  const { t } = useTranslation();


  const phoneNumbers = [
    { display: "01555999908", value: "201555999908" },
    { display: "01555999905", value: "201555999905" },
    { display: "01096981640", value: "201096981640" },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        image={contactImg}
      />

      <div className="relative">
        {/* Page Background */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24">
          {/* Info Side */}
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-display font-bold mb-6">{t("contact.get_in_touch")}</h2>
              <p className="text-muted-foreground text-lg">
                {t("contact.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-3">{t("contact.phone")}</h3>
                  <div className="space-y-4 flex flex-col items-center">
                    {phoneNumbers.map((num) => (
                      <div key={num.value} className="flex items-center gap-3">
                        <a
                          href={`tel:+${num.value}`}
                          className="text-muted-foreground hover:text-primary transition-colors font-medium text-lg"
                          dir="ltr"
                          onClick={() => trackCTAClick(`Call_${num.display}`)}
                        >
                          {num.display}
                        </a>
                        <a
                          href={`https://wa.me/${num.value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] text-white p-2 rounded-lg hover:scale-110 transition-transform shadow-sm flex items-center gap-2 text-sm font-bold"
                          onClick={() => trackCTAClick(`WhatsApp_${num.display}`)}
                        >
                          <FaWhatsapp className="w-4 h-4" />
                          WhatsApp
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t("contact.email")}</h3>
                  <p className="text-muted-foreground">Towertop52@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t("contact.office")}</h3>
                  <p className="text-muted-foreground">
                    {t("contact.address_value")}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Map Section */}
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-display font-bold">{t("contact.location")}</h2>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border bg-background/50 backdrop-blur-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.7538226874076!2d31.151107500000006!3d29.986504099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845001ddb93e1%3A0x2409746b87c9d01d!2z2LTYsdmD2Kkg2KrYp9mI2LEg2KrZiNioINmE2YTZhdmC2KfZiNmE2KfYqiDYp9mE2LnYp9mF2Kkg2YjYp9mE2KrYtNi32YrYqNin2Ko!5e0!3m2!1sen!2seg!4v1767782399429!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
