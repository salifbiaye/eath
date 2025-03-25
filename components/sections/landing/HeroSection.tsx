"use client"

import { BorderBeamm } from "@/components/magicui/border-beam"
import Ripple from "@/components/magicui/ripple"
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('HomePage.hero')
  const logo = "/logotitle.png"
  const accueil = "/assets/Accueil.mp4"
  const accueildark = "/assets/accueil-dark.mp4"
  const accueildarkimage = "/assets/accueil-dark.png"
  const accueilimage = "/assets/Accueil.png"

  return (
    <section className="flex flex-col gap-6 px-7 text-center items-center w-full">
      <div className="relative h-screen w-screen flex flex-col gap-4 items-center justify-center lg:flex-row">
        <div>
          <h1 className="relative flex flex-row max-w-[43.5rem] gap-1 text-balance bg-gradient-to-br from-primary from-50% to-neutral-200/60 bg-clip-text pt-5 text-center font-semibold tracking-tighter text-transparent text-7xl md:text-9xl mx-auto md:px-4 md:py-2 dark:text-white">
            <img src={logo || "/placeholder.svg"} alt="logo" className="rounded-full" />
          </h1>
        </div>
        <Ripple />
      </div>

      <p className="max-w-xl text-balance text-base tracking-tight font-bold text-black text-center md:text-lg dark:font-medium dark:text-white">
        {t('revolutionizing')}
        <br />
      </p>

      <div className="relative rounded-xl lg:block">
        <video
          className="w-full h-auto hidden max-w-[1200px] border-8 border-muted rounded-[inherit] object-contain shadow-lg dark:md:block"
          autoPlay
          muted
          playsInline
          disablePictureInPicture
          loop
          controls={false}
          style={{ pointerEvents: "none" }}
        >
          <source src={accueildark} type="video/mp4" />
          {t('videoUnsupported')}
        </video>

        <img
          src={accueildarkimage || "/placeholder.svg"}
          alt={t('videoAltDark')}
          className="w-full h-auto dark:block hidden dark:md:hidden max-w-[1200px] border-8 border-muted rounded-[inherit] object-contain shadow-lg"
        />

        <video
          className="w-full h-auto hidden md:block max-w-[1200px] border-8 border-muted rounded-[inherit] object-contain shadow-lg dark:hidden"
          autoPlay
          muted
          playsInline
          disablePictureInPicture
          loop
          controls={false}
          style={{ pointerEvents: "none" }}
        >
          <source src={accueil} type="video/mp4" />
          {t('videoUnsupported')}
        </video>

        <img
          src={accueilimage || "/placeholder.svg"}
          alt={t('videoAltLight')}
          className="w-full h-auto block md:hidden dark:hidden max-w-[1200px] border-8 border-muted rounded-[inherit] object-contain shadow-lg"
        />

        <BorderBeamm size={250} duration={12} delay={9} />
      </div>
    </section>
  )
}

