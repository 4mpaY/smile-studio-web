import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:999999999"
      className="group relative w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      aria-label="Llamar"
    >
      <Phone size={22} />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Llámanos
      </span>
    </a>
    <a
      href="https://wa.me/51999999999?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Escríbenos por WhatsApp
      </span>
    </a>
  </div>
);

export default FloatingButtons;
