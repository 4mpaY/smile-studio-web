import { Link } from "react-router-dom";
import { Shield, Award, Heart, Star, ArrowRight, Play, MapPin, Phone, Clock } from "lucide-react";
import { services } from "@/data/services";
import { useInView } from "@/hooks/useInView";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`scroll-reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const Index = () => {
  const previewServices = services.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(195_90%_47%/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="page-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-6">
                <Star size={12} />
                El doctor de las estrellas
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                Doctor Lucio Martel
              </h1>
              <p className="text-xl sm:text-2xl text-cyan-light font-display mb-2">Clínica Dental</p>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
                Tu sonrisa merece lo mejor. Ofrecemos servicios de odontología integral con tecnología de vanguardia y un trato personalizado.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Agendar Cita
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/servicios"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  Nuestros Servicios
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="image-placeholder aspect-[4/5] max-w-md ml-auto text-muted-foreground text-sm">
                Imagen del Doctor / Clínica
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Section>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Award, title: "Experiencia Profesional", desc: "Más de 12 años brindando atención odontológica de calidad en Huánuco." },
                { icon: Shield, title: "Tecnología Avanzada", desc: "Equipos de última generación para diagnósticos precisos y tratamientos efectivos." },
                { icon: Heart, title: "Atención Personalizada", desc: "Cada paciente recibe un plan de tratamiento diseñado a su medida." },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow border border-border group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground mb-4 group-hover:scale-110 transition-transform">
                    <card.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Nuestros Servicios</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos una amplia gama de servicios odontológicos para cuidar tu salud bucal de manera integral.
              </p>
            </div>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((service, i) => (
              <Section key={service.slug}>
                <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border group" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="image-placeholder aspect-video text-muted-foreground text-sm">
                    Imagen - {service.title}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
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
          <div className="text-center mt-10">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-navy-light transition-colors"
            >
              Ver todos los servicios
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Section>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Quiénes Somos</h2>
                <p className="text-muted-foreground mb-4">
                  Somos una clínica dental comprometida con la excelencia y la salud bucal de nuestros pacientes.
                  Bajo la dirección del Dr. Lucio Martel, ofrecemos servicios odontológicos integrales con un enfoque
                  en la prevención, la estética y la comodidad del paciente.
                </p>
                <p className="text-muted-foreground mb-6">
                  Con más de una década de experiencia, nos hemos convertido en referentes de la odontología en Huánuco,
                  atendiendo a miles de pacientes que confían en nosotros para el cuidado de su sonrisa.
                </p>
                <Link
                  to="/nosotros"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                >
                  Conoce más sobre nosotros
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="image-placeholder aspect-[4/3] rounded-xl text-muted-foreground text-sm">
                Imagen del equipo / clínica
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Galería</h2>
              <p className="text-muted-foreground">Conoce nuestras instalaciones y resultados</p>
            </div>
          </Section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Section key={i}>
                <div className="image-placeholder aspect-square rounded-xl text-muted-foreground text-sm">
                  Imagen {i + 1}
                </div>
              </Section>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              Ver galería completa
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Videos</h2>
              <p className="text-muted-foreground">Descubre más sobre nuestros tratamientos</p>
            </div>
          </Section>
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Section key={i}>
                <div className="image-placeholder aspect-video rounded-xl text-muted-foreground text-sm relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                      <Play size={24} className="text-accent ml-1" />
                    </div>
                  </div>
                  Video {i + 1}
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                ¿Listo para tu cita?
              </h2>
              <p className="text-primary-foreground/70 mb-8">
                Estamos aquí para ayudarte. Contáctanos y agenda tu cita con el Dr. Lucio Martel.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Phone size={18} className="text-cyan" />
                  <span>999 999 999</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <MapPin size={18} className="text-cyan" />
                  <span>Huánuco, Huánuco</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Clock size={18} className="text-cyan" />
                  <span>Lun - Sáb: 8:00 - 18:00</span>
                </div>
              </div>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-accent text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Contáctanos ahora
                <ArrowRight size={20} />
              </Link>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
};

export default Index;
