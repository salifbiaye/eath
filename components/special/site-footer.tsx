'use client';
import { Link } from "@/src/i18n/navigation";
import { Icons } from '@/components/special/icons';
import {faTwitter, faInstagram, faFacebook, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import * as React from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

export function SiteFooter() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const logo = '/logo.png';

  const links = [
    { link: '/a-propos', label: t('links.about.label'), color: 'text-pinkSmart' },
    { link: '/fonctionnement', label: t('links.functioning.label'), color: 'text-orangeSmart' },
    { link: '/equipe', label: t('links.team.label'), color: 'text-purpleSmart' },
    { link: '/contact', label: t('links.contact.label'), color: 'text-redSmart' },
  ];

  return (
    <footer className="flex border-t flex-col py-6 w-4xl md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
      <Link href="/" className="ml-6 flex items-center gap-1 justify-center">
        <img src={logo} alt="logo" className="w-8 h-10 rounded-full"/>
        <span className={cn("font-bold sm:inline-block",
          pathname?.endsWith("/") ? "text-primary" : "text-foreground"
        )}>
          {siteConfig.name}
        </span>
      </Link>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {links.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={`font-medium hover:underline ${item.color}`}
          >
            <span className={cn("font-bold sm:inline-block",
              pathname?.endsWith(`${item.link}`) ? "text-primary" : "text-foreground"
            )}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex space-x-4 mt-4 mr-10 md:mt-0">
        <a href=" https://www.youtube.com/channel/UCX46vGNihlgf7pa6absHAjw" target="_blank" rel="noreferrer" aria-label={t('social.twitter')}>
          <FontAwesomeIcon icon={faYoutube}/>
        </a>
        <a href="https://web.facebook.com/profile.php?id=61574457892559" target="_blank" rel="noreferrer" aria-label={t('social.facebook')}>
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a href="https://www.linkedin.com/company/" target="_blank" rel="noreferrer" aria-label={t('social.facebook')}>
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href="https://www.instagram.com/eath__official/" target="_blank" rel="noreferrer" aria-label={t('social.instagram')}>
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </div>
    </footer>
  );
}
