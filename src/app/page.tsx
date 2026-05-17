import Image from "next/image";

export const dynamic = "force-static";

// Espace insécable U+00A0 (figé) — avant flèche → et avant "?"
const NBSP = String.fromCharCode(0xa0);

export default function HomePage() {
  return (
    <>
      {/* HEADER — logo gauche + 2 liens discrets droite (pattern 2026 candidat-first) */}
      <header className="w-full bg-paper border-b border-[rgba(38,42,48,0.08)]">
        <div className="max-w-[1080px] mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <a href="/" aria-label="Click'n Pop — accueil">
            <Image
              src="/assets/logo-clicknpop-officiel.png"
              alt="Click'n Pop"
              width={32}
              height={32}
              className="rounded-md"
              priority
            />
          </a>
          <nav className="flex items-center gap-x-6 text-[13px] text-[#5F5E5A] font-normal">
            <a
              href="https://entreprise.clicknpop.fr"
              className="hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded"
            >
              {`Vous recrutez${NBSP}?`}
            </a>
            <a
              href="https://cfa.clicknpop.fr"
              className="hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded"
            >
              CFA / OF / CCI
            </a>
          </nav>
        </div>
      </header>

      {/* HERO CANDIDAT — tagline + manifeste + CTA */}
      <main className="flex-1 bg-paper flex items-center justify-center px-8 py-16 sm:py-20">
        <div className="w-full max-w-[580px] text-center">
          <h1 className="animate-pop-reveal font-serif text-[36px] sm:text-[44px] text-ink font-normal leading-[1.25]">
            Le recrutement
            <br />
            qui fait pop.
          </h1>

          <p className="mt-5 mb-8 text-[16px] text-carbone leading-[1.7]">
            On ne matche pas des CV.
            <br />
            On cherche les conditions pour que ça tienne.
          </p>

          {/* CTA primaire Carbone */}
          <a
            href="https://candidat.clicknpop.fr/auth/sign-up"
            className="inline-block bg-[#262A30] text-paper px-7 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#1A1D1B] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2 focus-visible:ring-offset-paper w-full sm:w-auto"
          >
            {`Créer mon profil${NBSP}→`}
          </a>

          {/* Lien secondaire sous le CTA */}
          <p className="mt-4 text-[13px] text-sauge">
            {`Déjà inscrit·e${NBSP}? `}
            <a
              href="https://candidat.clicknpop.fr/auth/sign-in"
              className="underline underline-offset-[3px] hover:text-sauge-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded"
            >
              On se retrouve.
            </a>
          </p>
        </div>
      </main>

      {/* FOOTER minimal — rappel switcher + RGPD */}
      <footer className="bg-[rgba(107,132,103,0.04)] border-t border-[rgba(38,42,48,0.08)] py-6 px-8 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] text-[#888780]">
          <a href="https://entreprise.clicknpop.fr" className="hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded">
            Vous recrutez
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://cfa.clicknpop.fr" className="hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded">
            CFA / OF / CCI
          </a>
          <span aria-hidden="true">·</span>
          <a href="#" className="hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded">
            RGPD
          </a>
          <span aria-hidden="true">·</span>
          <a href="#" className="hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded">
            Mentions légales
          </a>
        </nav>
      </footer>
    </>
  );
}
