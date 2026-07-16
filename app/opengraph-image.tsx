import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Preet Ghaghada — websites, ads and AI that answers every enquiry";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>
          Preet Ghaghada
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            lineHeight: 1.4,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          I build your website, run your ads, and my AI answers every enquiry.
        </div>
        <div style={{ marginTop: 48, fontSize: 26, color: "#71717a" }}>
          preetghaghada.com
        </div>
      </div>
    ),
    size
  );
}
