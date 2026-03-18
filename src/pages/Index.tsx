import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Award, Heart, Star, ArrowRight, Play, MapPin, Phone, Clock, X } from "lucide-react";
import { services } from "@/data/services";
import { useInView } from "@/hooks/useInView";
import logoImg from "@/assets/general/logo.png";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000);



    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO CAROUSEL */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* SLIDE 1 */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/hero/hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/90" />
          <div className="container mx-auto px-4 pt-20 pb-16 relative h-full flex items-center justify-end">
            <div className={`w-full lg:w-3/5 xl:w-1/2 flex flex-col items-end text-right transition-all duration-1000 delay-300 transform ${currentSlide === 0 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <div className="flex items-center gap-4 lg:gap-6 mb-6">
                <img src={logoImg} alt="Logo Clínica Dental" className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md brightness-0 invert" />
                <div className="text-left">
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
                    Dr. Lucio Martel
                  </h1>
                  <p className="text-lg sm:text-xl text-gold font-display mt-[-4px] uppercase tracking-wide">
                    clínica dental
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-white text-sm font-medium mb-6">
                <Star size={14} className="text-gold" />
                El doctor de las estrellas
              </div>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-lg">
                Tu sonrisa merece lo mejor. Ofrecemos servicios de odontología integral con tecnología de vanguardia y un trato personalizado.
              </p>
              <div className="flex flex-wrap gap-4 justify-end">
                <Link to="/contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-navy font-bold hover:bg-gold/90 transition-colors shadow-lg">
                  Agendar Cita <ArrowRight size={16} />
                </Link>
                <Link to="/servicios" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors shadow-sm">
                  Nuestros Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/hero/hero2.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="container mx-auto px-4 pt-20 pb-16 relative h-full flex items-center justify-start">
            <div className={`w-full lg:w-3/5 xl:w-1/2 flex flex-col items-start text-left transition-all duration-1000 delay-300 transform ${currentSlide === 1 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <div className="flex items-center gap-4 lg:gap-6 mb-6">
                <img src={logoImg} alt="Logo Clínica Dental" className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md brightness-0 invert" />
                <div className="text-left">
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
                    Diseño de Sonrisas
                  </h1>
                  <p className="text-lg sm:text-xl text-gold font-display mt-[-4px] uppercase tracking-wide">
                    tecnología avanzada
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-white text-sm font-medium mb-6">
                <Shield size={14} className="text-gold" />
                Más de 12 años de experiencia
              </div>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-lg">
                Especialistas en transformar sonrisas con métodos modernos, seguros y efectivos. Tu salud dental en manos de profesionales.
              </p>
              <div className="flex flex-wrap gap-4 justify-start">
                <Link to="/servicios" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-navy font-bold hover:bg-gold/90 transition-colors shadow-lg">
                  Ver Tratamientos <ArrowRight size={16} />
                </Link>
                <Link to="/nosotros" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors shadow-sm">
                  Conócenos
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/hero/hero3.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="container mx-auto px-4 pt-20 pb-16 relative h-full flex items-center justify-center">
            <div className={`w-full flex flex-col items-center justify-center transition-all duration-1000 delay-300 transform ${currentSlide === 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-12 drop-shadow-md text-center">
                ¿Por qué elegirnos?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 w-full max-w-4xl px-2">
                {[
                  { title: "Odontología Integral", text: "Tratamientos para toda la familia." },
                  { title: "Especialistas", text: "Equipo médico altamente capacitado." },
                  { title: "Equipos 3D", text: "Diagnósticos precisos y ultra modernos." },
                  { title: "Atención Sin Dolor", text: "Procedimientos mínimamente invasivos." },
                  { title: "Ubicación Céntrica", text: "Fácil acceso en la ciudad de Huánuco." },
                  { title: "Materiales Premium", text: "Alta calidad en todo tratamiento." }
                ].map((bubble, i) => (
                  <div
                    key={i}
                    className={`bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center text-center transition-all duration-700
                      ${currentSlide === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${300 + (i * 200)}ms` }}
                  >
                    <h3 className="text-sm md:text-base font-bold text-white mb-1 md:mb-2 font-display">{bubble.title}</h3>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed">{bubble.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? "bg-gold w-8" : "bg-white/50 hover:bg-white/80"}`}
              aria-label={`Ir a diapositiva ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-20 bg-background bg-dots relative">
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
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
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
                  <img src={service.image} alt={service.title} className="w-full aspect-video object-cover" />
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
      <section className="py-20 bg-background bg-wave relative">
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
              <img src="/src/assets/hero/hero.jpg" alt="Equipo Clínica Dental" className="w-full aspect-[4/3] rounded-xl object-cover shadow-lg" />
            </div>
          </Section>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 bg-secondary/30 bg-grid relative">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Galería</h2>
              <p className="text-muted-foreground">Conoce nuestras instalaciones y resultados</p>
            </div>
          </Section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/src/assets/galeria/endodoncia.jpg",
              "/src/assets/galeria/implantes.jpg",
              "/src/assets/galeria/limpieza-dental.jpg",
              "/src/assets/galeria/odontopediatría.jpg",
              "/src/assets/galeria/ortodoncia.jpg",
              "/src/assets/galeria/peridoncia.jpg"
            ].map((imgSrc, i) => (
              <Section key={i}>
                <div
                  className="relative w-full aspect-square rounded-xl overflow-hidden shadow-card group cursor-pointer"
                  onClick={() => setSelectedGalleryImage(imgSrc)}
                  style={{ pointerEvents: 'auto' }}
                >
                  <img src={imgSrc} alt={`Galería ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="text-white font-medium px-4 text-center text-sm md:text-base border border-white/50 py-2 rounded-lg backdrop-blur-sm">
                      Ampliar foto
                    </span>
                  </div>
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
      <section className="py-20 bg-background bg-diagonal relative">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Videos</h2>
              <p className="text-muted-foreground">Descubre más sobre nuestros tratamientos</p>
            </div>
          </Section>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "7591172951362309394",
              "7449213067004513541",
              "7447934591941479686"
            ].map((videoId, i) => (
              <Section key={i}>
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${videoId}`}
                    style={{ width: "100%", height: "100%", border: "none", position: "absolute", top: 0, left: 0 }}
                    allowFullScreen={true}
                    allow="encrypted-media"
                    title={`TikTok Video ${i + 1}`}
                  ></iframe>
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

      {/* Lightbox Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedGalleryImage(null);
            }}
          >
            <X size={36} />
          </button>
          <img
            src={selectedGalleryImage}
            alt="Vista ampliada"
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl scale-100 animate-fade-in relative z-10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Index;
