import AnimatedSection from "@/components/shared/animated-section";
import SectionLabel from "@/components/shared/section-label";

const FAQS = [
  {
    question: "¿Esto encaja con mi ayuntamiento?",
    answer:
      "Encaja especialmente si tu equipo gestiona urbanismo, atención al ciudadano, normativa o seguimiento de satisfacción vecinal con recursos limitados. Si no está claro, la primera conversación sirve justo para validar eso.",
  },
  {
    question: "¿Cuánto tardáis?",
    answer:
      "La primera respuesta llega en menos de 48 horas. A partir de ahí, el tiempo depende del caso: a veces conviene empezar con una demo y otras con una propuesta concreta a medida.",
  },
  {
    question: "¿Hace falta equipo técnico en el ayuntamiento?",
    answer:
      "No. Parte de nuestro trabajo es precisamente traducir el problema, simplificar la implantación y acompañar al equipo para que la solución se pueda usar de verdad.",
  },
  {
    question: "¿Por dónde empezamos si tenemos varias necesidades?",
    answer:
      "Si el problema está claro, podemos ir directos a una solución o a una demo. Si todavía hay dudas sobre prioridades entre los servicios, la primera conversación sirve para decidir con criterio y sin precipitarse.",
  },
] as const;

export default function FAQSection() {
  return (
    <section className="border-t border-[#E2E8F0] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-14 max-w-3xl">
            <SectionLabel className="mb-6">Dudas frecuentes</SectionLabel>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Respuestas claras antes de que tengas que escribirnos.
            </h2>
            <p className="text-lg leading-relaxed text-[#64748B]">
              Estas son las objeciones más normales cuando un ayuntamiento o
              una empresa se plantea automatizar mejor un proceso o empezar por
              un servicio como BOPA Inteligente.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FAQS.map((faq, index) => (
            <AnimatedSection key={faq.question} delay={index * 80}>
              <div className="h-full rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-[#64748B]">{faq.answer}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
