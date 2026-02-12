import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "@/pages/assets/logo/50.png";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Tower Top"
                className="h-16 w-auto object-contain transition-transform hover:scale-105 filter drop-shadow-md bg-white/10 rounded-lg p-2"
              />
            </Link>
            <p className="text-white leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/15pNBdzN14/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/towertop243?igsh=MXB4bXRhemN5YWZkaw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@tower.top?_r=1&_t=ZS-92ek1fePxsz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">{t("footer.quick_links")}</h4>
            <ul className="space-y-3">
              {[
                { label: t("nav.about"), href: "/about" },
                { label: t("nav.services"), href: "/services/commercial" },
                { label: t("nav.plans"), href: "/plans" },
                { label: t("nav.partners"), href: "/partners" },
                { label: t("nav.contact"), href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <div className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {[
                t("nav.commercial"),
                t("nav.residential"),
                t("services.project_management"),
                t("services.interior_design"),
                t("services.renovations"),
                t("services.consultation"),
              ].map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">{t("footer.contact_info")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-1" />
                <span>{t("contact.address_value")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="tel:+201555999908" className="hover:text-primary transition-colors" dir="ltr">
                    {t("contact.phone_value")}
                  </a>
                  <a
                    href="https://wa.me/201555999908"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:scale-110 transition-transform"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a href={`mailto:${t("contact.email_value")}`} className="hover:text-white transition-colors">
                  {t("contact.email_value")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/90">
          <p>© {new Date().getFullYear()} {t("footer.company_name")}. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
