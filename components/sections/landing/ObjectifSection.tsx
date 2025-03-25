"use client"

import BentoObjectif from "@/components/special/BentoObjectif"
import { useTranslations } from 'next-intl'

export function ObjectivesSection() {
  const t = useTranslations('HomePage.objectives')

  return (
    <section className="flex flex-col items-center space-y-4 pt-20 mb-52 text-center">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
        {t('title')}
      </h2>
      <p className="text-gray-900 dark:text-muted-foreground max-w-[85%] pb-10 leading-normal sm:text-lg sm:leading-7">
        {t('description')}
      </p>

      <BentoObjectif />
    </section>
  )
}

