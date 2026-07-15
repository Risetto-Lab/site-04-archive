import type { SVGProps } from "react";

// Arc text only renders when showText is set (hero-size usage) so the
// SVG id isn't duplicated across the dozen small instances on the page.
export default function BrassStamp({
  showText = false,
  ...props
}: SVGProps<SVGSVGElement> & { showText?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="3" />
      <circle cx="60" cy="60" r="47" stroke="currentColor" strokeWidth="1.5" />
      {showText && (
        <>
          <path id="stamp-arc" d="M 60 22 a 38 38 0 1 1 -0.01 0" fill="none" stroke="none" />
          <text
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="2.5"
            fill="currentColor"
            fontFamily="var(--font-plex-sans), sans-serif"
          >
            <textPath href="#stamp-arc" startOffset="0">
              PROJECTPACK UK · TEMPLATE LIBRARY ·
            </textPath>
          </text>
        </>
      )}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M48 44h16l8 8v24H48z" />
        <path d="M64 44v8h8" />
        <path d="M53 62h14M53 68h14" />
      </g>
      <path d="M42 84h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
