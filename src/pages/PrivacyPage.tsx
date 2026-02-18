const PrivacyPage = () => (
  <>
    <section className="gradient-hero pt-32 pb-16">
      <div className="container mx-auto px-4 text-center page-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Políticas de Privacidad</h1>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-xs italic text-muted-foreground/60">* Contenido generado con fines ilustrativos. Actualice según corresponda.</p>

          <h2 className="font-display text-2xl font-bold text-foreground">1. Información General</h2>
          <p>
            La Clínica Dental del Dr. Lucio Martel, identificada con RUC 10101010101010101, con domicilio en
            Huánuco, Huánuco, Huánuco, es responsable del tratamiento de los datos personales que recopilamos
            a través de nuestro sitio web y servicios presenciales.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">2. Datos que Recopilamos</h2>
          <p>Recopilamos los siguientes datos personales cuando usted utiliza nuestros servicios:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Número de teléfono</li>
            <li>Correo electrónico</li>
            <li>Historia clínica dental</li>
            <li>Datos de contacto proporcionados en formularios</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground">3. Finalidad del Tratamiento</h2>
          <p>Sus datos personales son utilizados para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gestionar y programar citas odontológicas</li>
            <li>Elaborar y mantener su historia clínica</li>
            <li>Comunicarnos con usted sobre tratamientos y promociones</li>
            <li>Cumplir con obligaciones legales y normativas de salud</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground">4. Protección de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales
            contra acceso no autorizado, pérdida, alteración o divulgación. Cumplimos con la Ley N° 29733,
            Ley de Protección de Datos Personales del Perú, y su reglamento.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">5. Derechos del Titular</h2>
          <p>
            Usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos
            personales (derechos ARCO). Para ejercer estos derechos, puede comunicarse con nosotros
            al teléfono 999 999 999.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">6. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento.
            Los cambios serán publicados en esta página con la fecha de última actualización.
          </p>

          <p className="text-sm text-muted-foreground/60 pt-4">Última actualización: Febrero 2026</p>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPage;
