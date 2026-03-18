// =====================================================
// REBAI — FUENTE ÚNICA DE DATOS DEL SITIO
// Asturias-focused B2B automation company
// =====================================================

export const SITE = {
  name: "RebAI",
  tagline: "Automatización con IA para el sector técnico en Asturias",
  description:
    "Automatizamos la burocracia que frena a tu empresa en Asturias. Agentes de IA, análisis del BOPA y automatización de procesos para ingenierías, consultoras y cooperativas del Principado.",
  email: "hola@rebai.es",
  phone: "",
  location: "Asturias, España",
  url: "https://rebai.es",
  linkedin: "https://linkedin.com/company/rebai",
};

// =====================================================
// NAVEGACIÓN
// =====================================================

export const NAV_LINKS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

// =====================================================
// SERVICIOS
// =====================================================

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  benefit: string;
  features: string[];
  targetClients: string[];
  howItWorks: { step: number; title: string; description: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "bopa",
    name: "BOPA con IA",
    shortName: "BOPA con IA",
    tagline: "Monitorización inteligente del Boletín Oficial del Principado de Asturias",
    description:
      "Descarga, clasifica y analiza automáticamente el BOPA. Tu equipo recibe alertas personalizadas con los cambios normativos relevantes para sus proyectos, sin revisar manualmente cientos de páginas.",
    icon: "FileText",
    benefit: "Hasta 8h semanales recuperadas por ingeniero",
    features: [
      "Descarga automática diaria del BOPA",
      "Clasificación por categorías y sectores",
      "Asistente conversacional para consultar normativa",
      "Alertas personalizadas por proyecto o expediente",
      "Histórico de disposiciones indexado y buscable",
      "Resumen ejecutivo semanal automático",
    ],
    targetClients: [
      "Ingenierías técnicas (ambiental, civil, agraria, minería)",
      "Consultoras de medio ambiente",
      "Despachos jurídicos con clientes asturianos",
      "Administraciones públicas del Principado",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Configuramos tus alertas",
        description:
          "Definimos juntos qué categorías del BOPA son relevantes para tu empresa: medio ambiente, urbanismo, subvenciones, empleo, contratación pública...",
      },
      {
        step: 2,
        title: "El sistema monitoriza por ti",
        description:
          "Cada día, el agente descarga el BOPA, extrae las disposiciones relevantes y las clasifica automáticamente según tus criterios.",
      },
      {
        step: 3,
        title: "Recibes lo que necesitas",
        description:
          "Alertas en tiempo real cuando aparece algo crítico. Resumen semanal cada lunes. Asistente disponible para consultar cualquier disposición.",
      },
    ],
  },
  {
    slug: "agentes-ia",
    name: "Agentes de IA a medida",
    shortName: "Agentes IA",
    tagline: "Automatización personalizada para los procesos de tu empresa",
    description:
      "Diseñamos y construimos agentes de inteligencia artificial adaptados exactamente a los procesos repetitivos de tu empresa. Desde la generación de informes hasta la gestión de expedientes.",
    icon: "Bot",
    benefit: "Procesos automatizados en semanas, no meses",
    features: [
      "Análisis previo de procesos y oportunidades",
      "Agentes conversacionales para equipos internos",
      "Automatización de generación de documentos",
      "Integración con herramientas existentes (email, Drive, ERP)",
      "Panel de control y monitorización",
      "Soporte y mantenimiento continuo",
    ],
    targetClients: [
      "Ingenierías con procesos documentales repetitivos",
      "Consultoras con generación masiva de informes",
      "Cooperativas con gestión administrativa compleja",
      "Empresas técnicas en fase de crecimiento",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Analizamos tu proceso",
        description:
          "Nos reunimos para entender exactamente qué procesos consumen más tiempo a tu equipo y dónde hay mayor valor en automatizar.",
      },
      {
        step: 2,
        title: "Construimos el agente",
        description:
          "Desarrollamos el agente adaptado a tu flujo de trabajo, con las integraciones necesarias y validación contigo en cada paso.",
      },
      {
        step: 3,
        title: "Tu equipo opera sin fricción",
        description:
          "Formación, puesta en producción y soporte continuo. Tu equipo adopta la herramienta y recupera tiempo para el trabajo de valor.",
      },
    ],
  },
  {
    slug: "subvenciones",
    name: "Agente de Subvenciones",
    shortName: "Subvenciones",
    tagline: "Detecta y gestiona subvenciones del IDEPA y MAPA automáticamente",
    description:
      "El agente monitoriza convocatorias del IDEPA, MAPA, CDTI y otras fuentes, detecta las aplicables a tu empresa y prepara automáticamente la documentación inicial.",
    icon: "Banknote",
    benefit: "No pierdas ninguna convocatoria aplicable",
    features: [
      "Monitorización de IDEPA, MAPA, CDTI, Red.es y más",
      "Detección automática de convocatorias aplicables",
      "Alertas antes del cierre de plazo",
      "Borrador de memoria técnica asistido",
      "Seguimiento del estado de solicitudes",
      "Informe mensual de oportunidades de financiación",
    ],
    targetClients: [
      "Cooperativas agrícolas y ganaderas de Asturias",
      "Ingenierías con proyectos financiables",
      "PYMEs industriales y tecnológicas asturianas",
      "Empresas en proceso de modernización o digitalización",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Perfil de tu empresa",
        description:
          "Definimos el perfil de tu empresa: sector, CNAE, tamaño, tipo de inversiones previstas. Esto permite filtrar convocatorias con alta precisión.",
      },
      {
        step: 2,
        title: "El agente busca por ti",
        description:
          "Monitorización continua de todas las fuentes relevantes. Cuando aparece una convocatoria aplicable, te avisamos con tiempo suficiente para preparar la solicitud.",
      },
      {
        step: 3,
        title: "Documentación lista para revisar",
        description:
          "El agente prepara el borrador de la memoria y los anexos con la información de tu empresa. Tu equipo solo revisa y firma.",
      },
    ],
  },
  {
    slug: "cumplimiento",
    name: "Agente de Cumplimiento",
    shortName: "Cumplimiento",
    tagline: "Monitorización automática de cambios normativos que afectan a tu empresa",
    description:
      "Mantente al día de los cambios en la normativa técnica y ambiental que afectan a tus proyectos. El agente monitoriza BOE, BOPA y reglamentos sectoriales y te alerta cuando necesitas actuar.",
    icon: "ShieldCheck",
    benefit: "Cero sorpresas regulatorias en tus proyectos",
    features: [
      "Monitorización de BOE, BOPA y diario oficial europeo",
      "Seguimiento de reglamentos técnicos sectoriales",
      "Alertas clasificadas por urgencia y ámbito",
      "Resumen de impacto sobre proyectos activos",
      "Histórico de cambios normativos por sector",
      "Integración con tu sistema de gestión de proyectos",
    ],
    targetClients: [
      "Ingenierías ambientales y de medio ambiente",
      "Empresas con actividades reguladas (IPPC, residuos, aguas)",
      "Constructoras y promotoras en Asturias",
      "Industria agroalimentaria sujeta a normativa sanitaria",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Mapeamos tu exposición regulatoria",
        description:
          "Identificamos qué normativas afectan a tu actividad y cuáles son los cambios más críticos a seguir: ambiental, técnica, laboral, sanitaria...",
      },
      {
        step: 2,
        title: "Monitorización continua",
        description:
          "El agente rastrea diariamente todas las fuentes oficiales. Cuando detecta un cambio relevante, lo clasifica por urgencia e impacto potencial.",
      },
      {
        step: 3,
        title: "Actúas a tiempo",
        description:
          "Recibes la alerta con tiempo suficiente para adaptar tus procesos o proyectos. Sin sorpresas en auditorías ni sanciones por desconocimiento.",
      },
    ],
  },
];

// =====================================================
// PAIN POINTS (sección homepage)
// =====================================================

export const PAIN_POINTS = [
  {
    icon: "Clock",
    title: "Horas perdidas en trámites",
    description:
      "Tu equipo dedica días a revisar el BOPA, rellenar formularios y buscar normativa actualizada. Tiempo que debería ir a proyectos de valor.",
  },
  {
    icon: "AlertTriangle",
    title: "Normativa que cambia sin avisar",
    description:
      "El BOPA, los requisitos del IDEPA y los reglamentos técnicos asturianos cambian constantemente. Perderse un cambio puede costar caro.",
  },
  {
    icon: "TrendingDown",
    title: "Procesos manuales que no escalan",
    description:
      "Lo que funciona con un proyecto colapsa con diez. La carga burocrática crece más rápido que el equipo.",
  },
];

// =====================================================
// PASOS DE SOLUCIÓN (sección homepage)
// =====================================================

export const SOLUTION_STEPS = [
  {
    number: "01",
    title: "Analizamos tu proceso",
    description: "Identificamos dónde la burocracia frena más a tu equipo.",
  },
  {
    number: "02",
    title: "Construimos la automatización",
    description: "Agentes de IA adaptados exactamente a tu flujo de trabajo.",
  },
  {
    number: "03",
    title: "Tu equipo opera sin carga",
    description: "Más tiempo para proyectos. Cero sorpresas regulatorias.",
  },
];

// =====================================================
// CASOS DE USO (sección homepage + página completa)
// =====================================================

export const USE_CASES = [
  {
    sector: "Ingeniería Técnica",
    location: "Oviedo, Asturias",
    icon: "Building2",
    problem:
      "Una ingeniería ambiental con 12 proyectos activos dedicaba un día a la semana a revisar el BOPA y clasificar manualmente las disposiciones relevantes para cada expediente.",
    solution:
      "Implementamos el agente BOPA de RebAI configurado para las categorías de medio ambiente, residuos y contratación pública.",
    result:
      "Ahora reciben un resumen automático cada lunes con las alertas clasificadas por proyecto. El equipo recuperó más de 6 horas semanales.",
    metric: "+6h/semana recuperadas",
  },
  {
    sector: "Cooperativa Ganadera",
    location: "Navia, Asturias",
    icon: "Tractor",
    problem:
      "Una cooperativa láctea de Navia perdía 3 semanas al año gestionando solicitudes de subvenciones del IDEPA y el MAPA. El proceso era completamente manual y se perdían convocatorias por desconocimiento.",
    solution:
      "El agente de subvenciones monitoriza las convocatorias del IDEPA, MAPA y otras fuentes, y alerta cuando hay una aplicable con tiempo suficiente para preparar la solicitud.",
    result:
      "Detectaron 4 convocatorias nuevas el primer año que antes no habían solicitado. Tres aprobadas.",
    metric: "3 subvenciones nuevas aprobadas",
  },
  {
    sector: "Consultora Técnica",
    location: "Gijón, Asturias",
    icon: "BarChart3",
    problem:
      "Una consultora de Gijón con 8 técnicos generaba informes de cumplimiento normativo manualmente para sus clientes industriales. Cada informe tardaba entre 4 y 6 horas.",
    solution:
      "Desarrollamos un agente de IA a medida que genera el borrador del informe automáticamente a partir de los datos de cada instalación.",
    result: "El tiempo de generación pasó de 5 horas a 45 minutos. Capacidad para atender más clientes sin ampliar equipo.",
    metric: "De 5h a 45min por informe",
  },
];

// =====================================================
// DIFERENCIADORES (sección "Por qué RebAI")
// =====================================================

export const DIFFERENTIATORS = [
  {
    icon: "MapPin",
    title: "Especialización asturiana",
    description:
      "No somos una agencia genérica de Madrid. Conocemos el BOPA, el IDEPA, las cooperativas y el tejido empresarial del Principado.",
  },
  {
    icon: "Target",
    title: "Resultados medibles",
    description:
      "Cada automatización se define con métricas claras: tiempo ahorrado, documentos procesados, convocatorias detectadas.",
  },
  {
    icon: "Cpu",
    title: "Tecnología con criterio",
    description:
      "Usamos IA donde aporta valor real, no para impresionar. Sin soluciones genéricas — todo adaptado a tu sector.",
  },
  {
    icon: "Handshake",
    title: "Equipo cercano",
    description:
      "Proyecto piloto, iteración, puesta en producción. Contigo en cada paso. Empresa local con respuesta ágil.",
  },
];

// =====================================================
// LEGAL LINKS
// =====================================================

export const LEGAL_LINKS = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/politica-de-privacidad" },
  { label: "Cookies", href: "/politica-de-cookies" },
] as const;
