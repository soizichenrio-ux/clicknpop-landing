import { NextResponse, type NextRequest } from "next/server";

/**
 * Middleware clicknpop-landing — redirections 301 vers candidat.clicknpop.fr
 *
 * CONTEXTE : la landing apex (clicknpop.fr) a été migrée du Worker
 * clicknpop-candidat le 17/05/2026. Les anciens liens entrants (emails
 * Supabase confirmation, liens sociaux, parcours sauvegardés) pointent
 * encore vers clicknpop.fr/auth/* etc. On redirige 301 (permanent) pour
 * préserver SEO et UX.
 *
 * Préservation : path + query string. Hash côté client uniquement (pas
 * accessible au serveur).
 */

const REDIRECT_PREFIXES = ["/auth", "/parcours", "/api"];
const CANDIDAT_HOST = "https://candidat.clicknpop.fr";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (REDIRECT_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    const target = `${CANDIDAT_HOST}${pathname}${search}`;
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Matcher large : on filtre en runtime via REDIRECT_PREFIXES pour éviter
  // les faux positifs sur /favicon.ico, /_next/static, etc.
  matcher: ["/((?!_next/|favicon.ico|robots.txt|sitemap.xml|assets/).*)"],
};
