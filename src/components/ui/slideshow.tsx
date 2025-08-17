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
    image: "/lovable-uploads/26f40dcd-59f1-40ef-942f-987015ad7a45.png",
    title: "Formation Agricole",
    description: "Programmes de formation innovants pour les jeunes entrepreneurs"
  },
  {
    id: 2,
    image: "/lovable-uploads/3921ce0c-73b8-4b9b-8046-dacbbaf80667.png",
    title: "Technologies Modernes",
    description: "Solutions technologiques adaptées à l'agriculture africaine"
  },
  {
    id: 3,
    image: "/lovable-uploads/3ae6fbc6-5afd-4764-a185-3d36ab5b5bf7.png",
    title: "Développement Durable",
    description: "Pratiques agricoles respectueuses de l'environnement"
  },
  {
    id: 4,
    image: "/lovable-uploads/aabdab31-7c02-4683-ae4a-483890abd35b.png",
    title: "Accompagnement",
    description: "Soutien complet pour créer des entreprises durables"
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