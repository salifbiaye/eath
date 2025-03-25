
import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/special/site-header"
import { TailwindIndicator } from "@/components/special/tailwind-indicator"
import { ThemeProvider } from "@/components/special/theme-provider"
import { SiteFooter } from "@/components/special/site-footer"
import { MantineProvider } from '@mantine/core';

import {Separator} from "@/components/ui/separator";
import {notFound} from "next/navigation";
import {routing} from "@/src/i18n/routing";
import {hasLocale, NextIntlClientProvider} from "next-intl";
export const metadata: Metadata = {
  metadataBase: new URL('https://www.eathstartup.com/'), // Change this line
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/logofavicon.png",
    shortcut: "/logofavicon.png",
    apple: "/logofavicon.png",
  },
  openGraph: {
    url: 'https://www.eathstartup.com/',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      { url: '/eathpreview.png', width: 800, height: 600, alt: siteConfig.name },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
  },

}





export default async function LocaleLayout({
                                             children,
                                             params
                                           }: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 return (
   <>
     <html lang={locale} suppressHydrationWarning>
     <Head>
       <title>${siteConfig.name}</title>
       <meta property="og:title" content="eath"/>
       <meta property="og:description" content={siteConfig.description}/>
       <meta name="google-site-verification" content="qlrtwZJkWHE178_wz8GM4IXJ1u4b0eq6qNSPIzWoYHQ"/>
       <meta property="og:image" content="https://www.eathstartup.com/eathpreview.png"/>
       <meta property="og:url" content="https://www.eathstartup.com/eathpreview.png"/>
       <meta property="og:type" content="website"/>
       <meta name="twitter:card" content="eath"/>
       <meta name="twitter:title" content="eath"/>
       <meta name="twitter:description" content={siteConfig.description}/>
       <meta name="twitter:image" content="https://codification.cee-esp.com/campus.svg"/>
     </Head>
     <body
       className={cn(
         "min-h-screen bg-background overflow-x-hidden font-sans antialiased",
         fontSans.variable,
       )}
     >
     <MantineProvider>
         <NextIntlClientProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <SiteHeader/>
                {children}
              <SiteFooter/>
            </ThemeProvider>
         </NextIntlClientProvider>
     </MantineProvider>
     </body>
     </html>
   </>
  )
}
