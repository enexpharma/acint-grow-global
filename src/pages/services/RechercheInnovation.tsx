import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  FlaskConical, 
  CheckCircle, 
  Cpu, 
  Microscope, 
  Satellite, 
  BarChart3,
  Lightbulb,
  Zap
} from "lucide-react";

const RechercheInnovation = () => {
  const researchAreas = [
    {
      icon: Cpu,
      title: "Technologies AgriTech",
      description: "Développement de solutions technologiques innovantes",
      projects: [
        "Capteurs IoT pour l'agriculture",
        "Applications mobiles dédiées",
        "Systèmes de gestion automatisés",
        "Intelligence artificielle appliquée"
      ]
    },
    {
      icon: Microscope,
      title: "Recherche Appliquée",
      description: "Études scientifiques pour l'amélioration des pratiques",
      projects: [
        "Amélioration variétale",
        "Biotechnologies agricoles",
        "Nutrition des plantes",
        "Lutte biologique intégrée"
      ]
    },
    {
      icon: Satellite,
      title: "Agriculture de Précision",
      description: "Solutions basées sur la géolocalisation et télédétection",
      projects: [
        "Cartographie des sols",
        "Monitoring par drone",
        "Irrigation intelligente",
        "Prévision climatique"
      ]
    },
    {
      icon: BarChart3,
      title: "Analyses Sectorielles",
      description: "Études économiques et de marché approfondies",
      projects: [
        "Veille technologique",
        "Analyses de filières",
        "Études d'impact",
        "Benchmarking international"
      ]
    }
  ];

  const pilotZones = [
    {
      location: "Yamoussoukro",
      focus: "Agriculture Numérique",
      area: "500 hectares",
      technologies: ["IoT", "Drones", "IA"],
      status: "Active"
    },
    {
      location: "Bouaké",
      focus: "Aquaculture Intelligente",
      area: "50 bassins",
      technologies: ["Capteurs", "Automation", "Monitoring"],
      status: "En développement"
    },
    {
      location: "Korhogo",
      focus: "Élevage Connecté",
      area: "1000 têtes",
      technologies: ["RFID", "Tracking", "Analytics"],
      status: "Planifiée"
    }
  ];

  const innovations = [
    {
      title: "Plateforme AgriConnect",
      description: "Écosystème digital connectant tous les acteurs de la chaîne agricole",
      impact: "+40% d'efficacité",
      status: "Déployée"
    },
    {
      title: "Système AquaSmart",
      description: "Solution IoT pour l'optimisation de l'aquaculture",
      impact: "+60% de rendement",
      status: "Test pilote"
    },
    {
      title: "Application CropPredict",
      description: "IA prédictive pour l'optimisation des cultures",
      impact: "-30% de pertes",
      status: "Développement"
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
                <FlaskConical className="w-16 h-16 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Recherche & Innovation
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Pionnier des technologies agricoles en Afrique de l'Ouest
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  +50 Innovations
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  15 Brevets Déposés
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Domaines de Recherche
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Innovation continue pour transformer l'agriculture africaine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {researchAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <Card key={area.title} className="h-full hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl">{area.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {area.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-foreground">Projets en cours :</h4>
                      <ul className="space-y-2">
                        {area.projects.map((project) => (
                          <li key={project} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{project}</span>
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

        {/* Pilot Zones */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Zones Pilotes
              </h3>
              <p className="text-xl text-muted-foreground">
                Terrains d'expérimentation pour nos innovations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pilotZones.map((zone) => (
                <Card key={zone.location} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{zone.location}</CardTitle>
                      <Badge 
                        variant={zone.status === "Active" ? "default" : zone.status === "En développement" ? "secondary" : "outline"}
                      >
                        {zone.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {zone.focus}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Surface :</span>
                        <span className="font-medium">{zone.area}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-2">Technologies :</span>
                        <div className="flex flex-wrap gap-2">
                          {zone.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Innovations Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Innovations Phares
              </h3>
              <p className="text-xl text-muted-foreground">
                Solutions révolutionnaires développées par nos équipes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {innovations.map((innovation) => (
                <Card key={innovation.title} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{innovation.title}</CardTitle>
                      <Badge 
                        variant={innovation.status === "Déployée" ? "default" : innovation.status === "Test pilote" ? "secondary" : "outline"}
                      >
                        {innovation.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {innovation.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-subtle p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {innovation.impact}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Impact mesuré
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Collaborons sur l'Innovation
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez notre écosystème de recherche et développement pour façonner l'avenir agricole
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Proposer un Projet
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Devenir Partenaire R&D
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RechercheInnovation;