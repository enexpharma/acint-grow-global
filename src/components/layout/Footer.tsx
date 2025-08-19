import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "À Propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projets", href: "/projects" },
    { name: "Candidater", href: "/apply" },
  ];

  const services = [
    { name: "Conseil Agricole", href: "/services/conseil-agricole" },
    { name: "Formation CIF-3A", href: "/services/formation-cif3a" },
    { name: "Création EA", href: "/services/creation-entreprises" },
    { name: "R&D Innovation", href: "/services/recherche-innovation" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-background/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Restez informé de nos actualités
            </h3>
            <p className="text-background/80 mb-6 max-w-2xl mx-auto">
              Recevez les dernières nouvelles sur nos programmes, success stories 
              et opportunités dans l'agriculture durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Votre adresse email" 
                className="bg-background/10 border-background/30 text-background placeholder:text-background/60"
              />
              <Button className="bg-primary hover:bg-primary-light">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/da28dec9-9dd9-484b-b323-8dcf6035b03f.png" 
                alt="ACINT Logo"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-sm text-background/80">Agricultural Advisory & Installation</div>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Agence Internationale de Conseil et d'Installation Agricole - 
              Transformons ensemble l'agriculture africaine vers un avenir durable.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/80">
                  Bingerville, Abidjan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">
                  +225 07 07 01 09 95
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">
                  secretariat@acint-cif3a.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 ACINT. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-background/60 hover:text-primary text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/contact" className="text-background/60 hover:text-primary text-sm transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;