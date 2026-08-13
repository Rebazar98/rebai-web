import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calidad y transparencia · BOPA Inteligente — Trazev",
  description:
    "Métricas públicas de calidad de BOPA Inteligente: puntuación de fidelidad, revisiones manuales y valoraciones de clientes actualizadas mensualmente.",
};

const API = process.env.NEXT_PUBLIC_API_URL ?? "https://api.trazev.com";

interface CalidadData {
  periodo: string;
  publicaciones_procesadas: number;
  fidelidad: {
    avg_score: number;
    pct_sobre_70: number;
    total_evaluadas: number;
  };
  revision_manual: {
    pct_correctas: number;
    total_revisadas: number;
  };
  feedback_clientes: {
    pct_positivas: number;
    total_valoraciones: number;
  };
}

async function getCalidad(): Promise<CalidadData | null> {
  try {
    const res = await fetch(`${API}/calidad/publica`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function Stat({
  value,
  label,
  sub,
  tone = "default",
}: {
  value: string;
  label: string;
  sub?: string;
  tone?: "default" | "green" | "blue";
}) {
  const ring =
    tone === "green"
      ? "border-emerald-200 bg-emerald-50"
      : tone === "blue"
        ? "border-sky-200 bg-sky-50"
        : "border-slate-200 bg-white";
  const valueColor =
    tone === "green"
      ? "text-emerald-700"
      : tone === "blue"
        ? "text-sky-700"
        : "text-slate-900";

  return (
    <div className={`rounded-2xl border p-6 ${ring}`}>
      <p className={`text-4xl font-semibold ${valueColor}`}>{value}</p>
      <p className="mt-2 font-medium text-slate-800">{label}</p>
      {sub && <p className="mt-1 text-sm text-slate-500">{sub}</p>}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-slate-700">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </div>
  );
}

export default async function CalidadPage() {
  const data = await getCalidad();

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          Transparencia
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">
          Calidad de BOPA Inteligente
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          Monitorizamos continuamente la precisión de nuestro sistema de IA con tres capas
          independientes: evaluación automática, revisión humana y valoraciones de clientes.
          Estos datos se actualizan cada hora.
        </p>
      </div>

      {!data ? (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center text-slate-400">
          Métricas no disponibles en este momento. Inténtalo más tarde.
        </div>
      ) : (
        <div className="space-y-10">
          <Section title="Volumen (últimos 30 días)">
            <Stat
              value={data.publicaciones_procesadas.toLocaleString("es-ES")}
              label="Publicaciones procesadas"
              sub="Anuncios del BOPA analizados por IA"
            />
            <Stat
              value={data.fidelidad.total_evaluadas.toLocaleString("es-ES")}
              label="Evaluaciones de fidelidad"
              sub="Puntuaciones automáticas generadas"
            />
            <Stat
              value={data.revision_manual.total_revisadas.toLocaleString("es-ES")}
              label="Revisiones humanas"
              sub="Clasificaciones revisadas manualmente"
            />
          </Section>

          <Section title="Precisión automática (Fidelity Score)">
            <Stat
              value={`${data.fidelidad.avg_score}/100`}
              label="Puntuación media de fidelidad"
              sub="Relevancia de la clasificación IA vs. texto original"
              tone="blue"
            />
            <Stat
              value={`${data.fidelidad.pct_sobre_70}%`}
              label="Clasificaciones de calidad alta"
              sub="Con Fidelity Score ≥ 70"
              tone="blue"
            />
          </Section>

          <Section title="Revisión humana acumulada">
            <Stat
              value={`${data.revision_manual.pct_correctas}%`}
              label="Clasificaciones correctas"
              sub="Verificadas por nuestro equipo de calidad"
              tone="green"
            />
          </Section>

          <Section title="Valoraciones de clientes (últimos 30 días)">
            <Stat
              value={`${data.feedback_clientes.pct_positivas}%`}
              label="Valoraciones positivas"
              sub={`Sobre ${data.feedback_clientes.total_valoraciones} valoraciones recibidas`}
              tone="green"
            />
          </Section>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-500">
            <p className="font-medium text-slate-700">Metodología</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside">
              <li>
                <strong>Fidelity Score:</strong> GPT-4o-mini evalúa la coherencia entre el texto
                original del BOPA y la clasificación generada (0-100).
              </li>
              <li>
                <strong>Revisión humana:</strong> El 10% de las clasificaciones relevantes pasan
                por revisión manual aleatoria de nuestro equipo.
              </li>
              <li>
                <strong>Feedback de clientes:</strong> Los suscriptores valoran cada alerta
                recibida con 👍 o 👎 desde el propio correo.
              </li>
            </ul>
            <p className="mt-4">
              Datos del período: últimos 30 días · Actualización automática cada hora.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
