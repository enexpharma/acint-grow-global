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
        { name: "FAO", type: "Organisation des Nations Unies", status: "Actif" },
        { name: "Banque Mondiale", type: "Institution Financière", status: "Actif" },
        { name: "USAID", type: "Agence de Développement", status: "Actif" },
        { name: "Union Européenne", type: "Institution Européenne", status: "Actif" }
      ]
    },
    {
      title: "ONG et Fondations",
      icon: HandHeart,
      partners: [
        { name: "Oxfam", type: "ONG Internationale", status: "Actif" },
        { name: "Gates Foundation", type: "Fondation Privée", status: "Actif" },
        { name: "ACDI/VOCA", type: "ONG Développement", status: "Actif" },
        { name: "Heifer International", type: "ONG Agriculture", status: "Actif" }
      ]
    },
    {
      title: "Entreprises Privées",
      icon: Building,
      partners: [
        { name: "Yara International", type: "Engrais et Nutrition", status: "Actif" },
        { name: "John Deere", type: "Équipement Agricole", status: "Actif" },
        { name: "Nestlé", type: "Industrie Alimentaire", status: "Actif" },
        { name: "Olam Group", type: "Chaîne d'Approvisionnement", status: "Actif" }
      ]
    },
    {
      title: "Institutions Académiques",
      icon: Award,
      partners: [
        { name: "Université Cheikh Anta Diop", type: "Université", status: "Actif" },
        { name: "ICRISAT", type: "Institut de Recherche", status: "Actif" },
        { name: "CIRAD", type: "Recherche Agricole", status: "Actif" },
        { name: "Institut Pasteur", type: "Recherche Scientifique", status: "Actif" }
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

        {/* Partners Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Écosystème de Partenaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnerCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Card key={index} className="hover:shadow-medium transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>{category.partners.length} partenaires actifs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {category.partners.map((partner, partnerIndex) => (
                            <div key={partnerIndex} className="text-center">
                              <div className="font-medium text-sm">{partner.name}</div>
                              <div className="text-xs text-muted-foreground">{partner.type}</div>
                              <Badge variant="outline" className="text-xs mt-1">
                                {partner.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
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
                  <h3 className="text-xl font-bold mb-4">Partenariat FAO-ACINT</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Notre collaboration avec la FAO a permis de former plus de 5,000 agriculteurs 
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
                  <h3 className="text-xl font-bold mb-4">Alliance Yara-ACINT</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Le partenariat avec Yara International a révolutionné l'accès aux engrais 
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
                <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark">
                  Devenir Partenaire
                </Button>
                <Button size="lg" variant="outline">
                  Télécharger la Brochure
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