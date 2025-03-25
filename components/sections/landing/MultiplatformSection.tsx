"use client"

import { useTranslations } from 'next-intl'

export function MultiplatformSection() {
  const t = useTranslations('HomePage.multiplatform')
  const iPhone12 = "/iphone-12-Mockup.png"

  return (
    <section className="max-w-7xl mx-auto flex px-5 py-20 md:flex-row flex-col justify-center items-center">
      <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
        <h1 className="mb-5 sm:text-6xl text-primary text-5xl font-bold items-center xl:w-2/2">
          {t('title')}
        </h1>
        <p className="mb-4 xl:w-3/4 text-secondary font-bold text-lg">
          {t('description')}
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img 
          className="w-96 lg:w-[48vw] md:ml-1" 
          alt={t('imageAlt')} 
          src={iPhone12 || "/placeholder.svg"} 
        />
      </div>
    </section>
  )
}

