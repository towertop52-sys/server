import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Building, Home as HomeIcon, Ruler, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { trackCTAClick } from "@/lib/analytics";
import heroImg from "@/pages/assets/12.jpg";
import aboutImg from "@/pages/assets/115.jpeg";
import ctaImg from "@/pages/assets/commercial/60.jpeg";
import servicesBg from "@/pages/assets/commercial/51.jpeg";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic background with parallax feel */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t("hero.subtitle")}
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              {t("hero.title_main")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                {t("hero.title_accent")}
              </span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-8 h-14 rounded-full"
                  onClick={() => trackCTAClick('Hero_GetStarted')}
                >
                  {t("hero.get_started")}
                  <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180" />
                </Button>
              </Link>
              <Link href="/about">

              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                {t("about.title")}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                {t("about.company_name")}
              </h2>

              <div className="mb-8 space-y-1 bg-white/50 p-6 rounded-2xl border border-border/50 backdrop-blur-sm">
                <p className="text-lg font-bold text-foreground">{t("about.registration")}</p>
                <p className="text-base text-muted-foreground">{t("about.established")}</p>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
              </div>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4" />
              <img
                src={aboutImg}
                alt="Construction site"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-24 relative overflow-hidden">
        {/* Background Image for Services Section */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesBg}
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t("expertise.title")}</h2>
            <p className="text-muted-foreground text-lg">
              {t("expertise.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: t("expertise.commercial_title"),
                desc: t("expertise.commercial_desc"),
                href: "/services/commercial"
              },
              {
                icon: HomeIcon,
                title: t("expertise.residential_title"),
                desc: t("expertise.residential_desc"),
                href: "/services/residential"
              },
              {
                icon: Ruler,
                title: t("expertise.planning_title"),
                desc: t("expertise.planning_desc"),
                href: "/planning"
              },
              {
                icon: Calculator,
                title: t("expertise.estimation_title"),
                desc: t("expertise.estimation_desc"),
                href: "/estimation"
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={service.href}>
                  <div
                    className="group h-full p-8 rounded-3xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    onClick={() => trackCTAClick(`Service_${service.title}`)}
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                      <service.icon className="w-32 h-32" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">{t("plans.title")}</h2>
              <p className="text-muted-foreground text-lg mt-4">
                {t("plans.subtitle")}
              </p>
            </div>
            <Link href="/plans">
              <Button variant="outline" className="hidden md:flex">{t("plans.view_all")}</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("plans.fixed_title"),
                features: [t("plans.features.transparent_costs"), t("plans.features.direct_material"), t("plans.features.fixed_fee")]
              },
              {
                title: t("plans.cost_plus_title"),
                features: [t("plans.features.max_flexibility"), t("plans.features.real_time"), t("plans.features.complete_control")]
              },
              {
                title: t("plans.package_title"),
                features: [t("plans.features.all_inclusive"), t("plans.features.guaranteed_timeline"), t("plans.features.turnkey")]
              },
            ].map((plan, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-6">{plan.title}</h3>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/plans">
                  <Button
                    className="w-full"
                    onClick={() => trackCTAClick(`Plan_${plan.title}`)}
                  >
                    {t("plans.learn_more")}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/plans">
              <Button variant="outline" className="w-full">{t("plans.view_all")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ctaImg}
            alt={t("cta.title")}
            className="w-full h-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-[#7f1d1d]/90 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl opacity-100 mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg rounded-full"
              onClick={() => trackCTAClick('Bottom_CTA')}
            >
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
