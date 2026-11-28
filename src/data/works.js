import banio_completo from "../assets/Reforma/banio_completo/banio_completo.jpg";
import electricidad1 from "../assets/Electricidad/inslatacion_electrica_vivienda/insalacion_electrica_vivienda1.jpg";
import electricidad2 from "../assets/Electricidad/inslatacion_electrica_vivienda/insalacion_electrica_vivienda2.jpg";
import electricidad3 from "../assets/Electricidad/inslatacion_electrica_vivienda/insalacion_electrica_vivienda3.jpg";
import casa1 from "../assets/Recidencial/casa/casa1.jpg";
import casa2 from "../assets/Recidencial/casa/casa2.jpg";
import casa3 from "../assets/Recidencial/casa/casa3.jpg";
import casa4 from "../assets/Recidencial/casa/casa4.jpg";
import casa5 from "../assets/Recidencial/casa/casa5.jpg";
import casa6 from "../assets/Recidencial/casa/casa6.jpg";
import casa7 from "../assets/Recidencial/casa/casa7.jpg";
import casa8 from "../assets/Recidencial/casa/casa8.jpg";
import losa1 from "../assets/Exterior/losa_hormigon/losa1.jpg";
import losa2 from "../assets/Exterior/losa_hormigon/losa2.jpg";
import losa3 from "../assets/Exterior/losa_hormigon/losa3.jpg";
import losa4 from "../assets/Exterior/losa_hormigon/losa4.jpg";
import losa5 from "../assets/Exterior/losa_hormigon/losa5.jpg";
import losa6 from "../assets/Exterior/losa_hormigon/losa6.jpg";
import losa7 from "../assets/Exterior/losa_hormigon/losa7.jpg";
import losa8 from "../assets/Exterior/losa_hormigon/losa8.jpg";
import losa9 from "../assets/Exterior/losa_hormigon/losa9.jpg";
import losa10 from "../assets/Exterior/losa_hormigon/losa10.jpg";
import losa11 from "../assets/Exterior/losa_hormigon/losa11.jpg";

export const works = [
  {
    id: "casa-barrio-norte",
    title: "Casa en Barrio Norte",
    category: "residencial",
    location: "Córdoba, Argentina",
    year: "2025",
    shortDescription:
      "Obra nueva de 120 m² con terminaciones de primera calidad.",
    fullDescription:
      "Construcción completa de vivienda unifamiliar de 120 m² sobre lote propio. Incluye estructura, mampostería, instalaciones, revoques y terminaciones finales. Entregada en plazo y con materiales de primera.",
    technicalDetails: [
      "Superficie: 120 m²",
      "Estructura de hormigón armado",
      "Revoque fino interior y exterior",
      "Pisos de porcelanato",
      "Instalaciones eléctricas y sanitarias completas",
    ],
    coverImage: casa1,
    images: [casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8],
    featured: true,
  },
  {
    id: "reforma-cocina",
    title: "Reforma de cocina",
    category: "reforma",
    location: "Córdoba, Argentina",
    year: "2025",
    shortDescription: "Ampliación y modernización de cocina integral.",
    fullDescription:
      "Reforma integral de cocina con ampliación de 8 m², nueva distribución, mesada de granito, muebles a medida y revestimientos cerámicos de alta gama.",
    technicalDetails: [
      "Ampliación: 8 m²",
      "Mesada de granito",
      "Muebles a medida",
      "Revestimiento cerámico",
      "Instalación eléctrica nueva",
    ],
    coverImage: "/assets/obra2.jpg",
    images: ["/assets/obra2.jpg"],
    featured: true,
  },
  {
    id: "ampliacion-living",
    title: "Ampliación de living",
    category: "ampliacion",
    location: "Córdoba, Argentina",
    year: "2025",
    shortDescription: "Ampliación de 25 m² con integración al jardín.",
    fullDescription:
      "Ampliación de living de 25 m² con grandes ventanales e integración al jardín. Estructura liviana, aislación térmica y terminaciones de primera.",
    technicalDetails: [
      "Superficie: 25 m²",
      "Ventanales de aluminio",
      "Aislación térmica",
      "Piso de porcelanato",
      "Integración con jardín",
    ],
    coverImage: "/assets/obra3.jpg",
    images: ["/assets/obra3.jpg"],
    featured: true,
  },
  {
    id: "losa-hormigon-armado",
    title: "Construcción de losa y escalera de hormigón",
    category: "exterior",
    location: "Córdoba, Argentina",
    year: "2024",
    shortDescription:
      "Ejecución de losa de techo con viguetas y escalera de hormigón armado.",
    fullDescription:
      "Construcción de losa utilizando sistema de viguetas pretensadas y ladrillos cerámicos, complementada con armaduras de refuerzo y escalera de hormigón armado. La obra fue preparada para el posterior hormigonado, garantizando resistencia estructural y durabilidad.",
    technicalDetails: [
      "Losa con viguetas pretensadas",
      "Ladrillos cerámicos portantes",
      "Malla de acero de refuerzo",
      "Escalera de hormigón armado",
      "Encofrado y nivelación",
      "Preparación para hormigonado",
    ],
    coverImage: losa1,
    images: [
      losa1,
      losa2,
      losa3,
      losa4,
      losa5,
      losa6,
      losa7,
      losa8,
      losa9,
      losa10,
      losa11,
    ],
    featured: true,
  },
  {
    id: "bano-completo",
    title: "Baño completo",
    category: "reforma",
    location: "Córdoba, Argentina",
    year: "2024",
    shortDescription: "Refacción integral de baño con revestimientos.",
    fullDescription:
      "Refacción completa de baño: demolición, nueva instalación sanitaria, revestimientos, artefactos y grifería de primera línea.",
    technicalDetails: [
      "Demolición y nueva instalación",
      "Revestimiento cerámico",
      "Grifería premium",
      "Vanitory a medida",
      "Ventilación forzada",
    ],
    coverImage: banio_completo,
    images: [banio_completo],
    featured: false,
  },
  {
    id: "muro-perimetral",
    title: "Muro perimetral",
    category: "exterior",
    location: "Córdoba, Argentina",
    year: "2024",
    shortDescription: "Muro de 30 m con portón y revoque.",
    fullDescription:
      "Muro perimetral de 30 m lineales con portón vehicular y peatonal, revoque fino y pintura exterior de alta durabilidad.",
    technicalDetails: [
      "Longitud: 30 m",
      "Portón vehicular y peatonal",
      "Revoque fino",
      "Pintura exterior",
      "Cimientos de hormigón",
    ],
    coverImage: "/assets/obra6.jpg",
    images: ["/assets/obra6.jpg"],
    featured: false,
  },
  {
    id: "instalacion-electrica-vivienda",
    title: "Instalación eléctrica residencial",
    category: "electricidad",
    location: "Córdoba, Argentina",
    year: "2024",
    shortDescription:
      "Tendido eléctrico completo con puntos de iluminación y cajas de conexión.",
    fullDescription:
      "Instalación eléctrica integral en vivienda en construcción, incluyendo canalización, cableado, cajas de paso, puntos de iluminación y preparación para futuras conexiones. Trabajo realizado respetando normas de seguridad y garantizando una distribución eficiente de la energía.",
    technicalDetails: [
      "Cableado embutido",
      "Cajas de conexión empotradas",
      "Puntos de iluminación en techo",
      "Canalización protegida",
      "Preparación para llaves y tomacorrientes",
      "Distribución eléctrica por sectores",
    ],
    coverImage: electricidad1,
    images: [electricidad1, electricidad2, electricidad3],
    featured: false,
  },
];

export const workCategories = [
  { value: "todas", label: "Todas" },
  { value: "residencial", label: "Residencial" },
  { value: "reforma", label: "Reformas" },
  { value: "ampliacion", label: "Ampliaciones" },
  { value: "exterior", label: "Exterior" },
  { value: "electricidad", label: "Electricidad" },
];
