import React from "react";

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Impositivo — calendar with checkmark */
export function IconCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <polyline points="9 16 11 18 15 14" />
    </svg>
  );
}

/* Contable — document with lines */
export function IconDocument(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}

/* Laboral — people/team */
export function IconPeople(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M21 21v-1.5a3 3 0 0 0-2.5-2.96" />
    </svg>
  );
}

/* Societario — building/institution */
export function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="9" y1="22" x2="9" y2="17" />
      <line x1="15" y1="22" x2="15" y2="17" />
      <rect x="8" y="7" width="3" height="3" rx="0.5" />
      <rect x="13" y="7" width="3" height="3" rx="0.5" />
      <rect x="8" y="12" width="3" height="3" rx="0.5" />
      <rect x="13" y="12" width="3" height="3" rx="0.5" />
    </svg>
  );
}

/* Empresas — growth chart */
export function IconGrowth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <line x1="3" y1="21" x2="3" y2="3" />
      <line x1="3" y1="21" x2="21" y2="21" />
      <polyline points="7 15 11 10 14 13 20 6" />
      <polyline points="16 6 20 6 20 10" />
    </svg>
  );
}

/* Shield/check — prevención */
export function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

/* Search/analyze — magnifying glass */
export function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="16" y1="16" x2="21" y2="21" />
    </svg>
  );
}

/* Optimize — sliders */
export function IconSliders(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <line x1="4" y1="6" x2="4" y2="20" />
      <circle cx="4" cy="6" r="2" />
      <line x1="12" y1="4" x2="12" y2="14" />
      <circle cx="12" cy="16" r="2" />
      <line x1="12" y1="18" x2="12" y2="20" />
      <line x1="20" y1="4" x2="20" y2="8" />
      <circle cx="20" cy="10" r="2" />
      <line x1="20" y1="12" x2="20" y2="20" />
    </svg>
  );
}

/* Decide — crossroads/signpost */
export function IconSignpost(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M5 7h10l3 3-3 3H5V7z" />
      <path d="M19 15H9l-3 3 3 3h10V15z" />
    </svg>
  );
}

/* Target (Misión) */
export function IconTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/* Eye (Visión) */
export function IconEye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/* WhatsApp */
export function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Menu (hamburger) */
export function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

/* Close (X) */
export function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* Mail */
export function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polyline points="22 7 12 14 2 7" />
    </svg>
  );
}

/* Clock */
export function IconClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* Map pin */
export function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

/* Arrow right */
export function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* Instagram */
export function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* LinkedIn */
export function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* TikTok */
export function IconTikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

/* X (Twitter) */
export function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
