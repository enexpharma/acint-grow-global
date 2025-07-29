import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Upload, Users, Target, Award } from "lucide-react";

const Apply = () => {
  const programs = [
    {
      title: "Programme Jeunes Agriculteurs",
      description: "Formation intensive pour les nouveaux agriculteurs",
      duration: "6 mois",
      icon: Users,
      benefits: [
        "Formation technique complète",
        "Accompagnement personnalisé",
        "Accès au financement",
        "Réseau professionnel"
      ]
    },
    {
      title: "Certification Agriculture Durable",
      description: "Certification en pratiques agricoles durables",
      duration: "3 mois",
      icon: Award,
      benefits: [
        "Certification internationale",
        "Amélioration des revenus",
        "Accès aux marchés premium",
        "Support technique continu"
      ]
    },
    {
      title: "Innovation Agricole",
      description: "Programme d'innovation et nouvelles technologies",
      duration: "4 mois",
      icon: Target,
      benefits: [
        "Technologies de pointe",
        "Recherche appliquée",
        "Mentorat expert",
        "Développement de projets"
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
                Candidater
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Rejoignez nos programmes de formation et transformation agricole
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Nos Programmes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {programs.map((program, index) => {
                  const IconComponent = program.icon;
                  return (
                    <Card key={index} className="hover:shadow-medium transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <CardDescription>{program.description}</CardDescription>
                        <div className="text-sm text-primary font-semibold">
                          Durée: {program.duration}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {program.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">Formulaire de Candidature</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire pour postuler à nos programmes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input id="firstName" placeholder="Votre prénom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input id="lastName" placeholder="Votre nom" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input id="phone" placeholder="+xxx xxx xxx xxx" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="country">Pays *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre pays" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="senegal">Sénégal</SelectItem>
                          <SelectItem value="burkina">Burkina Faso</SelectItem>
                          <SelectItem value="mali">Mali</SelectItem>
                          <SelectItem value="cote-ivoire">Côte d'Ivoire</SelectItem>
                          <SelectItem value="ghana">Ghana</SelectItem>
                          <SelectItem value="cameroun">Cameroun</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Programme Souhaité *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez un programme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jeunes">Programme Jeunes Agriculteurs</SelectItem>
                          <SelectItem value="certification">Certification Agriculture Durable</SelectItem>
                          <SelectItem value="innovation">Innovation Agricole</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Expérience Agricole</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Votre niveau d'expérience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debutant">Débutant (0-1 an)</SelectItem>
                        <SelectItem value="intermediaire">Intermédiaire (2-5 ans)</SelectItem>
                        <SelectItem value="avance">Avancé (5+ ans)</SelectItem>
                        <SelectItem value="expert">Expert (10+ ans)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Motivation *</Label>
                    <Textarea 
                      id="motivation"
                      placeholder="Expliquez votre motivation pour rejoindre ce programme..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objectives">Objectifs</Label>
                    <Textarea 
                      id="objectives"
                      placeholder="Quels sont vos objectifs professionnels..."
                      className="min-h-24"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>CV et Documents</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Glissez vos fichiers ici ou cliquez pour sélectionner
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, DOCX (max 5MB)
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button size="lg" className="w-full bg-gradient-primary hover:bg-primary-dark">
                      Soumettre ma Candidature
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;