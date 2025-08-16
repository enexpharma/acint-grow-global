import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pisciculture de Haute Qualité en Afrique
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l'excellence de la pisciculture moderne en Afrique du Sud. 
            Cette vidéo illustre parfaitement les techniques avancées que nous promouvons 
            à travers nos formations et accompagnements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-elegant">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/jlaHBjZjQ8Q"
                  title="Aquaculture in South Africa: Tilapia"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Techniques Modernes</h3>
                <p className="text-sm text-muted-foreground">
                  Méthodes d'élevage de tilapia à grande échelle avec contrôle de qualité
                </p>
              </div>

              <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Durabilité</h3>
                <p className="text-sm text-muted-foreground">
                  Pratiques respectueuses de l'environnement et économiquement viables
                </p>
              </div>

              <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Formation Pratique</h3>
                <p className="text-sm text-muted-foreground">
                  Exemple concret des compétences acquises dans nos programmes CIF-3A
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;