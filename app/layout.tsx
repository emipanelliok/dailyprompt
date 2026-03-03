import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daily Prompt | IA, Vibe Coding & Agentes",
  description:
    "Micro-notas curadas sobre inteligencia artificial, vibe coding y agentes. Actualizaciones diarias sobre las últimas herramientas y tendencias en AI.",
  keywords: ["IA", "inteligencia artificial", "vibe coding", "agentes", "AI tools", "desarrollo"],
  authors: [{ name: "Emi" }],
  openGraph: {
    title: "Daily Prompt | IA, Vibe Coding & Agentes",
    description:
      "Micro-notas curadas sobre inteligencia artificial, vibe coding y agentes. Actualizaciones diarias sobre las últimas herramientas y tendencias en AI.",
    url: "https://dailyprompt.io",
    siteName: "Daily Prompt",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daily Prompt - IA, Vibe Coding & Agentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Prompt | IA, Vibe Coding & Agentes",
    description:
      "Micro-notas curadas sobre inteligencia artificial, vibe coding y agentes.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#06060e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${spaceMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
