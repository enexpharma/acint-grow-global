import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                À Propos d'ACINT
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Nous sommes une organisation dédiée à la transformation de l'agriculture en Afrique 
                à travers l'innovation, la formation et le développement durable.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Notre Mission
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    ACINT s'engage à révolutionner l'agriculture africaine en combinant les 
                    techniques traditionnelles avec les innovations modernes pour créer un 
                    écosystème agricole durable et prospère.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nous croyons que l'agriculture est la clé du développement économique 
                    et social de l'Afrique, et nous nous efforçons d'autonomiser les 
                    agriculteurs avec les outils et connaissances nécessaires.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-card p-6 rounded-lg shadow-soft">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Communauté</h3>
                    <p className="text-muted-foreground">Plus de 10,000 agriculteurs accompagnés</p>
                  </div>
                  <div className="bg-gradient-card p-6 rounded-lg shadow-soft">
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Objectifs</h3>
                    <p className="text-muted-foreground">Transformation durable de l'agriculture</p>
                  </div>
                  <div className="bg-gradient-card p-6 rounded-lg shadow-soft">
                    <Award className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">Certification et qualité garantie</p>
                  </div>
                  <div className="bg-gradient-card p-6 rounded-lg shadow-soft">
                    <Globe className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Impact</h3>
                    <p className="text-muted-foreground">Présence dans 15 pays africains</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Nos Valeurs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Innovation</h3>
                  <p className="text-muted-foreground">
                    Nous adoptons les dernières technologies pour améliorer les pratiques agricoles.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Durabilité</h3>
                  <p className="text-muted-foreground">
                    Nous promouvons des pratiques respectueuses de l'environnement.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Nous travaillons ensemble pour atteindre nos objectifs communs.
                  </p>
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

export default About;