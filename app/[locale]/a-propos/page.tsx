'use client'
import { motion } from "framer-motion";

import Pourquoinous from "@/components/special/Pourquoinous";
import { CardWithReadMore } from "@/components/special/Cardgradient";
import { Beaker, Book, Eye, Flag, Heart, Leaf, ShieldCheck, Target, Users, Utensils, VolumeX, History } from "lucide-react";
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('aboutPage');
  
  // Keep the data array as is, since it contains specific content
  const data = [
    {
      title: t('cards.mission.title'),
      text: t('cards.mission.text'),
      icon: Flag,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      title: t('cards.vision.title'),
      text: t('cards.vision.text'),
      icon: Eye,
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      title: t('cards.values.title'),
      text: t('cards.values.text'),
      icon: Heart,
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      title: t('cards.origin.title'),
      text: t('cards.origin.text'),
      icon: History,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: t('cards.technology.title'),
      text: t('cards.technology.text'),
      icon: Target,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: t('cards.ingredients.title'),
      text: t('cards.ingredients.text'),
      icon: Beaker,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: t('cards.halal.title'),
      text: t('cards.halal.text'),
      icon: ShieldCheck,
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      title: t('cards.allergens.title'),
      text: t('cards.allergens.text'),
      icon: VolumeX,
      gradient: 'from-red-500 to-rose-600'
    },
    {
      title: t('cards.harmful.title'),
      text: t('cards.harmful.text'),
      icon: Utensils,
      gradient: 'from-yellow-500 to-amber-600'
    },
    {
      title: t('cards.nutrition.title'),
      text: t('cards.nutrition.text'),
      icon: Leaf,
      gradient: 'from-lime-500 to-green-600'
    },
    {
      title: t('cards.social.title'),
      text: t('cards.social.text'),
      icon: Users,
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: t('cards.targets.title'),
      text: t('cards.targets.text'),
      icon: Book,
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} className={"text-center"}>
      <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold text-center text-secondary mb-10 mt-4">
        {t('title')}<br/>
        <span className="text-5xl md:text-[6rem] font-gotham font-bold text-center mt-1 text-primary leading-none">
          eath
        </span>
      </h1>
      <p className="mx-auto max-w-[800px] text-lg leading-relaxed text-gray-900 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {t('description.part1')}
      </p>
      <p className="mx-auto max-w-[800px] text-lg leading-relaxed text-gray-900 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {t('description.part2')}
      </p>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        {data.map((card, index) => (
          <motion.div
            key={index}
            className={`p-4`}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.2}}
          >
            <CardWithReadMore key={card.title} card={card} index={index}/>
          </motion.div>
        ))}
      </div>
      <Pourquoinous/>
    </motion.div>
  );
};

export default About;
