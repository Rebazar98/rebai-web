// =====================================================
// REBAI - FUENTE ÚNICA DE DATOS DEL SITIO
// =====================================================

const DEFAULT_SITE_URL = "https://trazev.com";
const DEFAULT_CONTACT_EMAIL = "info@trazev.com";
const DEFAULT_TRANSACTIONAL_FROM_ADDRESS = "noreply@send.trazev.com";

export const EMAIL_DEFAULTS = {
  contact: DEFAULT_CONTACT_EMAIL,
  transactionalFromAddress: DEFAULT_TRANSACTIONAL_FROM_ADDRESS,
  transactionalFrom: `TRAZEV <${DEFAULT_TRANSACTIONAL_FROM_ADDRESS}>`,
  transactionalReplyTo: DEFAULT_CONTACT_EMAIL,
} as const;

export const SITE = {
  name: "TRAZEV",
  logoSrc: "/logo.png",
  tagline: "IA y automatización con trazabilidad, seguridad y protección de datos, para ayuntamientos y empresas",
  description:
    "TRAZEV ayuda a ayuntamientos y empresas privadas a reducir carga administrativa y ganar trazabilidad, seguridad y control sobre sus procesos: redacción de planes urbanísticos, atención al ciudadano, vigilancia del BOPA y medición de satisfacción vecinal, con IA aplicada con criterio y protección de datos por diseño.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL,
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "+34 643 330 813",
  location: "España",
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL,
  linkedin: "https://linkedin.com/company/trazev",
};

export const NAV_LINKS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  benefit: string;
  hasPanel: boolean;
  defaultLeadType: "demo" | "contacto";
  category: "principal" | "adicional";
  features: string[];
  targetClients: string[];
  howItWorks: { step: number; title: string; description: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "redactor-urbanistico",
    name: "Redactor de Informes Urbanísticos",
    shortName: "Informes Urbanísticos",
    tagline: "Redacta informes técnicos de calificación urbanística por parcela, con datos del Catastro y la normativa municipal ya aplicada",
    description:
      "Genera el informe técnico urbanístico que la oficina técnica redacta cada vez que un vecino, notario o comprador solicita la calificación de una parcela. A partir de la referencia catastral, cruza los datos de la Sede Electrónica del Catastro con el planeamiento vigente para determinar la calificación urbanística aplicable, adjuntar el plano de zonificación y citar la normativa que regula ese suelo. El técnico solo tiene que revisar, ajustar y firmar.",
    metaTitle: "Redactor de Informes Urbanísticos con IA | TRAZEV",
    metaDescription:
      "Genera informes técnicos de calificación urbanística por parcela con datos del Catastro y la normativa municipal aplicada: menos tiempo por informe, mismo criterio técnico.",
    icon: "Map",
    benefit: "Menos tiempo por informe, mismo criterio técnico",
    hasPanel: false,
    defaultLeadType: "contacto",
    category: "principal",
    features: [
      "Búsqueda automática de datos catastrales por referencia o dirección (Sede Electrónica del Catastro)",
      "Determinación de la calificación urbanística aplicable según el PGO vigente",
      "Plano de zonificación con la parcela localizada, listo para adjuntar al informe",
      "Cita automática de los artículos de la normativa municipal que regulan esa calificación",
      "Redactado en el formato y estilo habitual del ayuntamiento, listo para firma",
      "Historial de informes emitidos, consultable y reutilizable para parcelas similares",
    ],
    targetClients: [
      "Oficinas técnicas municipales que emiten informes urbanísticos por parcela",
      "Ayuntamientos con alta demanda de informes de calificación (compraventas, licencias, notarías)",
      "Mancomunidades y consorcios de gestión urbanística",
      "Ingenierías y consultoras que tramitan informes urbanísticos para administraciones",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Nos das la referencia catastral o la dirección",
        description:
          "Localizamos la parcela y descargamos sus datos oficiales desde la Sede Electrónica del Catastro.",
      },
      {
        step: 2,
        title: "El sistema determina la calificación y redacta el borrador",
        description:
          "Cruza la ubicación con el planeamiento vigente, identifica la normativa aplicable y genera el informe con el plano de zonificación adjunto.",
      },
      {
        step: 3,
        title: "El técnico revisa, ajusta y firma",
        description:
          "El informe queda listo para su firma y entrega al solicitante, sin empezar cada vez desde cero.",
      },
    ],
  },
  {
    slug: "atencion-ciudadana",
    name: "Asistente de Atención al Ciudadano",
    shortName: "Atención Ciudadana",
    tagline: "Un asistente conversacional que responde a los ciudadanos 24/7 sobre trámites, plazos y servicios municipales",
    description:
      "Responde 24/7 a las dudas más frecuentes de los ciudadanos —trámites, horarios, requisitos, estado de expedientes— desde la web o el WhatsApp del ayuntamiento, sin colas ni saturar al personal de atención al público. Solo deriva la conversación a una persona cuando el caso realmente lo requiere.",
    metaTitle: "Asistente de Atención al Ciudadano para Ayuntamientos | TRAZEV",
    metaDescription:
      "Chatbot municipal con IA que atiende consultas ciudadanas 24/7, reduce colas y llamadas, y deja más tiempo al personal para los casos complejos.",
    icon: "MessageCircle",
    benefit: "Menos llamadas y colas, más disponibilidad para el ciudadano",
    hasPanel: false,
    defaultLeadType: "demo",
    category: "principal",
    features: [
      "Respuestas 24/7 sobre trámites, plazos y requisitos municipales",
      "Integración en la web del ayuntamiento y/o WhatsApp",
      "Base de conocimiento adaptada a la normativa y servicios locales",
      "Derivación automática a personal cuando el caso lo requiere",
      "Reduce llamadas y colas presenciales repetitivas",
      "Panel de consultas frecuentes para detectar necesidades de los ciudadanos",
    ],
    targetClients: [
      "Ayuntamientos con oficina de atención ciudadana saturada",
      "Entidades locales con pocos recursos para atención telefónica",
      "Mancomunidades con atención centralizada a varios municipios",
      "Concejalías que reciben muchas consultas repetitivas por trámite",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Cargamos el conocimiento municipal",
        description:
          "Trámites, horarios, ordenanzas y preguntas frecuentes reales del ayuntamiento alimentan al asistente.",
      },
      {
        step: 2,
        title: "El asistente atiende al ciudadano",
        description:
          "Responde por web o WhatsApp, en cualquier horario, con lenguaje claro y sin listas de espera.",
      },
      {
        step: 3,
        title: "Deriva cuando hace falta",
        description:
          "Si el caso es complejo, pasa la conversación a una persona del ayuntamiento con todo el contexto ya recogido.",
      },
    ],
  },
  {
    slug: "bopa",
    name: "BOPA Inteligente",
    shortName: "BOPA Inteligente",
    tagline: "Vigilancia inteligente del BOPA para detectar cambios relevantes sin revisión manual",
    description:
      "Deja de revisar el BOPA boletín por boletín: el sistema lo descarga, clasifica y analiza cada día, y tu equipo recibe solo las publicaciones que de verdad afectan a su actividad. Además, tienes a tu disposición un asistente de IA con todo el contenido de las publicaciones, listo para responder dudas sobre requisitos, plazos o impacto. Así reduces el riesgo de pasar algo por alto y ganas margen para actuar antes de que venza un plazo.",
    metaTitle: "BOPA Inteligente | Vigilancia automática del BOPA",
    metaDescription:
      "Vigila el BOPA y consulta cada publicación con un asistente de IA: alertas, contexto y prioridad para empresas, ingenierías y asesorías en Asturias.",
    icon: "FileText",
    benefit: "Menos revisión manual y más control normativo",
    hasPanel: true,
    defaultLeadType: "demo",
    category: "principal",
    features: [
      "Descarga automática diaria del BOPA",
      "Clasificación por categorías y sectores",
      "Asistente conversacional para consultar normativa",
      "Alertas personalizadas por actividad o expediente",
      "Histórico de disposiciones indexado y buscable",
      "Resumen ejecutivo automatizado por email",
    ],
    targetClients: [
      "Ingenierías técnicas y consultoras",
      "Asesorías con carga normativa recurrente",
      "Empresas que gestionan ayudas, licitaciones o cambios normativos",
      "Equipos que necesitan vigilar el BOPA sin revisarlo todo a mano",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Configuramos el criterio",
        description:
          "Definimos contigo qué categorías, palabras clave o tipos de publicación son relevantes para tu actividad.",
      },
      {
        step: 2,
        title: "El sistema revisa por ti",
        description:
          "BOPA Inteligente descarga, filtra y prioriza las publicaciones para separar lo relevante de lo accesorio.",
      },
      {
        step: 3,
        title: "Recibes una salida útil",
        description:
          "Tu equipo recibe alertas claras por email y puede revisar el histórico, las publicaciones y el contexto desde el panel.",
      },
    ],
  },
  {
    slug: "radar-satisfaccion",
    name: "Radar de Satisfacción Municipal",
    shortName: "Radar de Satisfacción",
    tagline: "Encuestas por chat de voz y de texto para medir en continuo la satisfacción y las necesidades de la ciudadanía",
    description:
      "Lanza encuestas cortas por chatbot de voz o de texto para conocer qué piensa la ciudadanía sobre los servicios, las obras y la gestión municipal, y qué necesita realmente. Convierte esas conversaciones accesibles en datos objetivos que el ayuntamiento puede usar para priorizar mejoras con evidencia, no con intuición.",
    metaTitle: "Radar de Satisfacción Municipal | TRAZEV",
    metaDescription:
      "Encuestas por chatbot de voz y de texto para medir la satisfacción y las necesidades de la ciudadanía sobre la gestión municipal, con datos objetivos y continuos.",
    icon: "Radar",
    benefit: "Datos reales de satisfacción, no intuición",
    hasPanel: false,
    defaultLeadType: "contacto",
    category: "principal",
    features: [
      "Encuestas conversacionales por chat de voz y/o de texto, accesibles para cualquier ciudadano",
      "Mide satisfacción y necesidades sobre servicios, gestión y gobierno municipal",
      "Panel con evolución de la satisfacción por servicio o área",
      "Detección de quejas o problemas recurrentes antes de que escalen",
      "Informes periódicos listos para presentar en pleno o memoria anual",
      "Segmentación por barrio, servicio o tipo de trámite",
    ],
    targetClients: [
      "Ayuntamientos que quieren medir la percepción ciudadana de forma objetiva",
      "Concejalías de participación ciudadana o modernización",
      "Entidades locales que necesitan justificar mejoras con datos",
      "Municipios que hoy solo reciben quejas puntuales, sin visión de conjunto",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Definimos qué medir",
        description:
          "Servicios, trámites o áreas municipales sobre los que el ayuntamiento quiere conocer la satisfacción real.",
      },
      {
        step: 2,
        title: "El sistema conversa con la ciudadanía",
        description:
          "Encuestas cortas por chat de voz o de texto, fáciles de responder desde el móvil, sin depender de que alguien conteste una llamada o un correo.",
      },
      {
        step: 3,
        title: "Recibes datos accionables",
        description:
          "El ayuntamiento ve la evolución, detecta puntos débiles y prioriza mejoras con evidencia, no con intuición.",
      },
    ],
  },
  {
    slug: "automatizaciones",
    name: "Automatizaciones a medida",
    shortName: "Automatizaciones",
    tagline: "Automatizaciones y soluciones de IA a medida para expedientes, documentación y mejora operativa",
    description:
      "Diseñamos e implantamos automatizaciones a medida —con o sin IA— para expedientes, documentación técnica, avisos y extracción de datos, adaptadas a la operativa real de cada cliente. El resultado: menos pasos manuales, menos errores y más tiempo para el trabajo que sí requiere criterio humano.",
    metaTitle: "Automatizaciones a medida | TRAZEV",
    metaDescription:
      "Automatizaciones con y sin IA hechas a medida para reducir carga administrativa, ordenar expedientes y mejorar la operativa de equipos técnicos y administrativos.",
    icon: "Bot",
    benefit: "Menos tiempo perdido y más capacidad operativa",
    hasPanel: false,
    defaultLeadType: "contacto",
    category: "adicional",
    features: [
      "Análisis de procesos y detección de cuellos de botella",
      "Automatizaciones con y sin IA adaptadas al flujo real",
      "Tratamiento de expedientes y documentación técnica",
      "Generación automatizada de informes y salidas operativas",
      "Integración con email, hojas de cálculo, APIs o herramientas existentes",
      "Soporte y mejora continua de los flujos implantados",
    ],
    targetClients: [
      "Ingenierías con carga documental o técnica repetitiva",
      "Consultoras que procesan expedientes, datos o informes",
      "Entidades con tareas administrativas intensivas",
      "Equipos que quieren mejorar procesos sin rehacer toda su operativa",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Analizamos el proceso",
        description:
          "Detectamos las tareas que más tiempo consumen, dónde hay fricción y qué partes se pueden automatizar con seguridad.",
      },
      {
        step: 2,
        title: "Diseñamos e implantamos",
        description:
          "Construimos la automatización y la conectamos con el entorno real de trabajo del equipo, sin capas innecesarias.",
      },
      {
        step: 3,
        title: "Ajustamos para operar",
        description:
          "Formación, seguimiento y mejora para que el sistema funcione de verdad en el día a día y no se quede en una prueba.",
      },
    ],
  },
  {
    slug: "asesorias",
    name: "Asesoría en automatización e IA",
    shortName: "Asesoría",
    tagline: "Consultoría en IA y automatización para decidir bien qué mejorar y cómo hacerlo",
    description:
      "Te ayudamos a definir dónde tiene sentido automatizar, dónde la IA aporta valor real y cómo mejorar procesos sin añadir complejidad innecesaria: una consultoría práctica para priorizar con criterio y no invertir a ciegas.",
    metaTitle: "Asesoría en automatización e IA | TRAZEV",
    metaDescription:
      "Consultoría en automatización, IA y eficiencia de procesos para equipos que necesitan decidir con criterio antes de implantar cambios operativos.",
    icon: "ShieldCheck",
    benefit: "Más criterio y menos inversión a ciegas",
    hasPanel: false,
    defaultLeadType: "contacto",
    category: "adicional",
    features: [
      "Revisión de procesos y puntos de mejora operativa",
      "Asesoría en automatización con y sin IA",
      "Priorización de oportunidades por impacto y viabilidad",
      "Criterio técnico para herramientas, integraciones y arquitectura",
      "Recomendaciones para implantar sin romper la operativa actual",
      "Acompañamiento en decisiones de eficiencia de procesos",
    ],
    targetClients: [
      "Equipos que quieren automatizar pero no saben por dónde empezar",
      "Organizaciones que necesitan criterio antes de invertir en herramientas",
      "Direcciones técnicas y operativas con procesos mejorables",
      "Clientes que buscan eficiencia sin depender de soluciones genéricas",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Revisamos la operativa",
        description:
          "Analizamos cómo trabaja el equipo hoy, qué fricciones existen y dónde se está perdiendo más tiempo o claridad.",
      },
      {
        step: 2,
        title: "Priorizamos y recomendamos",
        description:
          "Definimos qué merece automatizar, qué no, qué herramientas encajan mejor y cómo implantar cambios sin exceso de complejidad.",
      },
      {
        step: 3,
        title: "Acompañamos la implantación",
        description:
          "Convertimos la recomendación en una hoja de ruta clara para que las decisiones se puedan ejecutar con criterio y seguimiento.",
      },
    ],
  },
];

export const PAIN_POINTS = [
  {
    icon: "Clock",
    title: "Horas perdidas en trámites",
    description:
      "Tu equipo dedica días a revisar normativa, ordenar documentación y repetir tareas administrativas que deberían estar más automatizadas.",
  },
  {
    icon: "AlertTriangle",
    title: "Información dispersa y difícil de seguir",
    description:
      "Boletines, expedientes, documentos técnicos y cambios de criterio se reparten entre demasiadas herramientas y demasiados pasos manuales.",
  },
  {
    icon: "TrendingDown",
    title: "Procesos que no escalan",
    description:
      "Lo que parece gestionable con pocos casos se vuelve un cuello de botella cuando crecen los expedientes, los informes o las personas implicadas.",
  },
] as const;

export const SOLUTION_STEPS = [
  {
    number: "01",
    title: "Analizamos tu proceso",
    description: "Identificamos dónde la carga administrativa frena más a tu equipo.",
  },
  {
    number: "02",
    title: "Construimos la solución",
    description: "Automatización, IA o combinación de ambas según el caso real.",
  },
  {
    number: "03",
    title: "Tu equipo opera mejor",
    description: "Menos trabajo manual, más claridad operativa y mejor seguimiento.",
  },
] as const;

export const USE_CASES = [
  {
    sector: "Oficina técnica municipal",
    location: "España",
    icon: "Map",
    problem:
      "Una oficina técnica municipal recibe constantemente solicitudes de informes urbanísticos por parcela (compraventas, licencias, notarías) y dedica horas a cada uno: catastro, plano de zonificación y normativa aplicable.",
    solution:
      "El Redactor de Informes Urbanísticos cruza los datos catastrales con el planeamiento vigente y genera el borrador del informe, con plano y normativa citada, listo para revisión.",
    result:
      "El equipo técnico reduce el tiempo por informe, mantiene el mismo criterio en todos los casos y dedica más horas a los expedientes que sí requieren análisis a fondo.",
    metric: "Menos horas por informe urbanístico",
  },
  {
    sector: "Ayuntamiento rural",
    location: "España",
    icon: "MessageCircle",
    problem:
      "Un ayuntamiento pequeño recibe muchas llamadas y visitas repetitivas sobre trámites, horarios y requisitos, con una plantilla reducida para atenderlas.",
    solution:
      "El Asistente de Atención al Ciudadano responde 24/7 desde la web o WhatsApp del ayuntamiento y solo deriva a una persona cuando el caso lo requiere.",
    result:
      "El ciudadano recibe respuesta inmediata a cualquier hora y el personal libera tiempo de las consultas más repetitivas.",
    metric: "Menos llamadas y colas repetitivas",
  },
  {
    sector: "Ingeniería técnica",
    location: "Oviedo, Asturias",
    icon: "Building2",
    problem:
      "Una ingeniería ambiental con varios expedientes activos dedica horas cada semana a revisar el BOPA, localizar cambios relevantes y trasladarlos al equipo adecuado.",
    solution:
      "Con BOPA Inteligente, ese seguimiento se automatiza y el equipo recibe una salida filtrada, priorizada y accionable sin revisar boletines a mano.",
    result:
      "La ingeniería gana tiempo de trabajo técnico, reduce revisiones repetitivas y llega antes a lo que requiere acción.",
    metric: "Estimación: +6 h/semana",
  },
  {
    sector: "Concejalía de participación",
    location: "España",
    icon: "Radar",
    problem:
      "Un ayuntamiento solo conoce la opinión de la ciudadanía por quejas puntuales y no tiene datos objetivos para priorizar mejoras en los servicios municipales.",
    solution:
      "El Radar de Satisfacción Municipal lanza encuestas por chat de voz y de texto para medir la satisfacción y las necesidades de la ciudadanía con cada servicio.",
    result:
      "El equipo de gobierno cuenta con datos reales para justificar mejoras y detecta problemas antes de que escalen.",
    metric: "Datos de satisfacción, no solo quejas",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    icon: "Lock",
    title: "Trazabilidad y protección de datos por diseño",
    description:
      "Cada proceso queda registrado y es auditable. Trabajamos con cifrado, control de acceso y cumplimiento RGPD desde el primer día, tanto en administración pública como en empresa privada.",
  },
  {
    icon: "Landmark",
    title: "Especialización en administración pública y empresa técnica",
    description:
      "Conocemos el BOPA, la operativa municipal y los problemas administrativos de ingenierías, asesorías y equipos técnicos. No adaptamos plantillas genéricas: construimos desde el conocimiento real del sector.",
  },
  {
    icon: "Target",
    title: "Resultados medibles",
    description:
      "Cada automatización se define con métricas claras: tiempo ahorrado, tareas reducidas y mejoras reales en la operativa.",
  },
  {
    icon: "Cpu",
    title: "Tecnología con criterio",
    description:
      "Usamos IA donde aporta valor real, no para impresionar. Sin soluciones genéricas ni capas innecesarias.",
  },
  {
    icon: "Handshake",
    title: "Acompañamiento cercano",
    description:
      "Análisis, implantación y ajuste. Contigo en cada paso. Empresa local con respuesta ágil.",
  },
] as const;

export const LEGAL_LINKS = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/politica-de-privacidad" },
  { label: "Cookies", href: "/politica-de-cookies" },
] as const;
