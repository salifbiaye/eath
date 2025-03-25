"use client"

import { BorderBeamm } from "@/components/magicui/border-beam"
import { useTranslations } from 'next-intl'

export function ContentSection() {
  const t = useTranslations('HomePage.content')
  const eath = "/assets/Eath.mp4"
  const eathdark = "/assets/Eath-dark.mp4"
  const eathimage = "/assets/eath.png"
  const eathdarkimage = "/assets/eathdark.png"

  return (
    <section className="w-full py-12">
      <h2 className="font-heading text-3xl text-center mb-8 leading-[1.1] sm:text-3xl md:text-3xl font-bold">
        {t('title')} <br />{t('subtitle')}
      </h2>

      <div className="px-7 mb-8 flex flex-col items-center justify-center">
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
            <source src={eathdark} type="video/mp4" />
            {t('videoUnsupported')}
          </video>

          <img
            src={eathdarkimage || "/placeholder.svg"}
            alt={t('altDark')}
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
            <source src={eath} type="video/mp4" />
            {t('videoUnsupported')}
          </video>

          <img
            src={eathimage || "/placeholder.svg"}
            alt={t('altLight')}
            className="w-full h-auto block md:hidden dark:hidden max-w-[1200px] border-8 border-muted rounded-[inherit] object-contain shadow-lg"
          />

          <BorderBeamm size={250} duration={12} delay={9} />
        </div>
      </div>
    </section>
  )
}

