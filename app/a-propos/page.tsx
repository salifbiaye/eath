'use client'
import { motion } from "framer-motion";

import Pourquoinous from "@/components/Pourquoinous";
import { CardWithReadMore} from "@/components/Cardgradient";
import {Beaker, Book, Eye, Flag, Heart, Leaf, ShieldCheck, Target, Users, Utensils, VolumeX,History} from "lucide-react";



const About = () => {
  const data = [
    {
      title: "Mission",
      text: "Révolutionner la sécurité alimentaire dans le monde !",
      icon: Flag,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      title: "Vision",
      text: "inspirer la prochaine génération à relever les défis grâce à l'innovation,et l'entrepreneuriat social.",
      icon: Eye,
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      title: "Valeurs",
      text: "Réduire jusqu'à 1,03% les risques dans la consommation quotidienne des aliments, mettre à la disposition du public consommateur un outil d'analyse précise, fiable des aliments. Garantir au public une consommation saine des aliments.",
      icon: Heart,
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      title: "Origine",
      text: "L'idée de cette application est née de la préoccupation croissante pour la sécurité alimentaire et des lacunes observées dans les outils de détection actuels. Initiée par une équipe de passionnés de technologie et de sécurité alimentaire, l'application a été conçue pour répondre à une demande croissante de solutions accessibles et efficaces pour vérifier la conformité et sécurité des aliments aux normes standardes",
      icon: History,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: "Technologie",
      text: "Notre application repose sur une combinaison de technologies de pointe, notamment des algorithmes d'intelligence artificielle et des techniques de vision par ordinateur. Ces technologies permettent une analyse rapide des aliments scannés pour détecter la présence de substances nocives. Nous utilisons des plateformes modernes pour le développement, telles que React pour le frontend et des solutions cloud pour le traitement des données, assurant ainsi une performance optimale et une sécurité renforcée.",
      icon: Target,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: "Analyse Précise des Ingrédients",
      text: "qui utilise l'intelligence artificielle pour scanner et identifier tous les composants des repas. Les groupes alimentaires (boissons, céréales, viandes, etc.) sont classés avec précision.",
      icon: Beaker,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: "Conformité Halal",
      text: "Des algorithmes* spécifiques vérifient la conformité des repas aux normes Halal. Pour répondre aux critères des communautés religieuses exigeant des options Halal.",
      icon: ShieldCheck,
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      title: "Détection des Allergènes",
      text: "Notre application identifie les allergènes potentiels pour prévenir les réactions allergiques. Les consommateurs peuvent commander leur nourriture en toute confiance, sachant que leur sécurité sera prise en compte.",
      icon: VolumeX,
      gradient: 'from-red-500 to-rose-600'
    },
    {
      title: "Substances Nocives et Nutrition",
      text: "Un système fiable intégré des drogues, poisons et venins préviendra tout risque, d'intoxication, contamination accidentelle ou d'empoisonnement dans les repas. le système intercepte l'information nutritionnelle, l'analyse puis cherche des traces d'éléments douteux dans les aliments. Au cas échéant si le résultat est positif l'information sera envoyée sur l'interface du smartphone pour avertir l'utilisateur.",
      icon: Utensils,
      gradient: 'from-yellow-500 to-amber-600'
    },
    {
      title: "Apport Nutritionnel",
      text: "Par ailleurs, une fonctionnalité de calcul en apport nutritionnel des repas sera incluse dans notre application afin de permettre à tout le monde de comprendre l'apport nutritionnel bénéfique que les repas consommés génèrent sur notre santé et bien-être. C'est aussi un outil pour les sujets diabétiques, diététiques, les personnes obèses, les végétariens d'équilibrer voire calibrer leurs régimes alimentaires quotidiens en faisant un choix qui répondrait aux besoins réels de leur organisme.",
      icon: Leaf,
      gradient: 'from-lime-500 to-green-600'
    },
    {
      title: "Inclusion Sociale",
      text: "nous utilisons les technologies avancées pour faciliter la réalisation de cette application mobile avec l'intégration de l' assistant vocal qui favorise aussi l'utilisation de cet outil digital par les personnes malvoyantes.",
      icon: Users,
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: "Nos cibles",
      text: "population mondiale, chaines de restauration rapide, chaines hôtelières, milieu du tourisme, restaurants universitaires, cantines scolaires, pensionnats, mais aussi le milieu des athlètes et sportifs.",
      icon: Book,
      gradient: 'from-purple-500 to-indigo-600'
    }
  ]

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} className={"text-center"}>
      <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold text-center text-secondary mb-10 mt-4">
        A propos de<br/>
        <span
          className="text-5xl md:text-[6rem] font-gotham font-bold text-center mt-1 text-primary leading-none">
                    eath
                </span>
      </h1>
      <p
        className="mx-auto max-w-[800px] text-lg leading-relaxed text-gray-900 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        eath est une startup qui a mis au point une application mobile sophistiquée qui garantit la sécurité alimentaire
        des consommateurs à l&apos;échelle mondiale.
      </p>
      <p
        className="mx-auto max-w-[800px] text-lg leading-relaxed text-gray-900 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        En effet nous changeons le monde à travers cette innovation qui est une solution technique qui règle des problèmes techniques de sécurité alimentaire
        et de santé publique grâce aux fonctionnalités suivantes.
      </p>


      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 `}>

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

  )
    ;
};

export default About;
