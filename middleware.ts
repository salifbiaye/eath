import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

const defaultLocale = 'en';

export default function middleware(req) {
  const { pathname } = new URL(req.url);

  // Vérifie si l'URL commence par une locale supportée
  const localeMatch = pathname.match(/^\/(fr|en|ar|ja|es|de)(\/|$)/);

  if (!localeMatch) {
    // Redirige vers la version avec la locale par défaut
    return Response.redirect(new URL(`/${defaultLocale}${pathname}`, req.url));
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: [
    // Appliquer le middleware uniquement aux chemins qui ne sont pas des fichiers statiques, API ou vidéos
    '/((?!api|_next|_vercel|trpc|favicon.ico|.*\\.(?:jpg|jpeg|JPG|png|gif|svg|ico|webp|mp4|webm|ogg|mov)).*)',
  ],
};
