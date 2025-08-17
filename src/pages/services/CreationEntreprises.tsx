import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Building2, 
  CheckCircle, 
  MapPin, 
  Users, 
  TrendingUp, 
  HandHeart,
  Briefcase,
  Target
} from "lucide-react";

const CreationEntreprises = () => {
  const services = [
    {
      icon: MapPin,
      title: "Accès au Foncier",
      description: "Solutions d'accès aux terres agricoles",
      features: [
        "Identification de terrains disponibles",
        "Négociation de baux ruraux",
        "Accompagnement juridique",
        "Optimisation des coûts fonciers"
      ]
    },
    {
      icon: Briefcase,
      title: "Coaching d'Entreprise",
      description: "Accompagnement personnalisé pour entrepreneurs",
      features: [
        "Élaboration du business plan",
        "Stratégie commerciale",
        "Gestion financière",
        "Développement personnel"
      ]
    },
    {
      icon: Users,
      title: "Intégration Coopérative",
      description: "Insertion dans les réseaux coopératifs",
      features: [
        "Adhésion aux coopératives",
        "Formation aux principes coopératifs",
        "Mise en réseau",
        "Accès aux services mutualisés"
      ]
    },
    {
      icon: HandHeart,
      title: "Suivi Post-Installation",
      description: "Accompagnement continu après création",
      features: [
        "Visites de terrain régulières",
        "Résolution de problèmes",
        "Adaptation des stratégies",
        "Support technique permanent"
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Évaluation & Orientation",
      description: "Analyse de votre profil et définition de votre projet agricole",
      duration: "2 semaines"
    },
    {
      number: "02",
      title: "Formation Entrepreneuriale",
      description: "Acquisition des compétences essentielles à la gestion d'entreprise",
      duration: "6 semaines"
    },
    {
      number: "03",
      title: "Recherche de Financement",
      description: "Montage du dossier de financement et recherche d'investisseurs",
      duration: "4 semaines"
    },
    {
      number: "04",
      title: "Installation & Démarrage",
      description: "Mise en place de l'entreprise et lancement des activités",
      duration: "8 semaines"
    },
    {
      number: "05",
      title: "Accompagnement Continu",
      description: "Suivi et support pour assurer la pérennité de l'entreprise",
      duration: "12 mois"
    }
  ];

  const testimonials = [
    {
      name: "Marie Kouadio",
      location: "Yamoussoukro",
      business: "Élevage Avicole",
      quote: "Grâce à ACINT, j'ai pu créer ma ferme avicole. L'accompagnement a été exemplaire du début à aujourd'hui.",
      image: "/lovable-uploads/26f40dcd-59f1-40ef-942f-987015ad7a45.png"
    },
    {
      name: "Jean-Baptiste Traoré",
      location: "Bouaké",
      business: "Culture Maraîchère",
      quote: "Le coaching personnalisé m'a permis de développer une exploitation rentable en moins d'un an.",
      image: "/lovable-uploads/3921ce0c-73b8-4b9b-8046-dacbbaf80667.png"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Building2 className="w-16 h-16 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Création d'Entreprises
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                De l'idée à la réalisation : votre entreprise agricole clés en main
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  +200 Entreprises Créées
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  78% de Pérennité à 3 ans
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Notre Accompagnement Complet
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un support intégral pour maximiser vos chances de succès entrepreneurial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.title} className="h-full hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Processus de Création
              </h3>
              <p className="text-xl text-muted-foreground">
                Un parcours structuré en 5 étapes pour votre réussite
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                    <div className="w-20 h-20 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <Card className="flex-1 w-full">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <CardTitle className="text-xl mb-2 md:mb-0">{step.title}</CardTitle>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Témoignages de Réussite
              </h3>
              <p className="text-xl text-muted-foreground">
                Découvrez les parcours inspirants de nos entrepreneurs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <p className="text-muted-foreground text-sm">{testimonial.business} - {testimonial.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Créer Votre Entreprise ?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez nos entrepreneurs à succès et transformez votre passion en business prospère
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Démarrer Mon Projet
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Planifier un Rendez-vous
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CreationEntreprises;