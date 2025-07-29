import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Sprout, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Agricultural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Transformons l'Agriculture
              <span className="block bg-gradient-glow bg-clip-text text-transparent animate-pulse">en Afrique</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              ACINT accompagne les jeunes entrepreneurs agricoles avec des solutions 
              innovantes, des formations de qualité et un soutien complet pour créer 
              des entreprises agricoles durables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-strong"
              >
                Découvrir nos Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Play className="mr-2 w-5 h-5" />
                Voir notre Impact
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
              <div className="flex items-center space-x-3 bg-gradient-card backdrop-blur-sm rounded-lg p-4 hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">500+</div>
                  <div className="text-primary-foreground/80 text-sm">Jeunes Formés</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-gradient-card backdrop-blur-sm rounded-lg p-4 hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse">
                  <Sprout className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">1000+</div>
                  <div className="text-primary-foreground/80 text-sm">Hectares Cultivés</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-gradient-card backdrop-blur-sm rounded-lg p-4 hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">150+</div>
                  <div className="text-primary-foreground/80 text-sm">EA Créées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;