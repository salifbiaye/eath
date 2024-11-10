

import { motion } from "framer-motion";
import {HelpCircleIcon, History, LucideIcon, SyringeIcon} from "lucide-react";
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}
const serviceList:Service[] = [
  {
    icon: History,
    title: "Historique des scans",
    color: 'from-green-500 to-emerald-600',
    description:
      "Un historique des aliments scannés avec des détails sur chaque scan, permettant aux utilisateurs de revoir les informations sur les produits qu'ils ont scannés auparavant.",
  },
  {
    icon: SyringeIcon,
    title: "Substances Nocives et Nutrition",
    color: 'from-purple-500 to-indigo-600',
    description:
      "Un système fiable intégré de détection des drogues, poisons et venins préviendra tout risque, d'intoxication,  contamination accidentelle ou d'empoisonnement dans les repas. Le système intercepte l'information  nutritionnelle à analyser puis cherche des traces de substances nocives dans le repas.  Au moindre soupçon détecté de traces de ces substances nocives, l'information est envoyée sur l'interface du téléphone pour avertir la personne. À cet effet ces technologies aident les consommateurs à s'assurer de manger sûrement et sainement  leurs repas. ",
  },
  {
    icon:HelpCircleIcon,
    title: "Inclusion sociale",
    color: 'from-pink-500 to-rose-600',
    description:
      "nous utilisons les technologies avancées pour faciliter la réalisation de cette application mobile avec l’intégration d'un assistant vocal qui assure une accessibilité accrue  en garantissant la sécurité alimentaire des personnes malvoyantes et en promouvant l'équité sociale.",
  },
];

const ServiceItem = ({ service }:any) => (
  <motion.div
    key={service.title}
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.5 * 0.2}}
    className="group relative "
  >
    <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-gray-200/50 dark:bg-gray-900/50  backdrop-blur-sm">
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]"/>

      <div className="relative p-8">
        <div className="flex items-center gap-6">
          <div
            className={`rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
          >
            <service.icon className="h-8 w-8 text-white"/>
          </div>
          <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
        </div>
        <p className="mt-6 text-gray-900 dark:text-gray-400">{service.description}</p>

        {/* Decorative elements */}
        <div
          className={`absolute right-0 top-0 h-24 w-24 bg-gradient-to-br ${service.color} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30`}
        />
        <div
          className={`absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-br ${service.color} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30`}
        />
      </div>
    </div>
  </motion.div>
);


export default function ServiceList() {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, y: 0}}
                transition={{type: "spring", stiffness: 100, damping: 25}} className={`h-full overflow-hidden`}>
      <section className=" light py-14 md:py-24 bg-background text-foregroun  relative z-[1]">
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 25}}
                    className="absolute bottom-0 left-0 right-0 h-1/2 w-full bg-secondary  -z-[1]"/>
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-[45px] font-bold mb-6">
                Nos autres services
              </h2>
              <p className="text-lg opacity-80">
                Cette application révolutionnaire utilise la technologie pour garantir que les aliments que nous
                consommons sont sûrs et exempts de risques
              </p>
            </div>

          </div>
          <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto mt-12">
            {serviceList.map((service, i) => (
              <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}}
                          transition={{type: "spring", stiffness: 100, damping: 25}}
                          className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
                <ServiceItem service={service}/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

