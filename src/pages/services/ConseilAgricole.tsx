import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  FileText, 
  Calculator,
  Leaf,
  Target
} from "lucide-react";

const ConseilAgricole = () => {
  const services = [
    {
      icon: FileText,
      title: "Études de Faisabilité",
      description: "Analyse complète de la viabilité de vos projets agricoles",
      features: [
        "Étude de marché approfondie",
        "Analyse des risques",
        "Projection financière",
        "Recommandations stratégiques"
      ]
    },
    {
      icon: Calculator,
      title: "Plans d'Affaires",
      description: "Élaboration de business plans personnalisés",
      features: [
        "Modèle économique adapté",
        "Stratégie de financement",
        "Plan de développement",
        "Indicateurs de performance"
      ]
    },
    {
      icon: Leaf,
      title: "Diagnostics Agronomiques",
      description: "Expertise technique pour optimiser vos cultures",
      features: [
        "Analyse des sols",
        "Sélection variétale",
        "Techniques culturales",
        "Gestion phytosanitaire"
      ]
    },
    {
      icon: TrendingUp,
      title: "Stratégies de Financement",
      description: "Accompagnement pour sécuriser vos investissements",
      features: [
        "Identification des sources",
        "Montage de dossiers",
        "Négociation avec partenaires",
        "Suivi des financements"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Diagnostic Initial",
      description: "Évaluation complète de votre situation et de vos objectifs"
    },
    {
      step: "02", 
      title: "Analyse & Étude",
      description: "Études techniques, économiques et de faisabilité"
    },
    {
      step: "03",
      title: "Recommandations",
      description: "Stratégies personnalisées et plan d'action détaillé"
    },
    {
      step: "04",
      title: "Accompagnement",
      description: "Suivi et support continu dans la mise en œuvre"
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
                <Lightbulb className="w-16 h-16 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Conseil Agricole
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Accompagnement expert pour transformer vos idées en projets agricoles prospères
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  +500 Projets Accompagnés
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  85% de Réussite
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Services de Conseil
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Une approche complète pour maximiser vos chances de succès
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.title} className="h-full hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
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

            {/* Process Steps */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center text-foreground mb-12">
                Notre Processus d'Accompagnement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <Card key={step.step} className="text-center hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à Lancer Votre Projet ?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour une consultation personnalisée et découvrez comment nous pouvons vous accompagner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark" asChild>
                <Link to="/contact">Demander une Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Télécharger Notre Brochure</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConseilAgricole;