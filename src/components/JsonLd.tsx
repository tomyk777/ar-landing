export function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Atienden clientes de todas las provincias?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Tenemos oficina en CABA y matrículas en casi toda la Argentina, trabajamos de forma remota y presencial con clientes de todo el país.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta el asesoramiento mensual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del volumen: no es lo mismo un monotributista sin empleados que una SRL con veinte personas en nómina y 7 jurisdicciones de Ingresos Brutos. Después de una primera charla te pasamos una propuesta cerrada, sin costos que aparezcan después. La primera consulta es sin cargo.",
        },
      },
      {
        "@type": "Question",
        name: "Soy monotributista, ¿me conviene contratar un contador?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si facturás cerca del tope de tu categoría, tenés clientes del exterior, sufrís retenciones o pensás incorporar personal, sí. Los dos errores más caros del monotributo son quedarse en una categoría que ya no corresponde y no advertir, a tiempo, la exclusión.",
        },
      },
      {
        "@type": "Question",
        name: "¿Trabajan con emprendedores que recién arrancan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, y es el mejor momento para consultar: elegir bien el encuadre y la herramienta a utilizar al inicio evita la mayor parte de los problemas que después cuestan meses ordenar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo hago para empezar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos escribís por WhatsApp o correo electrónico. Coordinamos una primera reunión —presencial u online— para entender tu situación, y de ahí sale la propuesta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el Régimen de Economía del Conocimiento y quién puede acceder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un régimen de beneficios fiscales para empresas de software, servicios profesionales exportables, biotecnología, nanotecnología y otras actividades del conocimiento. Exige acreditar requisitos de capacitación, I+D o exportaciones, y presentar informes con firma de Contador Público. Verificamos si calificás antes de iniciar el trámite.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué son los CCG (Convenios de Corresponsabilidad Gremial)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un régimen de beneficios fiscales para empresas primarias estacionales y otras actividades zonales. Exige acreditar requisitos obligatorios. Verificamos si calificás antes de iniciar el trámite.",
        },
      },
      {
        "@type": "Question",
        name: "¿AR Estudio Contable ayuda a las empresas a certificarse como Empresa B?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Acompañamos a empresas que buscan avanzar hacia la certificación como Empresa B, ayudándolas a ordenar, relevar y documentar sus procesos, prácticas de gestión e impacto económico, social y ambiental. La certificación B Corp es otorgada por B Lab, entidad independiente que evalúa el cumplimiento de sus estándares. AR | Estudio Contable brinda el acompañamiento profesional, aunque no otorga ni garantiza la certificación.",
        },
      },
    ],
  };

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
      "https://x.com/AR_Contable",
      "https://www.linkedin.com/in/ar-estudio-contable-online/",
      "https://www.tiktok.com/@arcontable.ar?is_from_webapp=1&sender_device=pc",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
