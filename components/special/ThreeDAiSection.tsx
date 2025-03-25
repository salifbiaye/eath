"use client"

import { motion } from "framer-motion"
import { ServiceAi } from "@/components/special/ServiceAi"
import { useTranslations } from 'next-intl'

export function ThreeDAiSection() {
  const t = useTranslations('HomePage.ai-section')

  return (
    <motion.div className={`w-screen relative bg-background pt-4`}>
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className={`relative h-fit flex flex-col items-center justify-center`}
      >
        <h2 className="font-heading font-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
          {t('title')}
        </h2>
      </motion.div>

      <ServiceAi />
    </motion.div>
  )
}
