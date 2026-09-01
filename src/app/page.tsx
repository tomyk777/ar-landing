"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  IconWhatsApp,
  IconMenu,
  IconClose,
  IconMail,
  IconClock,
  IconPin,
  IconCalendar,
  IconDocument,
  IconPeople,
  IconBuilding,
  IconGrowth,
  IconSearch,
  IconShield,
  IconSliders,
  IconSignpost,
  IconArrowRight,
  IconInstagram,
  IconLinkedIn,
  IconTikTok,
  IconX,
  IconTarget,
  IconEye,
} from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";

const WHATSAPP_URL =
  "https://wa.me/541124560613?text=Hola%2C%20quiero%20consultar%20sobre%20los%20servicios%20de%20AR%20Estudio%20Contable";

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cómo trabajamos", href: "#metodologia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

/* ─── Header ─── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-blush shadow-none"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3 shrink-0" aria-label="Inicio">
          <Image src="/logo.png" alt="AR Estudio Contable" width={80} height={68} className="h-14 sm:h-16 w-auto object-contain" priority />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-slate hover:text-wine transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button py-2.5 px-6 text-sm"
          >
            <IconWhatsApp className="w-4 h-4" />
            Hablá con AR
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink hover:text-wine transition-colors"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-paper ${
          open ? "max-h-[500px] border-b border-blush opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-8 pt-2">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-ink/80 hover:text-wine transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-blush">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button w-full justify-center py-3.5 text-sm"
            >
              <IconWhatsApp className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  const ref = useReveal();

  return (
    <section id="inicio" ref={ref} className="relative min-h-[100svh] flex flex-col justify-center bg-gradient-to-b from-blush/40 via-rose/5 to-blush/20 pt-32 pb-24 overflow-hidden">
      {/* Ambient gradient orbs (Rose and Coral) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coral/10 rounded-full blur-[120px] opacity-70 translate-x-1/4 -translate-y-1/4 animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-rose/10 rounded-full blur-[120px] opacity-70 -translate-x-1/4 translate-y-1/4 animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      

      <div className="mx-auto max-w-7xl px-5 w-full relative z-10 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="reveal reveal-delay-1 max-w-5xl font-[family-name:var(--font-sora)] text-5xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-ink tracking-tight">
          No dejes que los <span className="gradient-text">números</span><br className="hidden sm:block"/> decidan por vos.
        </h1>
        
        {/* Subtitle */}
        <p className="reveal reveal-delay-2 mt-8 text-lg sm:text-xl text-slate leading-relaxed max-w-2xl">
          Ordenamos tus números para impulsar tu crecimiento.
Asesoramos a personas, emprendedores y empresas en materia contable, impositiva, laboral y societaria, con atención personalizada en Argentina y de manera remota para toda Latinoamérica.
        </p>

        {/* CTA */}
        <div className="reveal reveal-delay-3 mt-12 flex flex-col sm:flex-row items-center gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button text-lg px-8 py-4"
          >
            <IconWhatsApp className="w-6 h-6" />
            Hablá con AR
          </a>
          <a href="#servicios" className="text-base font-semibold text-ink hover:text-wine transition-colors px-6 py-3 flex items-center gap-2 group">
            Conocé nuestros servicios 
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats Section */}
        <div className="reveal reveal-delay-4 mt-20 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {[
              { value: "+15", label: "Años de trayectoria", sub: "Desde 2010" },
              { value: "4", label: "Profesionales", sub: "Equipo interdisciplinario" },
              { value: "3", label: "Jurisdicciones", sub: "CABA · Bs. As. · Chaco" },
            ].map((stat, i) => (
              <div key={i} className="relative group p-8 text-center transition-all duration-500">
                <div className="absolute inset-0 bg-paper/40 rounded-[2rem] scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm" />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="gradient-text font-[family-name:var(--font-sora)] text-6xl sm:text-7xl lg:text-[4.5rem] font-bold block mb-3 group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500 ease-out drop-shadow-sm">
                    {stat.value}
                  </span>
                  <span className="text-lg font-bold text-ink block">{stat.label}</span>
                  <span className="text-sm font-medium text-slate mt-1.5 block">{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Nosotros ─── */
function Nosotros() {
  const ref = useReveal();

  const team = [
    {
      name: "Yamina Alfonso",
      role: "CEO · Contadora Pública (Mgtr.)",
      credentials: "CPCE Bs. As. · CPCE CABA · CPCE Chaco",
      desc: "Especializada en materia tributaria, a cargo de la planificación fiscal y la relación con los organismos de recaudación.",
    },
    {
      name: "Mariano Rivera",
      role: "Auditoría de Estados Contables",
      credentials: "",
      desc: "Responsable de la auditoría de estados contables y del dictamen sobre la situación financiera real de cada cliente.",
    },
    {
      name: "Andrea Galliotti",
      role: "Liquidación de Sueldos",
      credentials: "",
      desc: "A cargo de la gestión de nóminas y el cumplimiento de la legislación laboral, desde haberes hasta cargas sociales.",
    },
    {
      name: "Andrea Paredes",
      role: "Conciliación y Registraciones Contables",
      credentials: "",
      desc: "Responsable de mantener al día los registros contables, asegurando que los libros reflejen fielmente la operación.",
    },
  ];

  const values = ["Confianza", "Claridad", "Cercanía", "Prevención", "Innovación"];

  return (
    <section id="nosotros" ref={ref} className="py-24 sm:py-32 bg-blush/20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 relative z-10">
        
        {/* Intro Block */}
        <div className="mb-20 sm:mb-24 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="reveal font-[family-name:var(--font-sora)] text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.1] mb-8">
            Nacimos para hacer <span className="gradient-text">algo diferente.</span>
          </h2>
          <div className="reveal reveal-delay-1 max-w-3xl mx-auto lg:mx-0">
            <p className="text-xl sm:text-2xl text-ink font-medium leading-[1.5] mb-6">
              Sabemos que detrás de un impuesto hay una persona, detrás de una empresa hay un sueño y detrás de un número hay una decisión.
            </p>
            <p className="text-base sm:text-lg text-slate leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              En AR | Estudio Contable transformamos la información contable en claridad, estrategia y tranquilidad, para que puedas cumplir, prevenir, ordenar y crecer.
            </p>
          </div>
          
          <div className="reveal reveal-delay-2 inline-block">
            <div className="relative p-6 sm:p-8 bg-paper rounded-[2rem] border border-ink/5 shadow-sm overflow-hidden text-left max-w-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blush/60 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="relative z-10 flex gap-4 items-start">
                <span className="font-[family-name:var(--font-sora)] text-5xl sm:text-6xl font-bold text-wine/20 leading-none -mt-2 sm:-mt-3 select-none">
                  “
                </span>
                <p className="text-lg sm:text-xl text-ink font-medium italic leading-relaxed">
                  Hacer contabilidad es registrar el pasado — hacer asesoramiento es ayudar a construir el futuro.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 sm:mb-20 max-w-5xl">
          <div className="reveal group cursor-pointer bg-paper border border-ink/5 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:border-wine/10 hover:shadow-md active:border-wine/10 active:shadow-md focus:border-wine/10 focus:shadow-md transition-all duration-300 relative overflow-hidden" tabIndex={0}>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-active:scale-110 group-focus:scale-110" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blush rounded-[1rem] sm:rounded-[1.25rem] flex items-center justify-center mb-5 sm:mb-6 text-wine group-hover:scale-105 group-active:scale-105 group-focus:scale-105 transition-transform duration-300">
                <IconTarget className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-ink mb-2 sm:mb-3">Misión</h3>
              <p className="text-base text-slate leading-relaxed">
                Convertir la complejidad en decisiones claras. Brindamos asesoramiento profesional y estratégico para que puedas cumplir, prevenir y crecer con seguridad.
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-1 group cursor-pointer bg-paper border border-ink/5 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:border-wine/10 hover:shadow-md active:border-wine/10 active:shadow-md focus:border-wine/10 focus:shadow-md transition-all duration-300 relative overflow-hidden" tabIndex={0}>
             <div className="absolute top-0 right-0 w-64 h-64 bg-rose/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-active:scale-110 group-focus:scale-110" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blush rounded-[1rem] sm:rounded-[1.25rem] flex items-center justify-center mb-5 sm:mb-6 text-wine group-hover:scale-105 group-active:scale-105 group-focus:scale-105 transition-transform duration-300">
                <IconEye className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-ink mb-2 sm:mb-3">Visión</h3>
              <p className="text-base text-slate leading-relaxed">
                Ser el estudio contable elegido para ir más allá de los números, construyendo relaciones a largo plazo basadas en confianza, innovación y resultados.
              </p>
            </div>
          </div>
        </div>

        {/* Values Ribbon */}
        <div className="reveal reveal-delay-2 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 p-6 sm:p-8 lg:px-12 lg:py-8 rounded-[2rem] sm:rounded-[3rem] bg-paper border border-ink/5 shadow-sm">
          <h3 className="font-[family-name:var(--font-sora)] text-sm font-bold text-slate uppercase tracking-widest shrink-0 text-center lg:text-left">
            Nuestros Valores
          </h3>
          <div className="w-full h-px lg:w-px lg:h-8 bg-ink/10" />
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full">
            {values.map((v) => (
              <span key={v} className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-blush/40 text-wine text-sm font-semibold border border-wine/5 select-none transition-colors duration-300 hover:bg-blush hover:border-wine/10 active:bg-blush active:border-wine/10 focus:bg-blush focus:border-wine/10 cursor-pointer" tabIndex={0}>
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 sm:mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4 mb-4 sm:mb-6">
            <h3 className="reveal font-[family-name:var(--font-sora)] text-2xl sm:text-3xl font-bold text-ink text-center lg:text-left">
              Nuestro equipo
            </h3>
          </div>
          
          {team.map((member, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 4) + 1} bg-paper border border-ink/5 p-6 sm:p-8 rounded-[2rem] transition-all duration-300 hover:border-wine/10 hover:shadow-md hover:-translate-y-1 active:border-wine/10 active:shadow-md active:-translate-y-1 focus:border-wine/10 focus:shadow-md focus:-translate-y-1 cursor-pointer flex flex-col h-full`} tabIndex={0}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blush/80 flex items-center justify-center text-wine font-[family-name:var(--font-sora)] font-bold text-lg sm:text-xl mb-5 sm:mb-6 border border-wine/10 shrink-0 select-none">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h4 className="font-[family-name:var(--font-sora)] text-lg font-bold text-ink">
                {member.name}
              </h4>
              <p className="text-sm font-semibold text-rose mt-1">{member.role}</p>
              {member.credentials && (
                <p className="text-xs font-medium text-slate mt-2 border-t border-ink/5 pt-2">{member.credentials}</p>
              )}
              <p className="text-sm text-slate mt-3 sm:mt-4 leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── Cómo trabajamos ─── */
function Metodologia() {
  const ref = useReveal();

  const steps = [
    { num: "01", title: "Analizar", desc: "Entender antes de decidir.", icon: IconSearch },
    { num: "02", title: "Prevenir", desc: "Detectar riesgos antes de que se conviertan en problemas.", icon: IconShield },
    { num: "03", title: "Optimizar", desc: "Buscar mejores alternativas dentro del marco legal.", icon: IconSliders },
    { num: "04", title: "Decidir", desc: "Convertir números en información útil.", icon: IconSignpost },
    { num: "05", title: "Crecer", desc: "Acompañar el crecimiento de cada proyecto.", icon: IconGrowth },
  ];

  return (
    <section id="metodologia" ref={ref} className="py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="reveal font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Una metodología enfocada en<br/>
            <span className="gradient-text">resultados.</span>
          </h2>
          <p className="reveal reveal-delay-1 mt-6 text-lg text-slate">
            Una metodología clara para que siempre sepas dónde estás parado y hacia dónde vas.
          </p>
        </div>

        <div className="mt-24 max-w-4xl mx-auto flex flex-col gap-16 relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-wine/15 to-transparent -translate-x-1/2 z-0" />
          
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <div key={step.num} className={`reveal flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 ${isEven ? "" : "md:flex-row-reverse"}`}>
                
                {/* Text Content */}
                <div className={`flex-1 text-center ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-slate leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Center Node */}
                <div className="shrink-0 relative group cursor-pointer" tabIndex={0}>
                  <div className="absolute inset-0 bg-blush rounded-full scale-0 group-hover:scale-125 group-active:scale-125 group-focus:scale-125 transition-transform duration-500 ease-out" />
                  <div className="w-20 h-20 bg-paper rounded-full border-2 border-blush shadow-sm flex items-center justify-center relative z-10 group-hover:border-rose/30 group-active:border-rose/30 group-focus:border-rose/30 transition-colors duration-300">
                    <StepIcon className="w-8 h-8 text-wine" />
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-wine text-paper flex items-center justify-center text-xs font-bold font-[family-name:var(--font-sora)] shadow-sm">
                      {step.num}
                    </div>
                  </div>
                </div>

                {/* Empty Space for layout balance */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Servicios ─── */
function Servicios() {
  const ref = useReveal();
  const [expanded, setExpanded] = useState<number | null>(0);

  const services = [
    {
      title: "Impositivo",
      icon: IconCalendar,
      summary: "Obligaciones fiscales al día, sin sorpresas.",
      detail:
        "Nos ocupamos de que tus obligaciones fiscales estén al día, sin sorpresas: alta y liquidación de Monotributo, Ganancias, IVA e Ingresos Brutos, Convenio Multilateral y regímenes de información. Presentamos declaraciones juradas, armamos planes de pago y regularización de deudas, y te representamos ante fiscalizaciones y requerimientos de ARCA. También trabajamos la planificación tributaria, para que la carga impositiva no te tome por sorpresa a fin de año.",
    },
    {
      title: "Contable",
      icon: IconDocument,
      summary: "Contabilidad completa y análisis económico-financiero.",
      detail:
        "Llevamos la contabilidad completa de tu empresa o actividad profesional: registraciones, estados contables, cierres de ejercicio y conciliaciones bancarias. Emitimos certificaciones e informes profesionales, y hacemos el análisis económico-financiero que necesitás para entender cómo está realmente tu negocio, no solo para cumplir con la obligación formal.",
    },
    {
      title: "Laboral",
      icon: IconPeople,
      summary: "Sueldos, cargas sociales y legislación laboral.",
      detail:
        "Gestionamos la liquidación de sueldos, SAC, vacaciones, altas y bajas de personal, cargas sociales, libro de sueldos y recibos. Además de la parte operativa mensual, te asesoramos en regularizaciones y en cualquier duda laboral que surja con tu equipo, para que la gestión de personal no se convierta en un dolor de cabeza aparte del negocio.",
    },
    {
      title: "Societario",
      icon: IconBuilding,
      summary: "Constitución, reformas e inscripciones societarias.",
      detail:
        "Te acompañamos en la constitución de sociedades (SAS, SRL, SA), reformas de estatuto, cambios de autoridades, actas e inscripciones ante los organismos correspondientes, así como en procesos de disolución y liquidación. Trabajamos en jurisdicción CABA, Buenos Aires y Chaco, con experiencia reciente en altas y bajas societarias en las tres.",
    },
    {
      title: "Empresas",
      icon: IconGrowth,
      summary: "Planificación financiera y control integral.",
      detail:
        "Para empresas que ya están en marcha, ofrecemos planificación financiera, flujo de fondos, análisis de rentabilidad y costos, armado de presupuestos y control impositivo integral. El objetivo es que tengas información clara y a tiempo para tomar decisiones, no solo números que llegan después de que ya pasó todo.",
    },
  ];

  return (
    <section id="servicios" ref={ref} className="py-32 bg-blush/20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="reveal font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Servicios <span className="gradient-text">integrales</span>
            </h2>
            <p className="reveal reveal-delay-1 mt-6 text-lg text-slate">
              Asesoramiento especializado para cada etapa de tu actividad, desde que arranca una idea hasta que se consolida una empresa.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-2 cta-button shrink-0"
          >
            Consultar por tu caso
          </a>
        </div>

        <div className="space-y-5">
          {services.map((svc, i) => {
            const SvcIcon = svc.icon;
            const isOpen = expanded === i;
            return (
              <div key={i} className={`reveal reveal-delay-${(i % 5) + 1}`}>
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className={`w-full text-left p-6 sm:p-8 rounded-[2rem] transition-all duration-500 ${
                    isOpen ? "bg-rose/5 border border-rose/10 shadow-[inset_0_2px_10px_rgba(110,36,56,0.04)]" : "bg-paper border border-ink/5 shadow-sm hover:border-wine/10 hover:shadow-md"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-5 sm:gap-8">
                    <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl transition-colors duration-300 ${isOpen ? "bg-rose text-paper" : "bg-blush text-wine"}`}>
                      <SvcIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-[family-name:var(--font-sora)] text-xl sm:text-2xl font-bold text-ink">
                        {svc.title}
                      </h3>
                      <p className={`text-sm sm:text-base mt-2 transition-colors duration-300 ${isOpen ? "text-ink" : "text-slate"}`}>
                        {svc.summary}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-rose/10 text-rose" : "bg-slate/5 text-slate"}`}>
                      <IconArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  </div>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100 mt-6 sm:mt-8" : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="pt-6 border-t border-ink/5 text-base sm:text-lg text-slate leading-relaxed">
                      {svc.detail}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Clientes ─── */
function Clientes() {
  const ref = useReveal();

  const clients = [
    { name: "Fernando Ojeda", rubro: "Peluquería", city: "Chaco", logo: "/LogosClientes/Logo-FernandoOjedaEstilista.png" },
    { name: "Mayra Coop", rubro: "Veterinaria", city: "Corrientes", logo: "/LogosClientes/Logo-VeterinariaCorrientes.png" },
    { name: "Advance Bio", rubro: "Productos Alimenticios", city: "CABA", logo: "/LogosClientes/Logo-AdvanceBio.png" },
    { name: "Dra. Mariel Fernández", rubro: "Oftalmóloga", city: "Pilar" },
    { name: "Est. Martínez Cristal SRL", rubro: "Panadería", city: "Resistencia", logo: "/LogosClientes/Logo-Panaderia.png" },
    { name: "ARDIGITAL SAS", rubro: "Servicios de Software", city: "Barranqueras" },
    { name: "Total Alimentos Arg. SAS", rubro: "Alimentos para Mascotas", city: "PBA", logo: "/LogosClientes/Logo-TotalAlimentos.png" },
    { name: "Coop. Lautaro Comidas Ltda.", rubro: "Viandas", city: "Chaco" },
    { name: "Teresa Porfirio", rubro: "Instituto de Danzas", city: "Puerto Vilelas" },
    { name: "Dra. Cristina Zarratea", rubro: "Terapista", city: "Chaco" },
    { name: "Avícola La Selección", rubro: "Productos Alimenticios", city: "Resistencia", logo: "/LogosClientes/Logo-AvicolaLaSeleccion.png" },
  ];

  const row1 = [...clients.slice(0, 6), ...clients.slice(0, 6)];
  const row2 = [...clients.slice(6, 11), ...clients.slice(6, 11)];

  return (
    <section id="clientes" ref={ref} className="py-32 bg-paper overflow-hidden border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-5 flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div className="max-w-2xl">
          <h2 className="reveal font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Confían en <span className="gradient-text">AR</span>
          </h2>
          <p className="reveal reveal-delay-1 mt-6 text-xl text-slate leading-relaxed">
            Acompañamos a profesionales, pymes y empresas de todo el país en su crecimiento, garantizando orden y tranquilidad.
          </p>
        </div>
      </div>

      <div className="reveal reveal-delay-2 relative flex flex-col gap-6 overflow-x-hidden">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />

        {/* First Marquee Row */}
        <div className="flex gap-6 w-max px-6 animate-[scroll-left_40s_linear_infinite]">
          {row1.map((client, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 w-80 bg-paper border border-ink/5 rounded-[2rem] p-6 flex flex-col gap-5 hover:border-wine/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blush/50 flex items-center justify-center text-wine text-xl font-bold font-[family-name:var(--font-sora)] shrink-0 border border-wine/5 overflow-hidden">
                  {client.logo ? (
                    <div className="w-full h-full bg-white flex items-center justify-center p-1.5">
                      <div className="relative w-full h-full">
                        <Image src={client.logo} alt={`Logo de ${client.name}`} fill className="object-contain" />
                      </div>
                    </div>
                  ) : (
                    client.name.charAt(0)
                  )}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-sora)] text-lg font-bold text-ink line-clamp-1">
                    {client.name}
                  </p>
                  <p className="text-sm font-medium text-slate">{client.city}</p>
                </div>
              </div>
              <div className="inline-block self-start px-4 py-1.5 bg-ink/5 rounded-xl text-xs font-semibold text-ink tracking-wide">
                {client.rubro}
              </div>
            </div>
          ))}
        </div>

        {/* Second Marquee Row (Reverse) */}
        <div className="flex gap-6 w-max px-6 animate-[scroll-left_45s_linear_infinite_reverse]">
          {row2.map((client, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 w-80 bg-paper border border-ink/5 rounded-[2rem] p-6 flex flex-col gap-5 hover:border-wine/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blush/50 flex items-center justify-center text-wine text-xl font-bold font-[family-name:var(--font-sora)] shrink-0 border border-wine/5 overflow-hidden">
                  {client.logo ? (
                    <div className="w-full h-full bg-white flex items-center justify-center p-1.5">
                      <div className="relative w-full h-full">
                        <Image src={client.logo} alt={`Logo de ${client.name}`} fill className="object-contain" />
                      </div>
                    </div>
                  ) : (
                    client.name.charAt(0)
                  )}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-sora)] text-lg font-bold text-ink line-clamp-1">
                    {client.name}
                  </p>
                  <p className="text-sm font-medium text-slate">{client.city}</p>
                </div>
              </div>
              <div className="inline-block self-start px-4 py-1.5 bg-ink/5 rounded-xl text-xs font-semibold text-ink tracking-wide">
                {client.rubro}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contacto ─── */
function Contacto() {
  const ref = useReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const waText = encodeURIComponent(
      `Hola, soy ${name} (${email}). ${message}`
    );
    window.open(
      `https://wa.me/541124560613?text=${waText}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    formRef.current?.reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contacto" ref={ref} className="py-32 bg-blush/20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          
          <div className="lg:col-span-2">
            <h2 className="reveal font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Empezá a <span className="gradient-text">ordenar</span><br/> tus números.
            </h2>
            <p className="reveal reveal-delay-1 mt-6 text-lg text-slate leading-relaxed">
              Dejanos tu consulta y nos contactaremos con vos a la brevedad para asesorarte.
            </p>

            <div className="reveal reveal-delay-2 mt-12 space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-paper shadow-sm border border-ink/5 flex items-center justify-center shrink-0">
                  <IconWhatsApp className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate uppercase tracking-wider mb-1">WhatsApp</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-ink hover:text-wine transition-colors">
                    +54 11 2456-0613
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-paper shadow-sm border border-ink/5 flex items-center justify-center shrink-0">
                  <IconMail className="w-6 h-6 text-rose" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:aronlinecontable@gmail.com" className="text-lg font-bold text-ink hover:text-wine transition-colors">
                    aronlinecontable@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-paper shadow-sm border border-ink/5 flex items-center justify-center shrink-0">
                  <IconPin className="w-6 h-6 text-rose" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate uppercase tracking-wider mb-1">Oficina & Horarios</p>
                  <p className="text-lg font-bold text-ink">
                    Tucumán 3132, oficina 3 — CABA
                  </p>
                  <p className="text-base text-slate mt-1">Lunes a viernes de 8 a 16 hs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal reveal-delay-3">
            <div className="bg-paper p-8 sm:p-12 rounded-[3rem] shadow-xl shadow-wine/5 border border-ink/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blush/50 rounded-full blur-[80px] -z-10" />
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-bold text-ink mb-2">Nombre</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-slate/5 border border-transparent shadow-inner text-ink placeholder:text-slate/50 hover:bg-slate/10 focus:bg-paper focus:border-rose/30 focus:shadow-md focus:ring-4 focus:ring-rose/10 transition-all duration-300 outline-none"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-bold text-ink mb-2">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-slate/5 border border-transparent shadow-inner text-ink placeholder:text-slate/50 hover:bg-slate/10 focus:bg-paper focus:border-rose/30 focus:shadow-md focus:ring-4 focus:ring-rose/10 transition-all duration-300 outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold text-ink mb-2">Mensaje</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl bg-slate/5 border border-transparent shadow-inner text-ink placeholder:text-slate/50 hover:bg-slate/10 focus:bg-paper focus:border-rose/30 focus:shadow-md focus:ring-4 focus:ring-rose/10 transition-all duration-300 outline-none resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button type="submit" className="w-full cta-button justify-center py-4 text-lg">
                  <IconWhatsApp className="w-6 h-6" />
                  Enviar consulta por WhatsApp
                </button>
                {submitted && (
                  <p className="text-center text-sm font-semibold text-green-600 bg-green-50 py-3 rounded-xl">
                    ¡Mensaje listo! Te redirigimos a WhatsApp para enviarlo.
                  </p>
                )}
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const socials = [
    { icon: IconInstagram, href: "https://instagram.com/ar_estudiocontable", label: "Instagram" },
    { icon: IconX, href: "https://x.com/AR_Contable", label: "X" },
    { icon: IconLinkedIn, href: "https://linkedin.com/company/AR_EstudioContable", label: "LinkedIn" },
    { icon: IconTikTok, href: "https://tiktok.com/@arcontable", label: "TikTok" },
  ];

  return (
    <footer className="bg-ink text-paper/80 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-2">
            <Image src="/logo.png" alt="AR Estudio Contable" width={80} height={68} className="h-16 w-auto brightness-0 invert opacity-90" />
            <p className="mt-8 text-xl font-[family-name:var(--font-sora)] font-bold text-paper">
              Tus números. Tus decisiones.<br/>Tu crecimiento.
            </p>
            <p className="mt-4 text-sm text-paper/70 max-w-sm leading-relaxed">
              Estudio Contable integral con más de 15 años de trayectoria. CABA, Buenos Aires y Chaco.
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-sora)] text-base font-bold text-paper mb-6">Navegación</p>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-medium text-paper/80 hover:text-paper transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-[family-name:var(--font-sora)] text-base font-bold text-paper mb-6">Redes & Matrículas</p>
            <div className="flex gap-4 mb-8">
              {socials.map((s) => {
                const SocialIcon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-full bg-paper/5 flex items-center justify-center text-paper/80 hover:bg-paper/20 hover:text-paper hover:scale-110 transition-all"
                  >
                    <SocialIcon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-xs text-paper/70 space-y-2 font-medium">
              <p>Yamina Alfonso — CPCE Bs. As. Mat. N° 492272</p>
              <p>CPCE CABA T°420 F°011</p>
              <p>CPCE Chaco N° 2981</p>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-paper/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-paper/70">
          <p>© {new Date().getFullYear()} AR | Estudio Contable & Asoc. Todos los derechos reservados.</p>
          <p>Diseñado para crecer.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Floating WhatsApp ─── */
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <IconWhatsApp className="w-7 h-7" />
    </a>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Metodologia />
        <Servicios />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
