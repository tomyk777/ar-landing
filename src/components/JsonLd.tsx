export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "AR Estudio Contable & Asoc.",
    description:
      "Asesoramiento contable, impositivo, laboral y societario para personas, emprendedores y empresas en toda Argentina.",
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
        jobTitle: "Contadora Pública",
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
    ],
    sameAs: [
      "https://instagram.com/ar_estudiocontable",
      "https://www.tiktok.com/@arcontable",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
