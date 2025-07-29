import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Projet Irrigation Intelligente - Sénégal",
      description: "Installation de systèmes d'irrigation automatisés pour 500 hectares de rizières",
      location: "Région de Saint-Louis, Sénégal",
      date: "2024",
      beneficiaries: "1,200 agriculteurs",
      impact: "+45% de rendement",
      status: "En cours",
      tags: ["Irrigation", "Technologie", "Riz"]
    },
    {
      title: "Formation Agroécologique - Burkina Faso",
      description: "Programme de formation certifiant en pratiques agroécologiques durables",
      location: "Ouagadougou, Burkina Faso",
      date: "2023-2024",
      beneficiaries: "800 agriculteurs",
      impact: "+30% de productivité",
      status: "Terminé",
      tags: ["Formation", "Agroécologie", "Certification"]
    },
    {
      title: "Coopérative Cacao Durable - Côte d'Ivoire",
      description: "Développement d'une filière cacao certifiée commerce équitable",
      location: "Région de San Pedro, Côte d'Ivoire",
      date: "2023",
      beneficiaries: "2,000 producteurs",
      impact: "+60% revenus",
      status: "Terminé",
      tags: ["Cacao", "Commerce Équitable", "Coopérative"]
    },
    {
      title: "Agriculture Urbaine - Ghana",
      description: "Mise en place de jardins urbains et systèmes hydroponiques",
      location: "Accra, Ghana",
      date: "2024",
      beneficiaries: "300 familles",
      impact: "+80% production locale",
      status: "En cours",
      tags: ["Agriculture Urbaine", "Hydroponie", "Innovation"]
    },
    {
      title: "Mécanisation Agricole - Mali",
      description: "Introduction de tracteurs et équipements modernes",
      location: "Région de Sikasso, Mali",
      date: "2024-2025",
      beneficiaries: "1,500 agriculteurs",
      impact: "En évaluation",
      status: "Planifié",
      tags: ["Mécanisation", "Équipement", "Productivité"]
    },
    {
      title: "Chaîne du Froid - Cameroun",
      description: "Développement d'infrastructures de stockage et conservation",
      location: "Douala, Cameroun",
      date: "2024-2025",
      beneficiaries: "5,000 producteurs",
      impact: "En évaluation",
      status: "Planifié",
      tags: ["Stockage", "Conservation", "Infrastructure"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Terminé": return "bg-green-100 text-green-800 border-green-200";
      case "En cours": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Planifié": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Nos Projets
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Découvrez les projets qui transforment l'agriculture africaine
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gradient-card rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
                    <div className="mb-4">
                      <Badge className={`${getStatusColor(project.status)} mb-2`}>
                        {project.status}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {project.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {project.beneficiaries}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                        {project.impact}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      Voir Détails
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Impact Global
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Pays</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projets</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25,000+</div>
                  <div className="text-muted-foreground">Bénéficiaires</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-muted-foreground">Amélioration Moyenne</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;