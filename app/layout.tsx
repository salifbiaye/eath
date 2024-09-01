
import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"
import { MantineProvider } from '@mantine/core';
import {Toaster} from "@/components/ui/sonner";
export const metadata: Metadata = {
  metadataBase: new URL('https://eath-blond.vercel.app/'), // Change this line
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
    url: 'https://eath-blond.vercel.app/',
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



interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <title>${siteConfig.name}</title>
          <meta property="og:image" content="/logo.png" />
          <meta property="twitter:image" content="/logo.png" />
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background overflow-x-hidden font-sans antialiased",
            fontSans.variable,
          )}
        >
        <MantineProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <div className="absolute flex min-h-screen flex-col"> */}
              {/* <SiteHeader /> */}
              {/* <div className="container flex-1"> */}
            <SiteHeader />

                {children}

              {/* </div> */}

            {/* </div> */}
            {/*<TailwindIndicator />*/}
            <SiteFooter/>
          </ThemeProvider>
        </MantineProvider>
        </body>
      </html>
    </>
  )
}
