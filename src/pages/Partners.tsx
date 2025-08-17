import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, HandHeart, Building, Users, Target, Award } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      title: "Organisations Internationales",
      icon: Globe,
      partners: [
        { name: "Organisation Partenaire 1", type: "Organisation des Nations Unies", status: "Actif" },
        { name: "Organisation Partenaire 2", type: "Institution Financière", status: "Actif" },
        { name: "Organisation Partenaire 3", type: "Agence de Développement", status: "Actif" },
        { name: "Organisation Partenaire 4", type: "Institution Européenne", status: "Actif" }
      ]
    },
    {
      title: "ONG et Fondations",
      icon: HandHeart,
      partners: [
        { name: "ONG Partenaire 1", type: "ONG Internationale", status: "Actif" },
        { name: "Fondation Partenaire 1", type: "Fondation Privée", status: "Actif" },
        { name: "ONG Partenaire 2", type: "ONG Développement", status: "Actif" },
        { name: "ONG Partenaire 3", type: "ONG Agriculture", status: "Actif" }
      ]
    },
    {
      title: "Entreprises Privées",
      icon: Building,
      partners: [
        { name: "Entreprise Partenaire 1", type: "Engrais et Nutrition", status: "Actif" },
        { name: "Entreprise Partenaire 2", type: "Équipement Agricole", status: "Actif" },
        { name: "Entreprise Partenaire 3", type: "Industrie Alimentaire", status: "Actif" },
        { name: "Entreprise Partenaire 4", type: "Chaîne d'Approvisionnement", status: "Actif" }
      ]
    },
    {
      title: "Institutions Académiques",
      icon: Award,
      partners: [
        { name: "Université Partenaire 1", type: "Université", status: "Actif" },
        { name: "Institut Partenaire 1", type: "Institut de Recherche", status: "Actif" },
        { name: "Institut Partenaire 2", type: "Recherche Agricole", status: "Actif" },
        { name: "Institut Partenaire 3", type: "Recherche Scientifique", status: "Actif" }
      ]
    }
  ];

  const partnershipTypes = [
    {
      title: "Partenariat Technique",
      description: "Collaboration sur l'expertise et le développement de solutions innovantes",
      benefits: [
        "Transfert de technologie",
        "Formation spécialisée",
        "Développement conjoint",
        "Support technique"
      ]
    },
    {
      title: "Partenariat Financier",
      description: "Soutien financier pour le développement et l'expansion des projets",
      benefits: [
        "Financement de projets",
        "Subventions de recherche",
        "Investissement infrastructure",
        "Fonds de développement"
      ]
    },
    {
      title: "Partenariat Stratégique",
      description: "Alliance à long terme pour la transformation de l'agriculture africaine",
      benefits: [
        "Vision commune",
        "Planification stratégique",
        "Expansion géographique",
        "Impact multiplié"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Nos Partenaires
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Ensemble, nous transformons l'agriculture africaine grâce à des partenariats stratégiques
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Écosystème de Partenaires
              </h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  ACINT est activement engagée dans la création et le maintien de partenariats stratégiques 
                  avec diverses organisations à travers l'Afrique et au-delà. Nous sommes ouverts à collaborer 
                  avec des organisations internationales, des ONG, des fondations, des entreprises privées, 
                  des institutions académiques et des organismes gouvernementaux.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Notre approche collaborative nous permet de maximiser notre impact et d'atteindre nos objectifs 
                  de transformation agricole de manière plus efficace. Nous croyons fermement que les partenariats 
                  durables sont la clé du succès dans le développement agricole durable.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous restons actifs dans la recherche de nouveaux partenaires qui partagent notre vision 
                  d'une agriculture africaine prospère et durable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Types de Partenariats
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partnershipTypes.map((type, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Histoires de Succès
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gradient-card rounded-lg p-8 shadow-medium">
                  <h3 className="text-xl font-bold mb-4">Partenariat avec l'agence Emploi Jeunes-ACINT</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Notre collaboration avec l'agence Emploi Jeunes a permis de former plus de 5,000 agriculteurs 
                    en techniques modernes d'irrigation, résultant en une augmentation moyenne 
                    de 40% des rendements dans 3 pays africains.
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">5,000+</div>
                      <div className="text-muted-foreground">Agriculteurs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">+40%</div>
                      <div className="text-muted-foreground">Rendements</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">3</div>
                      <div className="text-muted-foreground">Pays</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-card rounded-lg p-8 shadow-medium">
                  <h3 className="text-xl font-bold mb-4">Partenariat-Village Abadjin-Kouté</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Le partenariat avec le Village Abadjin-Kouté a révolutionné l'accès aux engrais 
                    de qualité pour les petits producteurs, avec un programme de crédit adapté 
                    qui a bénéficié à plus de 8,000 familles.
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">8,000+</div>
                      <div className="text-muted-foreground">Familles</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">+55%</div>
                      <div className="text-muted-foreground">Productivité</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">6</div>
                      <div className="text-muted-foreground">Régions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Devenez Notre Partenaire
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Rejoignez notre réseau de partenaires et contribuez à la transformation 
                de l'agriculture africaine. Ensemble, nous pouvons avoir un impact plus grand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark" asChild>
                  <a href="/contact">Devenir Partenaire</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Télécharger la Brochure</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;