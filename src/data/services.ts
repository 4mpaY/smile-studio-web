export interface Service {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

import endodonciaImg from "@/assets/servicios/endodoncia.jpg";
import implantesImg from "@/assets/servicios/implantes.jpg";
import limpiezaImg from "@/assets/servicios/limpieza-dental.jpg";
import odontopediatriaImg from "@/assets/servicios/odontopediatría.jpg";
import ortodonciaImg from "@/assets/servicios/ortodoncia.jpg";
import peridonciaImg from "@/assets/servicios/peridoncia.jpg";
import placasImg from "@/assets/servicios/placas-dentales.jpg";
import postisoImg from "@/assets/servicios/postiso.jpg";
import protesisImg from "@/assets/servicios/protesis.jpg";

export const services: Service[] = [
  {
    slug: "limpieza-dental",
    title: "Limpieza Dental",
    image: limpiezaImg,
    shortDescription: "Eliminamos placa y sarro para mantener tu sonrisa saludable y prevenir enfermedades bucales.",
    fullDescription: "Nuestro servicio de limpieza dental profesional utiliza tecnología de ultrasonido para eliminar la placa bacteriana y el sarro acumulado en los dientes y encías. Este procedimiento es fundamental para prevenir caries, gingivitis y periodontitis. Recomendamos realizarlo cada 6 meses para mantener una óptima salud bucal. Durante la sesión, también realizamos un pulido dental que deja tus dientes más suaves y brillantes."
  },
  {
    slug: "ortodoncia",
    title: "Ortodoncia",
    image: ortodonciaImg,
    shortDescription: "Corregimos la alineación de tus dientes con brackets metálicos, estéticos o alineadores invisibles.",
    fullDescription: "Nuestro servicio de ortodoncia ofrece soluciones personalizadas para corregir problemas de maloclusión, apiñamiento y espaciado dental. Contamos con opciones de brackets metálicos convencionales, brackets estéticos de cerámica y alineadores transparentes. Cada tratamiento es diseñado con un plan personalizado utilizando tecnología digital para garantizar los mejores resultados en el menor tiempo posible."
  },
  {
    slug: "implantes",
    title: "Implantes Dentales",
    image: implantesImg,
    shortDescription: "Reemplazamos dientes perdidos con implantes de titanio de alta calidad y apariencia natural.",
    fullDescription: "Los implantes dentales son la solución más avanzada y duradera para reemplazar dientes perdidos. Utilizamos implantes de titanio de grado médico que se integran naturalmente con el hueso maxilar. El procedimiento incluye una evaluación completa con tomografía 3D, la colocación quirúrgica del implante y la posterior rehabilitación con coronas de porcelana que imitan perfectamente el aspecto de los dientes naturales."
  },
  {
    slug: "endodoncia",
    title: "Endodoncia",
    image: endodonciaImg,
    shortDescription: "Tratamiento de conducto para salvar dientes dañados eliminando la infección de la pulpa dental.",
    fullDescription: "La endodoncia o tratamiento de conducto es un procedimiento que permite conservar dientes que de otra manera tendrían que ser extraídos. Utilizamos instrumentación rotatoria y localizadores apicales electrónicos para realizar tratamientos precisos y cómodos. El procedimiento consiste en eliminar el tejido pulpar infectado, desinfectar los conductos radiculares y sellarlos herméticamente."
  },
  {
    slug: "peridoncia",
    title: "Periodoncia",
    image: peridonciaImg,
    shortDescription: "Diagnóstico y tratamiento de enfermedades de las encías para proteger el soporte de tus dientes.",
    fullDescription: "La periodoncia se especializa en el tratamiento de enfermedades que afectan las encías y el hueso que soporta los dientes. Ofrecemos tratamientos desde limpiezas profundas (raspado y alisado radicular) hasta cirugías periodontales avanzadas. La enfermedad periodontal es la principal causa de pérdida dental en adultos, por lo que su detección y tratamiento temprano son fundamentales."
  },
  {
    slug: "odontopediatria",
    title: "Odontopediatría",
    image: odontopediatriaImg,
    shortDescription: "Atención dental especializada para los más pequeños en un ambiente cálido y amigable.",
    fullDescription: "Nuestro servicio de odontopediatría está diseñado para brindar atención dental integral a niños y adolescentes. Contamos con un ambiente especialmente acondicionado para que los pequeños se sientan cómodos y seguros. Realizamos sellantes, fluorización, tratamiento de caries, ortopedia maxilar y educación en higiene oral. Nuestro objetivo es crear hábitos saludables desde temprana edad."
  },
  {
    slug: "placas-dentales",
    title: "Placas Dentales",
    image: placasImg,
    shortDescription: "Placas de descanso y miorelajantes para tratar el bruxismo y proteger tus dientes.",
    fullDescription: "Las placas dentales son aparatos removibles diseñados a medida que protegen los dientes del desgaste causado por el bruxismo (rechinar de dientes). También ayudan a relajar la musculatura de la mandíbula y aliviar los dolores articulares asociados. Cada placa es fabricada con materiales resistentes y cómodos para su uso nocturno continuo."
  },
  {
    slug: "protesis",
    title: "Prótesis Dentales",
    image: protesisImg,
    shortDescription: "Restauramos tu sonrisa con prótesis fijas y removibles de alta calidad y estética natural.",
    fullDescription: "Ofrecemos una amplia gama de soluciones protésicas para restaurar la función masticatoria y la estética dental. Nuestros servicios incluyen coronas individuales, puentes fijos, prótesis parciales removibles y prótesis totales. Trabajamos con materiales de primera calidad como porcelana, zirconio y resinas de última generación para lograr resultados naturales y duraderos."
  },
  {
    slug: "postiso",
    title: "Postizos y Coronas",
    image: postisoImg,
    shortDescription: "Soluciones estéticas inmediatas para restaurar o reemplazar uno o más dientes dañados.",
    fullDescription: "Los dientes postizos y coronas son ideales para rehabilitar dientes que han sufrido daños extensos o que requieren una mejora estética significativa. Nuestros tratamientos son mínimamente invasivos y se adhieren perfectamente al contorno de tus dientes, proporcionando funcionalidad y estética garantizada a largo plazo con acabados excepcionales."
  }
];
