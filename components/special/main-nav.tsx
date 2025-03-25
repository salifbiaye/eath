"use client"

import * as React from "react"
import { Link } from "@/src/i18n/navigation";
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/special/icons"
import { useTranslations } from 'next-intl';

const logo = '/logo.png'

export function MainNav() {
  const t = useTranslations('mainNav');
  const pathname = usePathname()

  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="mr-6 flex items-center gap-1 justify-center">
        <img src={logo} alt={t('logo.alt')} className="w-8 h-10 rounded-full"/>
        <span className={cn("font-bold sm:inline-block",
          pathname?.endsWith("/") ? "text-primary" : "text-foreground"
        )}>
          {siteConfig.name}
        </span>
      </Link>
      <nav className="hidden lg:flex lg:items-center lg:gap-6 text-sm">
        <Link
          href="/a-propos"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.endsWith("/a-propos") ? "text-primary" : "text-foreground/60"
          )}
        >
          {t('links.about.label')}
        </Link>
        <Link
          href="/fonctionnement"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.endsWith("/fonctionnement") ? "text-primary" : "text-foreground/60"
          )}
        >
          {t('links.features.label')}
        </Link>
        <Link
          href="/equipe"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.endsWith("/equipe") ? "text-primary" : "text-foreground/60"
          )}
        >
          {t('links.team.label')}
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.endsWith("/contact") ? "text-primary" : "text-foreground/60"
          )}
        >
          {t('links.contact.label')}
        </Link>
      </nav>
    </div>
  )
}
