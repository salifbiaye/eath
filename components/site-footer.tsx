'use client';
import Link from 'next/link';
import { Icons } from '@/components/icons'; // Assurez-vous que Icons contient les icônes nécessaires
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {cn} from "@/lib/utils";
import {siteConfig} from "@/config/site";
import * as React from "react";
import {usePathname} from "next/navigation";
const links = [
  { link: '/a-propos', label: 'A propos de Eath', color: 'text-pinkSmart' },
  { link: '/fonctionnement', label: 'Fonctionnement', color: 'text-orangeSmart' },
  { link: '/equipe', label: 'Equipe', color: 'text-purpleSmart' },
  { link: '/contact', label: 'Contactez nous', color: 'text-redSmart' },
];
const logo ='/logo.png'
const Container = ({
                     className,
                     children,
                   }: {
  className?: string;
  children: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};




export function SiteFooter() {
  const pathname = usePathname()
  return (
    <footer className="flex  border-t  flex-col py-6 w-4xl  md:flex-row items-center md:justify-between space-y-4 md:space-y-0 ">
      <Link href="/" className="mr-6 flex items-center space-x-2 ml-10">
        <Container className={"w-10 h-10 circle-6"}>
          <img src={logo} alt="logo" className="w-8 h-8 rounded-full"/>
        </Container>
        <span className={cn(" font-bold sm:inline-block",
          pathname?.endsWith("/")
            ? "text-primary"
            : "text-foreground"
        )}>
          {siteConfig.name}
        </span>
      </Link>
      <div className="flex flex-col md:flex-row md:space-x-4 ">
        {links.map((item) => (
          <Link key={item.link} href={item.link} className={`font-medium hover:underline ${item.color}`}>
            <span className={cn(" font-bold sm:inline-block",
              pathname?.startsWith(`${item.link}`)
                ? "text-primary"
                : "text-foreground"
            )}>
          {item.label}
        </span>
          </Link>
        ))}
      </div>
      <div className="flex space-x-4 mt-4 mr-10 md:mt-0">
        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}
