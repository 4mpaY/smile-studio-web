import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { X } from "lucide-react";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useInView();
  return <div ref={ref} className={`scroll-reveal ${visible ? "visible" : ""} ${className}`}>{children}</div>;
};

const galleryImages = [
  "/src/assets/galeria/endodoncia.jpg",
  "/src/assets/galeria/implantes.jpg",
  "/src/assets/galeria/limpieza-dental.jpg",
  "/src/assets/galeria/odontopediatría.jpg",
  "/src/assets/galeria/ortodoncia.jpg",
  "/src/assets/galeria/peridoncia.jpg",
  "/src/assets/galeria/placas-dentales.jpg",
  "/src/assets/galeria/postiso.jpg",
  "/src/assets/galeria/protesis.jpg",
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <Section key={index}>
                <div
                  className="bg-card rounded-xl overflow-hidden shadow-card border border-border group relative aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Instalaciones ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-white font-display font-medium text-sm border-l-2 border-gold pl-2">
                      Clínica Dr. Martel
                    </span>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={36} />
          </button>
          <img
            src={selectedImage}
            alt="Vista ampliada"
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl scale-100 animate-fade-in relative z-10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GalleryPage;
