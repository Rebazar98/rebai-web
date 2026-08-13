import { ImageResponse } from "@vercel/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";

const siteDomain = new URL(SITE.url).hostname.replace(/^www\./, "");
const logoUrl = new URL(SITE.logoSrc, SITE.url).toString();

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #0F172A 0%, #13233F 45%, #1B2A4A 100%)",
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage:
              "linear-gradient(rgba(148, 163, 184, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.35,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(37, 99, 235, 0.18)",
            filter: "blur(24px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(59, 130, 246, 0.14)",
            filter: "blur(28px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <img
                src={logoUrl}
                alt={SITE.name}
                width={240}
                height={88}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(96, 165, 250, 0.35)",
                background: "rgba(15, 23, 42, 0.55)",
                color: "#93C5FD",
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "999px",
                  background: "#2563EB",
                }}
              />
              Trazabilidad inteligente
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "900px",
            }}
          >
            <div
              style={{
                fontSize: "70px",
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#F8FAFC",
              }}
            >
              IA y automatización para ayuntamientos
            </div>

            <div
              style={{
                fontSize: "28px",
                lineHeight: 1.35,
                color: "#CBD5E1",
                maxWidth: "880px",
              }}
            >
              Planes urbanísticos, atención al ciudadano, BOPA Inteligente y
              satisfacción ciudadana con IA para entidades locales y empresas
              de toda España.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              {["Urbanismo", "Atención Ciudadana", "BOPA Inteligente", "Satisfacción Vecinal"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px 20px",
                      borderRadius: "999px",
                      background: "rgba(37, 99, 235, 0.16)",
                      border: "1px solid rgba(96, 165, 250, 0.30)",
                      color: "#DBEAFE",
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                color: "#94A3B8",
                fontSize: "20px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              {siteDomain}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
