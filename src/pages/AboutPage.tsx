import { Target, Eye, Heart, Users, Star, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useInView();
  return <div ref={ref} className={`scroll-reveal ${visible ? "visible" : ""} ${className}`}>{children}</div>;
};

const AboutPage = () => (
  <>
    <section className="gradient-hero pt-32 pb-16">
      <div className="container mx-auto px-4 text-center page-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Nosotros</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Conoce más sobre nuestra clínica, historia y compromiso con tu salud bucal.
        </p>
      </div>
    </section>

    {/* Quiénes somos */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Quiénes Somos</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              La Clínica Dental del Dr. Lucio Martel es un centro odontológico de referencia en la ciudad de Huánuco,
              dedicado a brindar servicios de salud bucal integral con los más altos estándares de calidad.
              Nuestro equipo de profesionales altamente capacitados se compromete a ofrecer un trato
              cálido, personalizado y enfocado en las necesidades de cada paciente.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Con el slogan "El doctor de las estrellas", reflejamos nuestro compromiso de hacer brillar
              la sonrisa de cada uno de nuestros pacientes, utilizando tecnología de vanguardia y
              técnicas modernas de odontología.
            </p>
          </div>
        </Section>
      </div>
    </section>

    {/* Historia */}
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3">
                <BookOpen size={16} />
                Nuestra Historia
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Nuestra Historia</h2>
              <p className="text-xs text-muted-foreground/60 italic mb-3">* Contenido generado con fines ilustrativos</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desde 2012, la Clínica Dental del Dr. Lucio Martel ha sido un pilar fundamental en la salud bucal
                de la comunidad huanuqueña. Lo que comenzó como un pequeño consultorio con la visión de ofrecer
                odontología de calidad accesible, se ha transformado en una clínica dental moderna y completa.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A lo largo de más de una década, el Dr. Martel ha atendido a miles de pacientes, ganándose
                la confianza de familias enteras que han encontrado en nuestra clínica un espacio seguro
                para el cuidado de su salud oral. Cada año hemos incorporado nuevas tecnologías y
                especialidades para ofrecer un servicio cada vez más completo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoy, con más de 12 años de trayectoria, seguimos comprometidos con nuestra misión original:
                hacer brillar la sonrisa de cada paciente que cruza nuestras puertas.
              </p>
            </div>
            <div className="image-placeholder aspect-[4/3] rounded-xl text-muted-foreground text-sm">
              Imagen histórica / del Dr. Martel
            </div>
          </div>
        </Section>
      </div>
    </section>

    {/* Misión y Visión */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Section>
            <div className="bg-card rounded-xl p-8 shadow-card border border-border h-full">
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground mb-4">
                <Target size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Misión</h3>
              <p className="text-xs text-muted-foreground/60 italic mb-2">* Contenido generado con fines ilustrativos</p>
              <p className="text-muted-foreground leading-relaxed">
                Brindar servicios odontológicos integrales de alta calidad a la comunidad de Huánuco,
                utilizando tecnología de vanguardia y un equipo humano comprometido con el bienestar
                y la salud bucal de nuestros pacientes, garantizando un trato cálido, ético y profesional
                que supere sus expectativas.
              </p>
            </div>
          </Section>
          <Section>
            <div className="bg-card rounded-xl p-8 shadow-card border border-border h-full">
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground mb-4">
                <Eye size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Visión</h3>
              <p className="text-xs text-muted-foreground/60 italic mb-2">* Contenido generado con fines ilustrativos</p>
              <p className="text-muted-foreground leading-relaxed">
                Ser la clínica dental líder y de mayor confianza en la región Huánuco, reconocida por
                la excelencia en nuestros servicios, la innovación constante en tratamientos odontológicos
                y nuestro compromiso inquebrantable con la salud y satisfacción de cada paciente.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </section>

    {/* Valores */}
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Section>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Valores Corporativos</h2>
          </div>
        </Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Heart, title: "Compromiso", desc: "Dedicación total al bienestar y salud bucal de cada paciente." },
            { icon: Star, title: "Excelencia", desc: "Búsqueda constante de la más alta calidad en cada tratamiento." },
            { icon: Users, title: "Empatía", desc: "Comprendemos las necesidades y temores de nuestros pacientes." },
            { icon: Target, title: "Integridad", desc: "Actuamos con ética, transparencia y honestidad profesional." },
          ].map((v, i) => (
            <Section key={i}>
              <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center h-full">
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground mb-3 mx-auto">
                  <v.icon size={20} />
                </div>
                <h4 className="font-display font-semibold text-card-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
