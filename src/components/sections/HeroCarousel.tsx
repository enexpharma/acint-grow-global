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
                  {/* Strong Gradient Overlay for Better Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  
                  {/* Image Info Overlay with Enhanced Visibility */}
                  <div className="absolute bottom-8 left-8 right-8 z-10">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <Badge variant="outline" className="mb-2 text-white border-white/70 bg-black/40">
                        {image.title}
                      </Badge>
                      <p className="text-sm text-white/95 max-w-md font-medium">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Main Content with Enhanced Background for Better Readability */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Content Background for Better Text Visibility */}
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <Badge variant="outline" className="text-white border-white/70 bg-black/40 mb-6 text-sm px-4 py-2">
              Centre de Formation CIF-3A
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              ACINT
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block mt-2">
                Aquaculture & Innovation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 font-medium drop-shadow-lg">
              Formation d'excellence en aquaculture et pisciculture. 
              Transformez votre passion pour l'aquaculture en expertise professionnelle 
              avec nos programmes certifiants CIF-3A.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 shadow-lg">
                Découvrir nos Formations
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/70 text-white hover:bg-white/10 font-semibold px-8 py-4 bg-black/20 backdrop-blur-sm"
              >
                Voir nos Projets
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics with Enhanced Visibility */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-black/70 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-lg">
              <Fish className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/90 font-medium">Projets Aquacoles</div>
            </div>
            <div className="bg-black/70 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-lg">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-sm text-white/90 font-medium">Jeunes Formés</div>
            </div>
            <div className="bg-black/70 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-lg">
              <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">75%</div>
              <div className="text-sm text-white/90 font-medium">Taux de Réussite</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots with Better Visibility */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-blue-400 scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Better Visibility */}
      <div className="absolute bottom-4 right-8 z-30 animate-bounce">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
          <div className="text-sm text-white/90 mb-2 font-medium">Défiler</div>
          <div className="w-px h-6 bg-white/60 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;