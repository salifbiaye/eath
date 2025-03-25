"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
// import { Badge } from "@/registry/new-york/ui/badge"
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

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="mr-6 flex items-center gap-1 justify-center">

          <img src={logo} alt="logo" className=" w-8 h-10 rounded-full"/>

        <span className={cn(" font-bold sm:inline-block",
          pathname?.endsWith("/")
            ? "text-primary"
            : "text-foreground"
        )}>
          {siteConfig.name}
        </span>
      </Link>
      <nav className="hidden lg:flex lg:items-center lg:gap-6 text-sm">
        {/*<Link*/}
        {/*  href="/docs"*/}
        {/*  className={cn(*/}
        {/*    "transition-colors hover:text-foreground/80",*/}
        {/*    pathname === "/docs" ? "text-primary" : "text-foreground/60"*/}
        {/*  )}*/}
        {/*>*/}
        {/*  Accueil*/}
        {/*</Link>*/}
        <Link
          href="/a-propos"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/a-propos")
              ? "text-primary"
              : "text-foreground/60"
          )}
        >
          A propos de eath
        </Link>
        <Link
          href="/fonctionnement"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/fonctionnement")
              ? "text-primary"
              : "text-foreground/60"
          )}
        >
          Fonctionnalités
        </Link>
        <Link
          href="/equipe"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/equipe")
              ? "text-primary"
              : "text-foreground/60"
          )}
        >
          Equipe
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-primary"
              : "text-foreground/60"
          )}
        >
          Contactez nous
        </Link>

      </nav>
    </div>
  )
}
