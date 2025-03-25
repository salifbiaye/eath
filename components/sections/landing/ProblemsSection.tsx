"use client"

import { motion } from "framer-motion"
import Features from "@/app/_features/page"
import { useTranslations } from 'next-intl'

export function ProblemsSection() {
  const t = useTranslations('HomePage.problems')

  return (
    <section className="w-full mt-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 pt-20 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
          {t('title')}
        </h2>
        <p className="text-gray-900 dark:text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          {t('description')}
        </p>
      </div>

      <div className="container relative mx-auto mt-32 w-full max-w-[1000px]">
        <motion.span
          animate={["initial"]}
          whileHover={["hover"]}
          variants={{
            hover: {
              scale: 1.1,
              rotate: -6,
              transition: {
                duration: 0.2,
              },
            },
            initial: {
              y: [-8, 8],
              transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            },
          }}
          className="absolute -top-16 left-0 right-auto cursor-pointer lg:-top-20"
        >
          <span className="flex items-center">
            <span className="mt-3 inline-block whitespace-nowrap rounded-full bg-neutral-800 px-4 py-1.5 text-[12px] font-semibold uppercase leading-5 tracking-wide text-white">
              {t('badge')}
            </span>
            <svg
              className="mr-6 h-8 w-14 [transform:rotateY(180deg)rotateX(0deg)]"
              width="45"
              height="25"
              viewBox="0 0 45 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                fill="currentColor"
                className="fill-gray-300 dark:fill-gray-700"
              />
            </svg>
          </span>
        </motion.span>

        <Features/>
      </div>
    </section>
  )
}


