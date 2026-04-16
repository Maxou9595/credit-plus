import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Crédit-Plus"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "#1b2123",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <img
        src={`${process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""}/credit-plus-og.png`}
        alt="Crédit-Plus Logo"
        width={600}
        height={600}
        style={{
          objectFit: "contain",
        }}
      />
    </div>,
    {
      ...size,
    },
  )
}
