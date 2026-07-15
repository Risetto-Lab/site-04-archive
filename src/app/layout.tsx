import type { Metadata, Viewport } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ProjectPack UK — A library of compliance, made simple",
  description:
    "Editable CDM and property compliance templates for small UK contractors, refurbishers and landlords. Construction phase plans, risk assessments, landlord docs — plain English, built from public HSE guidance.",
  openGraph: {
    title: "ProjectPack UK — A library of compliance, made simple",
    description:
      "Editable CDM and property compliance templates for small UK contractors, refurbishers and landlords.",
    url: SITE_URL,
    siteName: "ProjectPack UK",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectPack UK — A library of compliance, made simple",
    description:
      "Editable CDM and property compliance templates for small UK contractors, refurbishers and landlords.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1F3A2E",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${plexSerif.variable} ${plexSans.variable} h-full antialiased`}>
      <body className="paper-grain min-h-full">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
