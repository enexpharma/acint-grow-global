import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  GraduationCap, 
  CheckCircle, 
  Monitor, 
  Users, 
  Award, 
  Clock,
  BookOpen,
  Globe
} from "lucide-react";

const FormationCIF3A = () => {
  const modules = [
    {
      icon: BookOpen,
      title: "Fondamentaux Agricoles",
      duration: "4 semaines",
      description: "Bases de l'agriculture moderne et durable",
      topics: [
        "Sciences du sol et nutrition",
        "Biologie végétale appliquée",
        "Écosystèmes agricoles",
        "Changement climatique"
      ]
    },
    {
      icon: Globe,
      title: "Technologies Numériques",
      duration: "3 semaines", 
      description: "Outils digitaux pour l'agriculture",
      topics: [
        "Agriculture de précision",
        "IoT et capteurs",
        "Applications mobiles",
        "Analyse de données"
      ]
    },
    {
      icon: Users,
      title: "Entrepreneuriat Agricole",
      duration: "5 semaines",
      description: "Création et gestion d'entreprise",
      topics: [
        "Business model canvas",
        "Étude de marché",
        "Financement et crédit",
        "Marketing agricole"
      ]
    },
    {
      icon: Award,
      title: "Pratiques Terrain",
      duration: "6 semaines",
      description: "Applications pratiques sur site",
      topics: [
        "Stages en exploitation",
        "Projets tutorés",
        "Études de cas réels",
        "Soutenance finale"
      ]
    }
  ];

  const advantages = [
    {
      title: "Formation Hybride",
      description: "Combinaison parfaite entre théorie en ligne et pratique terrain",
      icon: Monitor
    },
    {
      title: "Plateforme Teachizy",
      description: "Accès 24/7 à une plateforme d'apprentissage moderne et interactive",
      icon: Globe
    },
    {
      title: "Intégration d'Entreprise Agricole",
      description: "Intégration d'une entreprise agricole en tant qu'actionnaire à l'issue de la formation qualifiante.",
      icon: Award
    },
    {
      title: "Accompagnement Post-Formation",
      description: "Suivi personnalisé pendant 12 mois après la formation",
      icon: Users
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
                <GraduationCap className="w-16 h-16 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Formation CIF-3A
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Programme de formation hybride pour les futurs entrepreneurs agricoles
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  18 Semaines
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Certification Officielle
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  +1000 Diplômés
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Programme de Formation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un cursus complet alliant innovation technologique et pratiques agricoles durables
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card key={module.title} className="h-full hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{module.title}</CardTitle>
                            <Badge variant="outline" className="mt-1">
                              <Clock className="w-3 h-3 mr-1" />
                              {module.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base mb-4">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-foreground">Sujets abordés :</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic) => (
                          <li key={topic} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Advantages */}
            <div>
              <h3 className="text-3xl font-bold text-center text-foreground mb-12">
                Pourquoi Choisir CIF-3A ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage) => {
                  const IconComponent = advantage.icon;
                  return (
                    <Card key={advantage.title} className="text-center hover:shadow-medium transition-all duration-300">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg">{advantage.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{advantage.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Processus d'Admission
              </h3>
              <p className="text-xl text-muted-foreground mb-12">
                Rejoignez la prochaine promotion et transformez votre avenir agricole
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <CardTitle>Candidature</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Soumettez votre dossier de candidature en ligne</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <CardTitle>Évaluation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Test d'aptitude et entretien de motivation</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <CardTitle>Intégration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Inscription et début de la formation</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark">
                  Postuler Maintenant
                </Button>
                <Button size="lg" variant="outline">
                  Télécharger la Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FormationCIF3A;