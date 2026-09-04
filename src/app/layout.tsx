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
  metadataBase: new URL("https://arcontable.ar"),
  title: "AR Estudio Contable & Asoc. | Contable, Impositivo y Laboral",
  description:
    "Más de 15 años de trayectoria en asesoramiento contable, impositivo y laboral. Atención en CABA, Buenos Aires y Chaco, y a distancia en toda Argentina.",
 keywords: [
    "estudio contable CABA",
    "estudio contable Chaco",
    "contador CABA",
    "contador Buenos Aires",
    "contador Chaco",
    "asesoramiento contable Buenos Aires",
    "alta monotributo",
    "liquidación de monotributo",
    "liquidación de sueldos",
    "contador para PyMEs",
    "contador para monotributistas",
    "constitución de sociedades SAS SRL",
    "asesoramiento impositivo Argentina",
    "contador online Argentina",
    "estudio contable multijurisdicción",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },  
     },
    openGraph: {
    title: "AR Estudio Contable & Asoc.",
    description:
      "Asesoramiento contable, impositivo, laboral y societario para personas, emprendedores y empresas en toda Argentina.",
    url: "https://arcontable.ar",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/Logo-OGImage.png",
        width: 1200,
        height: 630,
        alt: "AR Estudio Contable & Asoc.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Estudio Contable & Asoc. — Asesoramiento Contable, Impositivo y Societario",
    description:
      "Más de 15 años de trayectoria en asesoramiento contable, impositivo, laboral y societario. Atención en CABA, Buenos Aires y Chaco, y a distancia en toda Argentina.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const siteUrl = "https://arcontable.ar";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "AR Estudio Contable & Asoc.",
  description:
    "Estudio contable con más de 15 años de trayectoria, especializado en asesoramiento contable, impositivo, laboral y societario.",
  url: siteUrl,
  email: "aronlinecontable@gmail.com",
  telephone: "+54-11-2456-0613",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tucumán 3132, oficina 3",
    addressLocality: "CABA",
    addressCountry: "AR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ciudad Autónoma de Buenos Aires" },
    { "@type": "AdministrativeArea", name: "Buenos Aires" },
    { "@type": "AdministrativeArea", name: "Chaco" },
  ],
  employee: [
    {
      "@type": "Person",
      name: "Yamina Evelin Alfonso",
      jobTitle: "Contadora Pública — Especialista Tributaria",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Matrícula profesional",
          recognizedBy: { "@type": "Organization", name: "CPCE Buenos Aires" },
          identifier: "N° 492272 T°188 F°173",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Matrícula profesional",
          recognizedBy: { "@type": "Organization", name: "CPCE CABA" },
          identifier: "T°420 F°011",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Matrícula profesional",
          recognizedBy: { "@type": "Organization", name: "CPCE Chaco" },
          identifier: "N° 2981 T°XV F°XV",
        },
      ],
    },
    { "@type": "Person", name: "Mariano Rivera", jobTitle: "Auditoría de Estados Contables" },
    { "@type": "Person", name: "Andrea Galliotti", jobTitle: "Liquidación de Sueldos" },
    { "@type": "Person", name: "Andrea Paredes", jobTitle: "Conciliación y Registraciones Contables" },
  ],
  sameAs: [
    "https://instagram.com/ar_estudiocontable",
    "https://x.com/AR_Contable",
    "https://www.linkedin.com/company/ar-estudiocontable",
    "https://www.tiktok.com/@arcontable",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
