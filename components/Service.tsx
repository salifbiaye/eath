
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt, faPepperHot, faShieldAlt, faShieldVirus, IconDefinition

} from "@fortawesome/free-solid-svg-icons";
import {Apple, Leaf, LucideIcon, Shield, ShieldAlert} from "lucide-react";
import { motion } from "framer-motion";
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}


const serviceList: Service[] = [
  {
    title: 'Analyse Précise des Ingrédients',
    description:
      "qui utilise l'intelligence artificielle pour scanner et identifier tous les composants des repas. Les groupes alimentaires (boissons, céréales, viandes, etc.) sont classés avec précision.",
    icon: Leaf,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Détection des Allergènes',
    description:
      'Notre application identifie les allergènes potentiels pour prévenir les réactions allergiques. Les consommateurs peuvent commander leur nourriture en toute confiance, sachant que leur sécurité sera prise en compte.',
    icon: ShieldAlert,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Conformité Halal',
    description:
      'Des algorithmes* spécifiques vérifient la conformité des repas aux normes Halal. Pour répondre aux critères des communautés religieuses exigeant des options Halal.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Apport nutritionnel',
    description:
      'Par ailleurs, une fonctionnalité de calcul en apport nutritionnel des repas sera incluse dans notre application.',
    icon: Apple,
    color: 'from-pink-500 to-rose-600',
  },
]
const ServiceItem: React.FC<{ service: Service }> = ({ service }) => (
  <motion.div
    key={service.title}
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.5 * 0.2}}
    className="group relative mb-6"
  >
    <div className="relative overflow-hidden rounded-3xl  bg-gray-200/50 dark:bg-gray-900/50 backdrop-blur-sm">
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


export default function Service() {
  return (
    <div>
      <section
        className="ezy__service20 light py-14 md:py-24 bg-background text-foreground relative z-[1] overflow-hidden">


        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-3xl md:text-[40px] font-bold leading-normal mb-4">
                Dans un monde où la sécurité alimentaire est une préoccupation croissante
              </h2>
              <p className="text-[17px] leading-normal opacity-80">
                une application de gestion de sécurité alimentaire devient essentielle pour protéger la santé des
                consommateurs.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-2 gap-3 ">
                <div className="col-span-2  md:col-span-1">
                  {serviceList.slice(0, 2).map((service, i) => (
                    <div key={i}>
                      <ServiceItem service={service}/>
                    </div>
                  ))}
                </div>

                <div className="col-span-2 md:col-span-1 md:mt-12">
                  {serviceList.slice(2, 4).map((service, i) => (
                    <div key={i}>
                      <ServiceItem service={service}/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

