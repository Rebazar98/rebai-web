import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B2A4A 0%, #2563EB 100%)",
          borderRadius: "12px",
          color: "#FFFFFF",
          fontSize: 32,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        T
      </div>
    ),
    size
  );
}
