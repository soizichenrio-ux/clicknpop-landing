import Image from "next/image";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-[680px] flex flex-col items-center">
        {/* Logo officiel — variant 'official' = PNG carré unifié */}
        <div className="animate-pop-reveal">
          <Image
            src="/assets/logo-clicknpop-officiel.png"
            alt="Click'n Pop — Le recrutement qui fait pop."
            width={140}
            height={140}
            priority
            className="rounded-2xl shadow-sm"
          />
        </div>

        {/* Kicker mono — confiance + bêta */}
        <p className="animate-fade-in-1 mt-10 text-center font-mono text-[11px] uppercase tracking-[var(--tracking-editorial)] text-sauge">
          BÊTA PRIVÉE · MAI 2026
        </p>

        {/* Tagline gravée du logo (intouchable) */}
        <h1 className="animate-fade-in-2 mt-5 text-center font-serif text-ink text-4xl sm:text-5xl leading-[1.05] tracking-tight">
          Le recrutement{" "}
          <span className="italic text-sauge-dark">qui fait pop.</span>
        </h1>

        {/* Sous-titre éditorial italique */}
        <p className="animate-fade-in-3 mt-6 text-center font-serif italic text-sauge-dark text-lg sm:text-xl leading-snug max-w-[520px]">
          On choisit son espace. On y entre par la bonne porte.
        </p>

        {/* 3 CTAs persona — grid responsive */}
        <section
          aria-label="Choisir mon espace Click'n Pop"
          className="animate-fade-in-4 mt-16 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* Candidat — actif */}
          <a
            href="https://candidat.clicknpop.fr/auth/sign-up"
            className="group flex flex-col justify-between rounded-2xl border border-trait bg-white p-6 sm:p-7 min-h-[180px] hover:border-sauge hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(38,42,48,0.06),0_12px_24px_rgba(38,42,48,0.04)] transition-all duration-200 ease-out"
          >
            <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-editorial)] text-sauge">
              CANDIDAT
            </p>
            <p className="font-serif text-ink text-xl leading-snug mt-3">
              Vous cherchez un emploi qui tient.
            </p>
            <span className="mt-6 inline-flex items-center self-start rounded-xl bg-[#262A30] text-paper px-5 py-2.5 text-sm font-medium tracking-wide group-hover:bg-[#1A1D1B] transition-colors duration-150">
              Entrer →
            </span>
          </a>

          {/* Entreprise — désactivé */}
          <div
            aria-disabled="true"
            className="flex flex-col justify-between rounded-2xl border border-dashed border-trait bg-paper-warm/40 p-6 sm:p-7 min-h-[180px] opacity-80"
          >
            <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-editorial)] text-sauge-light">
              ENTREPRISE
            </p>
            <p className="font-serif text-ink-soft text-xl leading-snug mt-3">
              Vous recrutez avec exigence.
            </p>
            <span className="mt-6 inline-flex items-center self-start rounded-xl border border-trait bg-paper text-ink-soft px-5 py-2.5 text-sm font-medium tracking-wide italic">
              Bientôt disponible
            </span>
          </div>

          {/* CFA — désactivé */}
          <div
            aria-disabled="true"
            className="flex flex-col justify-between rounded-2xl border border-dashed border-trait bg-paper-warm/40 p-6 sm:p-7 min-h-[180px] opacity-80"
          >
            <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-editorial)] text-sauge-light">
              CFA
            </p>
            <p className="font-serif text-ink-soft text-xl leading-snug mt-3">
              Vous accompagnez l&apos;alternance.
            </p>
            <span className="mt-6 inline-flex items-center self-start rounded-xl border border-trait bg-paper text-ink-soft px-5 py-2.5 text-sm font-medium tracking-wide italic">
              Bientôt disponible
            </span>
          </div>
        </section>
      </div>

      {/* Footer minimal mention légale */}
      <footer className="animate-fade-in-5 mt-20 sm:mt-24 w-full max-w-[680px] flex flex-col items-center text-center">
        <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-editorial)] text-sauge mb-3">
          MENTION LÉGALE
        </p>
        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed max-w-[440px]">
          Click&apos;n Pop est une marque de{" "}
          <span className="text-ink">Tentakool SASU</span>. RGPD. Conditions d&apos;utilisation
          à venir.
        </p>
      </footer>
    </main>
  );
}
