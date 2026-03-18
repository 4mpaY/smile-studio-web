import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Servicio no encontrado</h1>
          <Link to="/servicios" className="text-accent hover:underline">Volver a servicios</Link>
        </div>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto px-4 page-fade-in">
          <Link to="/servicios" className="inline-flex items-center gap-1 text-cyan text-sm mb-4 hover:underline">
            <ArrowLeft size={14} /> Volver a servicios
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">{service.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-background bg-dots relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <img src={service.image} alt={service.title} className="w-full aspect-video rounded-xl object-cover shadow-lg mb-8" />
              <p className="text-foreground leading-relaxed text-lg mb-6">{service.fullDescription}</p>
              <a
                href={`https://wa.me/51999999999?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Cotizar este servicio
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                <h3 className="font-display font-semibold text-foreground mb-3">¿Necesitas más información?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contáctanos para resolver tus dudas y agendar una evaluación personalizada.
                </p>
                <Link
                  to="/contacto"
                  className="block text-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-navy-light transition-colors"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
            {prevService ? (
              <Link to={`/servicios/${prevService.slug}`} className="flex items-center gap-2 text-accent hover:underline text-sm">
                <ArrowLeft size={14} /> {prevService.title}
              </Link>
            ) : <div />}
            {nextService ? (
              <Link to={`/servicios/${nextService.slug}`} className="flex items-center gap-2 text-accent hover:underline text-sm">
                {nextService.title} <ArrowRight size={14} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
