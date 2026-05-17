import type { Metadata } from "next";
import { fraunces, ibmPlexSans, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Click'n Pop — Le recrutement qui fait pop.",
  description:
    "Click'n Pop est une plateforme de recrutement éthique pour l'alternance et l'intérim. Le recrutement qui tient dans le temps.",
  metadataBase: new URL("https://clicknpop.fr"),
  openGraph: {
    title: "Click'n Pop",
    description: "Le recrutement qui fait pop.",
    url: "https://clicknpop.fr",
    siteName: "Click'n Pop",
    locale: "fr_FR",
    type: "website",
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
