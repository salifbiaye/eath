'use client';
import Link from "next/link";
import { Menu, Home, Info, PenTool, Users, Mail } from 'lucide-react';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import {siteConfig} from "@/config/site";
import * as React from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Ne rien rendre jusqu'à ce que le composant soit monté
  }
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
  const links = [
    { link: '/a-propos', label: 'A propos de Eath', color: 'text-pinkSmart', icon: Info },
    { link: '/fonctionnement', label: 'Fonctionnement', color: 'text-orangeSmart', icon: PenTool },
    { link: '/equipe', label: 'Equipe', color: 'text-purpleSmart', icon: Users },
    { link: '/contact', label: 'Contactez nous', color: 'text-redSmart', icon: Mail },
  ];



  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white dark:bg-muted p-1">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            <div className="flex flex-row gap-2">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className={"block lg:hidden"}  >
                  <Menu />
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[300px] bg-white dark:bg-muted sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle><Link href="/" onClick={toggleSheet} className="mr-6 flex items-center gap-1 justify-center">
                      <img src={logo} alt="logo" className=" w-8 h-10 rounded-full"/>
                      <span className={cn(" font-bold sm:inline-block",
                        pathname?.endsWith("/")
                          ? "text-primary"
                          : "text-foreground"
                      )}>
          {siteConfig.name}
        </span>
                    </Link></SheetTitle>
                    <SheetDescription>
                    Explorez les différentes sections de notre site.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4 flex flex-col">
                    {links.map((link) => (
                      <Link
                        key={link.link}
                        href={link.link}
                        onClick={toggleSheet}
                        className={`flex items-center space-x-4 text-lg font-medium hover:underline mb-10 ${link.color}`}
                      >
                        <link.icon className={cn(
                          pathname?.startsWith(link.link) ? "text-primary" : "text-foreground"
                        )} />
                        <span  className={cn(
                          pathname?.startsWith(link.link) ? "text-primary" : "text-foreground"
                        )}>
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
