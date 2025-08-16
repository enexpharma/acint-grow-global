import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Fish, Users, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/3bb64b79-c508-4025-b688-97bf5e315ea4.png",
      alt: "Formation pratique en aquaculture - Bassins d'élevage modernes",
      title: "Formation Technique Avancée",
      description: "Apprentissage hands-on avec bassins d'élevage professionnels"
    },
    {
      src: "/lovable-uploads/64199df0-962b-441f-88e5-f57dc0d04f2e.png",
      alt: "Équipe ACINT travaillant sur l'installation aquacole",
      title: "Installations Modernes",
      description: "Bassins circulaires avec systèmes de filtration avancés"
    },
    {
      src: "/lovable-uploads/07455eb6-6636-4925-b227-0969751274ea.png",
      alt: "Analyse de la qualité de l'eau en aquaculture",
      title: "Contrôle Qualité Expert",
      description: "Tests rigoureux pour garantir la santé des poissons"
    },
    {
      src: "/lovable-uploads/a272c34c-008a-4e22-be22-80673d1fc37c.png",
      alt: "Techniques de prélèvement et analyse",
      title: "Méthodes Scientifiques",
      description: "Protocoles professionnels d'analyse et suivi"
    },
    {
      src: "/lovable-uploads/8d65a1ee-d422-495a-be6f-16cbad88f254.png",
      alt: "Échantillonnage professionnel des poissons",
      title: "Suivi de Croissance",
      description: "Monitoring précis du développement des espèces"
    },
    {
      src: "/lovable-uploads/c80a25d6-dbf7-47a2-af93-6ad8a4f9e742.png",
      alt: "Analyse laboratoire avec instruments de mesure",
      title: "Recherche & Développement",
      description: "Innovation scientifique en aquaculture tropicale"
    },
    {
      src: "/lovable-uploads/e5f8c2ae-439d-43e8-820e-e1bfe5ee2d55.png",
      alt: "Prélèvement avec seringue pour analyse",
      title: "Protocoles Sanitaires",
      description: "Contrôles vétérinaires et préventions des maladies"
    },
    {
      src: "/lovable-uploads/d2cddfdc-e391-4e2c-8af8-f83ae9e813bf.png",
      alt: "Pesée et mesure des échantillons",
      title: "Données Précises",
      description: "Collecte de données pour optimiser la production"
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-screen">
            {images.map((image, index) => (
              <CarouselItem key={index} className="relative h-full">
                <div className="relative h-full w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-transparent" />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-8 left-8 right-8 text-primary-foreground z-10">
                    <Badge variant="outline" className="mb-2 text-primary-foreground border-primary-foreground/50">
                      {image.title}
                    </Badge>
                    <p className="text-sm text-primary-foreground/90 max-w-md">
                      {image.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Badge variant="outline" className="text-primary-foreground border-primary-foreground/50 mb-4">
            Centre de Formation CIF-3A
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            ACINT
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
              Aquaculture & Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Formation d'excellence en aquaculture et pisciculture. 
            Transformez votre passion pour l'aquaculture en expertise professionnelle 
            avec nos programmes certifiants CIF-3A.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4">
              Découvrir nos Formations
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4"
            >
              Voir nos Projets
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-lg p-6 border border-primary-foreground/20">
              <Fish className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-foreground">50+</div>
              <div className="text-sm text-primary-foreground/80">Projets Aquacoles</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-lg p-6 border border-primary-foreground/20">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-foreground">200+</div>
              <div className="text-sm text-primary-foreground/80">Jeunes Formés</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-lg p-6 border border-primary-foreground/20">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-foreground">75%</div>
              <div className="text-sm text-primary-foreground/80">Taux de Réussite</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-primary scale-125"
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-8 z-30 text-primary-foreground/60 animate-bounce">
        <div className="text-sm mb-2">Défiler</div>
        <div className="w-px h-8 bg-primary-foreground/40 mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroCarousel;