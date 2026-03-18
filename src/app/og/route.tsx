import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#1B2A4A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#2563EB",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              R
            </span>
          </div>
          <span
            style={{
              color: "white",
              fontSize: "48px",
              fontWeight: "700",
              letterSpacing: "-1px",
            }}
          >
            Reb<span style={{ color: "#2563EB" }}>AI</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            color: "white",
            fontSize: "52px",
            fontWeight: "700",
            textAlign: "center",
            lineHeight: "1.15",
            margin: "0 0 32px 0",
            maxWidth: "900px",
          }}
        >
          Automatizamos la burocracia que frena a tu empresa en Asturias
        </h1>

        {/* Subtitle pills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {["Agentes de IA", "BOPA Asturias", "Subvenciones IDEPA"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(37, 99, 235, 0.25)",
                  border: "1px solid rgba(37, 99, 235, 0.5)",
                  borderRadius: "999px",
                  padding: "8px 20px",
                  color: "#93C5FD",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Domain badge */}
        <span
          style={{
            color: "#64748B",
            fontSize: "20px",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          rebai.es
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
