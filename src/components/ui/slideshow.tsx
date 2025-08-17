import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/lovable-uploads/2ba741a4-4726-47a5-ac9d-321de0bfc8bc.png",
    title: "Préparation des Sols",
    description: "Techniques modernes de préparation et d'amélioration des sols agricoles"
  },
  {
    id: 2,
    image: "/lovable-uploads/a9a0d842-2ae1-4029-a170-e1d71e36fbbc.png",
    title: "Analyses Scientifiques",
    description: "Tests et analyses de qualité pour optimiser la production"
  },
  {
    id: 3,
    image: "/lovable-uploads/49bd11c2-8970-4ccb-b430-3358e007dd24.png",
    title: "Contrôle Qualité",
    description: "Mesures précises et suivi des paramètres de production"
  },
  {
    id: 4,
    image: "/lovable-uploads/a5ea6335-5bb3-4ff2-8d93-5766560581de.png",
    title: "Aquaculture",
    description: "Systèmes d'élevage aquacole durables et productifs"
  },
  {
    id: 5,
    image: "/lovable-uploads/20688c2a-4328-4f97-81df-2e687c095bd2.png",
    title: "Élevage Piscicole",
    description: "Production de poissons selon les meilleures pratiques"
  }
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden bg-card backdrop-blur-sm shadow-glow">
      {/* Slide Images */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
            
            {/* Slide Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="sm"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/40 text-primary-foreground border-none backdrop-blur-sm"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/20 hover:bg-background/40 text-primary-foreground border-none backdrop-blur-sm"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary-foreground"
                : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;