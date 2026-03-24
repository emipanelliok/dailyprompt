import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dailyprompt.io | Short AI news. Big ideas.",
  description:
    "Micro-notas curadas sobre inteligencia artificial, vibe coding y agentes. Actualizaciones diarias sobre las últimas herramientas y tendencias en AI.",
  keywords: ["IA", "inteligencia artificial", "vibe coding", "agentes", "AI tools", "desarrollo"],
  authors: [{ name: "Emi" }],
  openGraph: {
    title: "dailyprompt.io | Short AI news. Big ideas.",
    description: "Micro-notas curadas sobre inteligencia artificial, vibe coding y agentes.",
    url: "https://dailyprompt.io",
    siteName: "dailyprompt.io",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "dailyprompt.io" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "dailyprompt.io | Short AI news. Big ideas.",
    description: "Micro-notas curadas sobre inteligencia artificial, vibe coding y agentes.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${instrumentSerif.variable} ${outfit.variable} ${ibmPlexMono.variable} font-body antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
