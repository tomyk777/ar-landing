import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AR Estudio Contable & Asoc. — Asesoramiento Contable, Impositivo y Societario",
  description:
    "Más de 15 años de trayectoria en asesoramiento contable, impositivo, laboral y societario. Atención en CABA, Buenos Aires y Chaco, y a distancia en toda Argentina.",
  openGraph: {
    title: "AR Estudio Contable & Asoc.",
    description:
      "Asesoramiento contable, impositivo, laboral y societario para personas, emprendedores y empresas en toda Argentina.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        {/*
          DIRECTION CONTRACT — seed d3e2c679
          THESIS: This surface is a warm branded receipt — structured fields,
          numbered grids, and branded headers — not the category's corporate
          grid-of-icons page. Every section is a receipt entry, not a slide.
          OWN-WORLD: Wine→coral gradient on key figures, blush and paper
          alternating grounds, 1px blush ledger lines, pill CTAs in brand-red,
          generous rounded corners (16px cards, 999px pills), outlined icons.
          STORY: The visitor arrives skeptical about accountants; the receipt
          structure proves AR is organized, credentialed, and warm; they tap
          WhatsApp to start a conversation.
          FIRST VIEWPORT: AR isotipo at monumental scale as the issuer stamp,
          left-aligned. The tagline "No dejes que los números decidan por vos"
          at 3.5rem weight-700, then the subtitle as body text. Three stat
          fields in receipt cells with gradient-treated numbers. One pill CTA
          "Hablá con AR" in brand-red, right of the stats.
          FORM: Recibo de haberes, position 4 of 7, seed d3e2c679.
          FINISH: unreviewed and undocumented is unfinished; this build ends
          with the finish review, the verdict, DESIGN.md, and every shipping
          raster carrying its provenance.
        */}
        {children}
      </body>
    </html>
  );
}
