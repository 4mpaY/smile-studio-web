import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { useInView } from "@/hooks/useInView";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useInView();
  return <div ref={ref} className={`scroll-reveal ${visible ? "visible" : ""} ${className}`}>{children}</div>;
};

const ServicesPage = () => (
  <>
    <section className="gradient-hero pt-32 pb-16">
      <div className="container mx-auto px-4 text-center page-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Nuestros Servicios</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Soluciones odontológicas integrales para toda la familia con la mejor tecnología y atención profesional.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background bg-dots relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Section key={service.slug}>
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border group h-full flex flex-col">
                <img src={service.image} alt={service.title} className="w-full aspect-video object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{service.shortDescription}</p>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/51999999999?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-lg gradient-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Cotizar
                    </a>
                    <Link
                      to={`/servicios/${service.slug}`}
                      className="flex-1 text-center px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
