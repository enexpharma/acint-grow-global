import { MessageCircle } from "lucide-react";
import { Button } from "./button";

const WhatsAppButton = () => {
  const phoneNumber = "22507070109995";
  const message = "Bonjour, j'aimerais obtenir des informations sur";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full h-14 w-14 p-0 bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300 border-0"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          aria-label="Contactez-nous sur WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </Button>
      
      {/* Tooltip/Label */}
      <div className="absolute bottom-16 right-0 hidden md:block">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Contactez-nous sur WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;