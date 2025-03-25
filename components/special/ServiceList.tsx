

import { motion } from "framer-motion";
import {HelpCircleIcon, History, LucideIcon, SyringeIcon} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;

}
const serviceList:Service[] = [
  {
    icon: History,
    title: "Historique des scans",
    description:
      "Un historique des aliments scannés avec des détails sur chaque scan, permettant aux utilisateurs de revoir les informations sur les produits qu'ils ont scannés auparavant.",
  },
  {
    icon: SyringeIcon,
    title: "Substances Nocives et Nutrition",
    description:
      "Un système fiable intégré de détection des drogues, poisons et venins préviendra tout risque, d'intoxication,  contamination accidentelle ou d'empoisonnement dans les repas. Le système intercepte l'information  nutritionnelle à analyser puis cherche des traces de substances nocives dans le repas.  Au moindre soupçon détecté de traces de ces substances nocives, l'information est envoyée sur l'interface du téléphone pour avertir la personne. À cet effet ces technologies aident les consommateurs à s'assurer de manger sûrement et sainement  leurs repas. ",
  },
  {
    icon:HelpCircleIcon,
    title: "Inclusion sociale",
    description:
      "nous utilisons les technologies avancées pour faciliter la réalisation de cette application mobile avec l’intégration d'un assistant vocal qui assure une accessibilité accrue  en garantissant la sécurité alimentaire des personnes malvoyantes et en promouvant l'équité sociale.",
  },
];



export default function ServiceList() {
  return (
    <section className="relative w-full overflow-hidden dark:bg-primary bg-secondary py-24">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="bubble absolute rounded-full bg-white/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}

      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Nos autres services</h2>
          <p className="mx-auto max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Cette application révolutionnaire utilise la technologie pour garantir que les aliments que nous consommons
            sont
            sûrs et exempts de risques
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, index) => (
            <Card
              key={service.title}
              className="relative overflow-hidden border-0 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-xl font-bold text-white">
                    {index + 1}
                  </span>
                  <service.icon className="h-6 w-6 text-white"/>
                </div>
                <CardTitle className="mt-4 text-xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </section>

  );
};

