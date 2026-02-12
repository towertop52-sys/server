import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Vision from "@/pages/Vision";
import Mission from "@/pages/Mission";
import Founder from "@/pages/Founder";
import Services from "@/pages/Services";
import Planning from "@/pages/Planning";
import Estimation from "@/pages/Estimation";
import Plans from "@/pages/Plans";
import Partners from "@/pages/Partners";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/">
            <SEO titleKey="nav.home" />
            <Home />
          </Route>

          <Route path="/about">
            <SEO titleKey="nav.who_we_are" />
            <About />
          </Route>

          <Route path="/vision">
            <SEO titleKey="nav.vision" />
            <Vision />
          </Route>

          <Route path="/mission">
            <SEO titleKey="nav.mission" />
            <Mission />
          </Route>

          <Route path="/founder">
            <SEO titleKey="nav.founder" />
            <Founder />
          </Route>

          <Route path="/services/:type">
            <SEO titleKey="nav.services" />
            <Services />
          </Route>

          <Route path="/planning">
            <SEO titleKey="nav.planning" descriptionKey="expertise.planning_page.subtitle" />
            <Planning />
          </Route>

          <Route path="/estimation">
            <SEO titleKey="nav.estimation" descriptionKey="expertise.estimation_page.subtitle" />
            <Estimation />
          </Route>

          <Route path="/plans">
            <SEO titleKey="nav.plans" />
            <Plans />
          </Route>

          <Route path="/partners">
            <SEO titleKey="nav.partners" />
            <Partners />
          </Route>

          <Route path="/reviews">
            <SEO titleKey="nav.reviews" />
            <Reviews />
          </Route>

          <Route path="/contact">
            <SEO titleKey="nav.contact" />
            <Contact />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Toaster />
      <Router />
    </>
  );
}

export default App;
