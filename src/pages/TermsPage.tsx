const TermsPage = () => (
  <>
    <section className="gradient-hero pt-32 pb-16">
      <div className="container mx-auto px-4 text-center page-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Términos y Condiciones</h1>
      </div>
    </section>

    <section className="py-20 bg-background bg-diagonal relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-xs italic text-muted-foreground/60">* Contenido generado con fines ilustrativos. Actualice según corresponda.</p>

          <h2 className="font-display text-2xl font-bold text-foreground">1. Aceptación de Términos</h2>
          <p>
            Al acceder y utilizar el sitio web de la Clínica Dental del Dr. Lucio Martel, usted acepta
            estos términos y condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos,
            le recomendamos no utilizar nuestro sitio web.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">2. Servicios</h2>
          <p>
            Nuestra clínica ofrece servicios de odontología general y especializada. Los tratamientos
            específicos, costos y tiempos de tratamiento serán determinados tras una evaluación
            personalizada del paciente. Los precios pueden variar según la complejidad del caso.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">3. Citas y Cancelaciones</h2>
          <p>
            Las citas deben ser agendadas con anticipación. En caso de no poder asistir, le solicitamos
            notificarnos con al menos 24 horas de anticipación. La clínica se reserva el derecho de
            reprogramar citas cuando sea necesario por razones operativas.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">4. Responsabilidad del Paciente</h2>
          <p>El paciente se compromete a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Proporcionar información veraz sobre su estado de salud</li>
            <li>Seguir las indicaciones post-tratamiento proporcionadas</li>
            <li>Asistir a las citas de control programadas</li>
            <li>Realizar los pagos correspondientes por los servicios recibidos</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground">5. Propiedad Intelectual</h2>
          <p>
            Todo el contenido del sitio web, incluyendo textos, imágenes, logotipos y diseño, es propiedad
            de la Clínica Dental del Dr. Lucio Martel y está protegido por las leyes de propiedad intelectual.
            Queda prohibida su reproducción sin autorización previa.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">6. Limitación de Responsabilidad</h2>
          <p>
            La información proporcionada en este sitio web tiene carácter informativo y no constituye
            consejo médico. Para un diagnóstico y tratamiento adecuado, es necesaria una consulta
            presencial con nuestros profesionales.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">7. Legislación Aplicable</h2>
          <p>
            Estos términos y condiciones se rigen por las leyes de la República del Perú. Cualquier
            controversia será resuelta en los tribunales competentes de la ciudad de Huánuco.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">8. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con estos términos y condiciones, puede comunicarse
            con nosotros al teléfono 999 999 999 o visitarnos en nuestra clínica ubicada en
            Huánuco, Huánuco, Huánuco.
          </p>

          <p className="text-sm text-muted-foreground/60 pt-4">Última actualización: Febrero 2026</p>
        </div>
      </div>
    </section>
  </>
);

export default TermsPage;
