import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceDetails = [
    {
      title: "Conseil Agricole Personnalisé",
      description: "Accompagnement sur mesure pour optimiser vos rendements et réduire les coûts.",
      features: [
        "Analyse de sol et recommandations",
        "Sélection de variétés adaptées",
        "Optimisation des intrants",
        "Suivi personnalisé"
      ]
    },
    {
      title: "Formation et Certification",
      description: "Programmes de formation certifiants pour développer vos compétences agricoles.",
      features: [
        "Formations techniques spécialisées",
        "Certification internationale",
        "Modules e-learning disponibles",
        "Support continu"
      ]
    },
    {
      title: "Technologies Innovantes",
      description: "Solutions technologiques avancées pour une agriculture moderne et efficace.",
      features: [
        "Systèmes d'irrigation intelligents",
        "Outils de monitoring digital",
        "Applications mobiles dédiées",
        "Support technique 24/7"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Nos Services
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Découvrez notre gamme complète de services pour transformer votre agriculture
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <ServicesSection />

        {/* Detailed Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Services Détaillés
              </h2>
              <div className="space-y-16">
                {serviceDetails.map((service, index) => (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-gradient-primary hover:bg-primary-dark" asChild>
                        <Link to="/contact">
                          En Savoir Plus
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="bg-gradient-card rounded-lg p-8 shadow-medium">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-muted-foreground">Image du service {index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Transformer Votre Agriculture ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contactez-nous dès aujourd'hui pour découvrir comment nos services peuvent 
                vous aider à atteindre vos objectifs agricoles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark" asChild>
                  <Link to="/contact">Demander un Devis</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Programmer une Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;