import { PageHeader } from "@/components/PageHeader";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import plansImg from "@/pages/assets/10.jpg";

export default function Plans() {
  const { t } = useTranslation();
  const plans = [
    {
      title: t("plans.fixed_title"),
      desc: t("plans.fixed_desc"),
      features: [
        t("plans.features.fixed.f1"),
        t("plans.features.fixed.f2"),
        t("plans.features.fixed.f3"),
        t("plans.features.fixed.f4"),
        t("plans.features.fixed.f5")
      ]
    },
    {
      title: t("plans.cost_plus_title"),
      desc: t("plans.cost_plus_desc"),
      features: [
        t("plans.features.cost_plus.f1"),
        t("plans.features.cost_plus.f2"),
        t("plans.features.cost_plus.f3"),
        t("plans.features.cost_plus.f4"),
        t("plans.features.cost_plus.f5")
      ],
      featured: true
    },
    {
      title: t("plans.package_title"),
      desc: t("plans.package_desc"),
      features: [
        t("plans.features.package.f1"),
        t("plans.features.package.f2"),
        t("plans.features.package.f3"),
        t("plans.features.package.f4"),
        t("plans.features.package.f5")
      ]
    },
    {
      title: t("plans.estimation_title"),
      desc: t("plans.estimation_desc"),
      features: [
        t("plans.features.estimation.f1"),
        t("plans.features.estimation.f2"),
        t("plans.features.estimation.f3"),
        t("plans.features.estimation.f4"),
        t("plans.features.estimation.f5")
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("plans.title")}
        subtitle={t("plans.subtitle")}
        image={plansImg}
      />

      <div className="relative">
        {/* Page Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 border ${plan.featured
                  ? "border-primary shadow-2xl bg-card scale-105 z-10"
                  : "border-border shadow-lg bg-card/80 backdrop-blur-sm"
                  } flex flex-col h-full transition-all duration-300`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    {t("plans.most_popular")}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 h-10">{plan.desc}</p>

                <div className="h-px bg-border mb-6" />

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className={`w-full ${plan.featured ? "bg-primary" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                    {t("plans.get_started")} <ArrowRight className="ml-2 w-4 h-4 rtl:rotate-180" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
