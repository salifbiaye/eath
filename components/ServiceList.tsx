
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandsHelping, faHistory, faSyringe, IconDefinition} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
interface Service {
  icon: IconDefinition;
  title: string;
  description: string;
}
const serviceList:Service[] = [
  {
    icon: faHistory,
    title: "Historique des scans",
    description:
      "Un historique des aliments scannés avec des détails sur chaque scan, permettant aux utilisateurs de revoir les informations sur les produits qu'ils ont scannés auparavant.",
  },
  {
    icon: faSyringe,
    title: "Substances Nocives et Nutrition",
    description:
      "Un système fiable intégré de détection des drogues, poisons et venins préviendra tout risque, d'intoxication,  contamination accidentelle ou d'empoisonnement dans les repas. Le système intercepte l'information  nutritionnelle à analyser puis cherche des traces de substances nocives dans le repas.  Au moindre soupçon détecté de traces de ces substances nocives, l'information est envoyée sur l'interface du téléphone pour avertir la personne. À cet effet ces technologies aident les consommateurs à s'assurer de manger sûrement et sainement  leurs repas. ",
  },
  {
    icon: faHandsHelping,
    title: "Inclusion sociale",
    description:
      "nous utilisons les technologies avancées pour faciliter la réalisation de cette application mobile avec l’intégration d'un assistant vocal qui assure une accessibilité accrue  en garantissant la sécurité alimentaire des personnes malvoyantes et en promouvant l'équité sociale.",
  },
];

const ServiceItem = ({ service }:any) => (
  <div className="bg-white dark:bg-muted text-foreground shadow-xl rounded-xl h-full">
    <div className="p-6 md:p-12">
      <div className="w-[75px] h-[75px] rounded-full text-[26px] text-primary shadow-xl flex justify-center items-center mb-6">
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <h4 className="text-2xl mb-6 font-bold">{service.title}</h4>
      <p className="opacity-70 leading-[1.8]">{service.description}</p>
    </div>
  </div>
);


export default function  ServiceList() {
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
                Cette application révolutionnaire utilise la technologie pour garantir que les aliments que nous consommons sont sûrs et exempts de risques
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

