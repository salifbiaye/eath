'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { HeartPulse, Lock, ScrollIcon, Shield } from 'lucide-react'
import { useRef } from 'react'

export default function Pourquoinous() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const features = [
    {
      number: '1',
      title: 'Sécurité Alimentaire',
      description: 'Grâce à notre analyse précise, vous pouvez consommer vos repas en toute sécurité.',
      icon: Shield,
      delay: 0.2,
    },
    {
      number: '2',
      title: 'Conformité et Respect',
      description: 'Répondre aux exigences alimentaires spécifiques telles que les normes Halal.',
      icon: ScrollIcon,
      delay: 0.4,
    },
    {
      number: '3',
      title: 'Prévention des Allergies',
      description: 'Évitez les réactions allergiques grâce à la détection des allergènes.',
      icon: Lock,
      delay: 0.6,
    },
    {
      number: '4',
      title: 'Santé et Bien-être',
      description: 'Comprenez les apports nutritionnels de vos repas et faites des choix alimentaires sains.',
      icon: HeartPulse,
      delay: 0.8,
    },
  ]

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary dark:bg-secondary" ref={containerRef}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20"
            animate={{
              x: ['0vw', '100vw'],
              y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ left: `-${Math.random() * 20}%` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Pourquoi choisir
            <span className="relative ml-4 inline-block">
              eath
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-full bg-white"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            On estime que 600 millions de personnes tombent malades après avoir mangé des aliments contaminés chaque année
            dans le monde selon l&apos;OMS, entraînant 420 000 décès, les enfants de moins de 5 ans supportent 40 % de la
            charge de morbidité imputable aux maladies d&apos;origine alimentaire et 125 000 en meurent chaque année avec
            une perte de 33 millions d&apos;années de vie en bonne santé. C&apos;est à cet effet que notre application
            mobile Eath permet de sauver des vies et garantit que ce que nous mangeons ne présente aucun danger.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-150" />
                <div className="relative">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl font-bold text-white">
                    {feature.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-white">{feature.description}</p>
                  <feature.icon className="absolute right-0 top-0 h-6 w-6 text-white/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
