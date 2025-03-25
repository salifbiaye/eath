import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const defaultLocale = 'fr';

export default function middleware(req: Request) {
  const { pathname } = new URL(req.url);

  // Vérifie si l'URL commence par une locale supportée
  const localeMatch = pathname.match(/^\/(fr|en)(\/|$)/);

  if (!localeMatch) {
    // Redirige vers la version avec la locale par défaut
    return Response.redirect(new URL(`/${defaultLocale}${pathname}`, req.url));
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
