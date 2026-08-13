import { Clock3, Compass, MapPin, ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    title: "Diagnostico util",
    description: "Te decimos por donde empezar y que mejora tiene mas sentido primero.",
    icon: Compass,
  },
  {
    title: "Implantacion realista",
    description: "Automatizamos lo que compensa, sin rehacer toda tu operativa.",
    icon: ShieldCheck,
  },
  {
    title: "Cobertura nacional",
    description: "Trabajamos con ayuntamientos y empresas de toda Espana.",
    icon: MapPin,
  },
  {
    title: "Respuesta rapida",
    description: "Respondemos en menos de 48 horas.",
    icon: Clock3,
  },
] as const;

export default function TrustStrip() {
  return (
    <section className="border-y border-[#14233F] bg-[#0F172A] py-5">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-4"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon size={18} className="text-[#93C5FD]" />
                </div>
                <h2 className="mb-1 text-sm font-semibold text-white">{item.title}</h2>
                <p className="text-sm leading-relaxed text-white/65">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
