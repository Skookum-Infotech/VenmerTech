import type { ReactNode } from "react";

export type IconKey =
  | "chat"
  | "users"
  | "calendar"
  | "chart"
  | "target"
  | "gauge"
  | "bell"
  | "path"
  | "book"
  | "shield"
  | "sync"
  | "heart"
  | "trophy"
  | "star";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ICONS: Record<IconKey, ReactNode> = {
  chat: (
    <>
      <rect x="3" y="5" width="18" height="11" rx="3" {...strokeProps} />
      <path d="M8 16v3l4-3" {...strokeProps} />
    </>
  ),
  users: (
    <>
      <circle cx="8.5" cy="8" r="3.2" {...strokeProps} />
      <path d="M2.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...strokeProps} />
      <circle cx="17" cy="8.5" r="2.4" {...strokeProps} />
      <path d="M14.7 20c.3-2.6 2-4.6 4.5-5" {...strokeProps} />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" {...strokeProps} />
      <path d="M3 10h18" {...strokeProps} />
      <path d="M8 3v4" {...strokeProps} />
      <path d="M16 3v4" {...strokeProps} />
    </>
  ),
  chart: (
    <>
      <path d="M4 21V13" {...strokeProps} />
      <path d="M10 21V7" {...strokeProps} />
      <path d="M16 21v-9" {...strokeProps} />
      <path d="M3 21h18" {...strokeProps} />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" {...strokeProps} />
      <circle cx="12" cy="12" r="4.5" {...strokeProps} />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 15a8 8 0 1 1 16 0" {...strokeProps} />
      <path d="M12 15l4-5" {...strokeProps} />
      <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 13 6 9z" {...strokeProps} />
      <path d="M10 18a2 2 0 0 0 4 0" {...strokeProps} />
    </>
  ),
  path: (
    <>
      <path d="M4 19c3-1 3-6 6-7s3.5-5 3.5-8" {...strokeProps} />
      <circle cx="4" cy="19" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="4" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  book: (
    <>
      <path d="M12 6c-1.8-1.3-4-2-6.5-2S3 4.5 3 4.5V18s2-1.5 4.5-1.5S12 18 12 18" {...strokeProps} />
      <path d="M12 6c1.8-1.3 4-2 6.5-2S21 4.5 21 4.5V18s-2-1.5-4.5-1.5S12 18 12 18" {...strokeProps} />
      <path d="M12 6v12" {...strokeProps} />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" {...strokeProps} />
      <path d="M9 12l2 2 4-4" {...strokeProps} />
    </>
  ),
  sync: (
    <>
      <path d="M4 12a8 8 0 0 1 14-5.3L20 8" {...strokeProps} />
      <path d="M20 4v4h-4" {...strokeProps} />
      <path d="M20 12a8 8 0 0 1-14 5.3L4 16" {...strokeProps} />
      <path d="M4 20v-4h4" {...strokeProps} />
    </>
  ),
  heart: (
    <path
      d="M12 20s-7-4.4-9.5-9C.8 7.3 2.3 4 5.5 4c2 0 3.3 1.2 4 2.3.7-1.1 2-2.3 4-2.3 3.2 0 4.7 3.3 3 7-2.5 4.6-9.5 9-9.5 9z"
      {...strokeProps}
    />
  ),
  trophy: (
    <>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4z" {...strokeProps} />
      <path d="M8 5H5a2 2 0 0 0 2 3.5" {...strokeProps} />
      <path d="M16 5h3a2 2 0 0 1-2 3.5" {...strokeProps} />
      <path d="M10 12v3" {...strokeProps} />
      <path d="M14 12v3" {...strokeProps} />
      <path d="M7 20h10" {...strokeProps} />
      <path d="M9 20c0-2 1-2.5 3-2.5s3 .5 3 2.5" {...strokeProps} />
    </>
  ),
  star: (
    <path
      d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2L3 9.5l6.4-.6L12 3z"
      {...strokeProps}
    />
  ),
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}
