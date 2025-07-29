import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  GraduationCap, 
  Building2, 
  FlaskConical, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Conseil Agricole",
      description: "Accompagnement complet pour vos projets agricoles",
      features: [
        "Études de faisabilité",
        "Plans d'affaires personnalisés",
        "Diagnostics agronomiques",
        "Stratégies de financement"
      ],
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      title: "Formation CIF-3A",
      description: "Programme de formation hybride innovant",
      features: [
        "Formation en ligne Teachizy",
        "Sessions pratiques terrain",
        "Certification professionnelle",
        "Accompagnement post-formation"
      ],
      color: "text-primary-light"
    },
    {
      icon: Building2,
      title: "Création d'Entreprises",
      description: "Support pour lancer votre EA",
      features: [
        "Accès au foncier",
        "Coaching d'entreprise",
        "Intégration coopérative",
        "Suivi post-installation"
      ],
      color: "text-accent-foreground"
    },
    {
      icon: FlaskConical,
      title: "Recherche & Innovation",
      description: "Solutions technologiques avancées",
      features: [
        "R&D agri-tech",
        "Zones pilotes",
        "Études sectorielles",
        "Solutions digitales"
      ],
      color: "text-primary-dark"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de services pour accompagner votre réussite 
            dans l'agriculture moderne et durable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 text-primary-foreground`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark shadow-medium">
            Découvrir tous nos services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;