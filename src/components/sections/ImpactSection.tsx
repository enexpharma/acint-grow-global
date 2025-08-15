import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ImpactSection = () => {
  const impactImages = [
    {
      src: "/lovable-uploads/3ae6fbc6-5afd-4764-a185-3d36ab5b5bf7.png",
      alt: "Expert ACINT demonstrating aquaculture techniques",
      title: "Formation Expert",
      description: "Nos experts forment les jeunes aux techniques d'aquaculture modernes"
    },
    {
      src: "/lovable-uploads/f7340d43-0189-4f4f-b832-51520adcb90a.png",
      alt: "Fish processing and handling techniques",
      title: "Techniques de Transformation",
      description: "Maîtrise des techniques de traitement et conservation du poisson"
    },
    {
      src: "/lovable-uploads/d65e9c23-62be-44d2-b31d-88db1f9627e9.png",
      alt: "Collaborative fish processing training",
      title: "Formation Collaborative",
      description: "Apprentissage en équipe des meilleures pratiques"
    },
    {
      src: "/lovable-uploads/26f40dcd-59f1-40ef-942f-987015ad7a45.png",
      alt: "Modern aquaculture equipment and infrastructure",
      title: "Équipements Modernes",
      description: "Infrastructure aquacole avec systèmes de pompage avancés"
    },
    {
      src: "/lovable-uploads/3921ce0c-73b8-4b9b-8046-dacbbaf80667.png",
      alt: "Fish storage and transport systems",
      title: "Systèmes de Stockage",
      description: "Solutions innovantes pour le transport et stockage"
    },
    {
      src: "/lovable-uploads/aabdab31-7c02-4683-ae4a-483890abd35b.png",
      alt: "Healthy fish in aquaculture facility",
      title: "Élevage Professionnel",
      description: "Poissons en bonne santé dans nos installations modernes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Notre Impact Réel
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            L'Aquaculture en Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez comment ACINT transforme la vie des jeunes entrepreneurs à travers 
            des formations pratiques en aquaculture et pisciculture. Nos projets concrets 
            génèrent des revenus durables et renforcent la sécurité alimentaire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactImages.map((image, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:scale-105 bg-card border-border overflow-hidden"
            >
              <CardContent className="p-0">
                <AspectRatio ratio={4/3}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm text-primary-foreground/90 leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projets Aquacoles Réalisés</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Jeunes Formés en Pisciculture</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <div className="text-muted-foreground">Taux de Réussite Entrepreneurial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;