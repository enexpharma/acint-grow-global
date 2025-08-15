import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Headphones } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      description: "Appelez-nous directement",
      contact: "+225 07 07 01 09 95",
      hours: "Lun-Ven: 8h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envoyez-nous un message",
      contact: "secretariat@acint-cif3a.com",
      hours: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Siège Social",
      description: "Visitez nos bureaux",
      contact: "Bingerville, Abidjan",
      hours: "Lun-Ven: 8h-17h"
    },
    {
      icon: MessageSquare,
      title: "Chat en Direct",
      description: "Assistance immédiate",
      contact: "Disponible maintenant",
      hours: "24h/24, 7j/7"
    }
  ];

  const offices = [
    {
      city: "Abidjan",
      country: "Côte d'Ivoire",
      address: "Bingerville, Abidjan",
      phone: "+225 07 07 01 09 95",
      email: "secretariat@acint-cif3a.com",
      type: "Siège Social"
    },
    {
      city: "Grand Moutcho, Agboville",
      country: "Côte d'Ivoire",
      address: "Grand Moutcho, Agboville, Côte d'Ivoire",
      phone: "+225 07 07 01 09 95",
      email: "secretariat@acint-cif3a.com",
      type: "Ferme école"
    },
    {
      city: "Abadjin-Kouté, Songon",
      country: "Côte d'Ivoire",
      address: "Abadjin-Kouté,Songon, District d'Abidjan",
      phone: "+225 07 07 01 09 95",
      email: "secretariat@acint-cif3a.com",
      type: "Ferme école"
    },
    {
      city: "Boutroklo, Gôh-Djiboua",
      country: "Côte d'Ivoire",
      address: "Boutroklo, District du Gôh-Djiboua, Côte d'Ivoire",
      phone: "+225 07 07 01 09 95",
      email: "secretariat@acint-cif3a.com",
      type: "Ferme école"
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
                Contactez-Nous
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Nous sommes là pour répondre à toutes vos questions et vous accompagner
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Comment Nous Joindre
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="font-medium text-primary">{method.contact}</div>
                          <div className="text-sm text-muted-foreground">{method.hours}</div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Envoyez-nous un Message</CardTitle>
                    <CardDescription>
                      Remplissez ce formulaire et nous vous répondrons rapidement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" placeholder="Votre prénom" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" placeholder="Votre nom" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" placeholder="+xxx xxx xxx xxx" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="information">Demande d'information</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="formation">Formation</SelectItem>
                          <SelectItem value="partenariat">Partenariat</SelectItem>
                          <SelectItem value="candidature">Candidature</SelectItem>
                          <SelectItem value="support">Support technique</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message"
                        placeholder="Décrivez votre demande en détail..."
                        className="min-h-32"
                      />
                    </div>

                    <Button size="lg" className="w-full bg-gradient-primary hover:bg-primary-dark">
                      Envoyer le Message
                    </Button>
                  </CardContent>
                </Card>

                {/* Office Locations */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Nos Bureaux</h3>
                    <div className="space-y-4">
                      {offices.map((office, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold text-lg">
                                  {office.city}, {office.country}
                                </h4>
                                <span className="text-sm text-primary">{office.type}</span>
                              </div>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{office.address}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>{office.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>{office.email}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Actions Rapides</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        Prendre Rendez-vous
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Headphones className="w-4 h-4 mr-2" />
                        Support Technique
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat en Direct
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Questions Fréquentes
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quels sont vos horaires d'ouverture ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nos bureaux sont ouverts du lundi au vendredi de 8h à 18h. 
                      Notre support client est disponible 24h/24 et 7j/7 via chat en ligne.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Comment postuler à vos programmes ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Vous pouvez postuler directement via notre page "Candidater" ou nous contacter 
                      pour plus d'informations sur nos programmes de formation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Offrez-vous des services dans mon pays ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nous sommes présents dans 15 pays africains. Contactez-nous pour vérifier 
                      la disponibilité de nos services dans votre région.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;