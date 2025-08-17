import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Apply from "./pages/Apply";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ConseilAgricole from "./pages/services/ConseilAgricole";
import FormationCIF3A from "./pages/services/FormationCIF3A";
import CreationEntreprises from "./pages/services/CreationEntreprises";
import RechercheInnovation from "./pages/services/RechercheInnovation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/conseil-agricole" element={<ConseilAgricole />} />
          <Route path="/services/formation-cif-3a" element={<FormationCIF3A />} />
          <Route path="/services/creation-entreprises" element={<CreationEntreprises />} />
          <Route path="/services/recherche-innovation" element={<RechercheInnovation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
