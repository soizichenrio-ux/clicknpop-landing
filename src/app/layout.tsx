import type { Metadata } from "next";
import { fraunces, ibmPlexSans, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

const DESCRIPTION =
  "Click'n Pop ne matche pas des CV. On cherche les conditions pour que ça tienne.";

export const metadata: Metadata = {
  title: "Click'n Pop — Le recrutement qui fait pop",
  description: DESCRIPTION,
  metadataBase: new URL("https://clicknpop.fr"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "Click'n Pop — Le recrutement qui fait pop",
    description: DESCRIPTION,
    url: "https://clicknpop.fr",
    siteName: "Click'n Pop",
    locale: "fr_FR",
    type: "website",
    // TODO post-29 mai : og:image dédiée (1200x630)
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
