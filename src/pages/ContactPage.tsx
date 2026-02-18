import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", servicio: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Dr. Lucio Martel, mi nombre es ${form.nombre}.%0A` +
      `Teléfono: ${form.telefono}%0A` +
      `Correo: ${form.email}%0A` +
      `Servicio de interés: ${form.servicio}%0A` +
      `Mensaje: ${form.mensaje}`;
    window.open(`https://wa.me/51999999999?text=${text}`, "_blank");
  };

  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto px-4 text-center page-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Contáctanos</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Estamos para atenderte. Completa el formulario y nos comunicaremos contigo a la brevedad.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card border border-border space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nombre completo *</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Teléfono *</label>
                    <input
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      required
                      maxLength={15}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="999 999 999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      maxLength={255}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Servicio de interés</label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option>Limpieza Dental</option>
                    <option>Blanqueamiento Dental</option>
                    <option>Ortodoncia</option>
                    <option>Implantes Dentales</option>
                    <option>Endodoncia</option>
                    <option>Periodoncia</option>
                    <option>Odontopediatría</option>
                    <option>Cirugía Oral</option>
                    <option>Prótesis Dentales</option>
                    <option>Estética Dental</option>
                    <option>Radiografía Dental</option>
                    <option>Urgencias Dentales</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje *</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Describe tu consulta..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4">Información de contacto</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Ubicación</p>
                      <p className="text-muted-foreground">Huánuco, Huánuco, Huánuco</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Teléfono / WhatsApp</p>
                      <a href="tel:999999999" className="text-muted-foreground hover:text-accent transition-colors">999 999 999</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Horario de atención</p>
                      <p className="text-muted-foreground">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">RUC:</strong> 10101010101010101
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
