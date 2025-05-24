import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import { NextRequest } from "next/server";

const defaultLocale = 'en';

// Routes à exclure de la redirection automatique
const excludedPaths = [
  '/eath.apk',
  '/robots.txt',
  '/sitemap.xml',
  // Ajoutez d'autres routes selon vos besoins
];

export default function middleware(req: NextRequest) {
  const { pathname } = new URL(req.url);
  
  // Vérifier si le chemin est dans la liste des exclusions
  if (excludedPaths.some(path => pathname === path || pathname.startsWith(path + '/'))) {
    return; // Laisser passer sans redirection
  }
  
  // Vérifie si l'URL commence par une locale supportée
  const localeMatch = pathname.match(/^\/(fr|en|ar|ja|es|de)(\/|$)/);
  
  if (!localeMatch) {
    // Redirige vers la version avec la locale par défaut
    return Response.redirect(new URL(`/${defaultLocale}${pathname}`, req.url));
  }
  
  // @ts-ignore
  return createMiddleware(routing)(req);
}

export const config = {
  matcher: [
    // Appliquer le middleware uniquement aux chemins qui ne sont pas des fichiers statiques, API ou vidéos
    '/((?!api|_next|_vercel|trpc|favicon.ico|.*\\.(?:jpg|jpeg|JPG|png|gif|svg|ico|webp|mp4|webm|ogg|mov)).*)',
  ],
};