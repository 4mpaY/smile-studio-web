import { useInView } from "@/hooks/useInView";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useInView();
  return <div ref={ref} className={`scroll-reveal ${visible ? "visible" : ""} ${className}`}>{children}</div>;
};

const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  placeholder: `Imagen ${i + 1}`,
}));

const GalleryPage = () => (
  <>
    <section className="gradient-hero pt-32 pb-16">
      <div className="container mx-auto px-4 text-center page-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Galería</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Conoce nuestras instalaciones, equipo y resultados de tratamientos.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background bg-grid relative overflow-hidden">
      <div className="absolute top-10 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/3" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Section key={item.id}>
              <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border group">
                <div className="image-placeholder aspect-[4/3] text-muted-foreground text-sm">
                  {item.placeholder}
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Descripción breve de la imagen {item.id}</p>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default GalleryPage;
