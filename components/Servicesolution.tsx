
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faDesktop,
  faMobileAlt,

} from "@fortawesome/free-solid-svg-icons";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card";
import {Separator} from "@/components/ui/separator";


const serviceList = [
  {
    icon: faMobileAlt,
    title: "Application mobile ",
    description:
      "Découvrez notre application mobile innovante pour la gestion de la sécurité alimentaire. Suivez et gérez les stocks, surveillez la qualité des produits et recevez des alertes en temps réel sur les risques potentiels. Assurez-vous que les aliments respectent les normes de sécurité les plus strictes, tout en gardant une vue d'ensemble sur les opérations.",
  },
  {

    icon: faBrain,
    title: "Intelligence artificielle",
    description:
      "Notre solution d'IA avancée analyse les composants des aliments pour garantir leur sécurité. Grâce à des algorithmes de pointe, nous pouvons détecter les contaminants, évaluer les valeurs nutritionnelles et assurer la conformité aux normes de sécurité alimentaire. Protégez les consommateurs et maintenez la qualité des produits avec notre technologie innovante.",
  },
  {
    icon: faDesktop,
    title: "Interface web",
    description:
      " Grace a notre plateforme web vous aurez toutes les informations par rapport a notre application",
  },
];
const ServiceItem = ({ service }: { service: Service }) => (
  <Card className={`transition duration-300 h-full  dark:bg-muted ${service.isActive ? "bg-gray-700 text-white" : "bg-transparent"}`}>
    <CardHeader className="flex flex-col items-center">
      <div
        className={`bg-muted bg-opacity-10 text-secondary w-32 h-32 rounded-full text-6xl inline-flex justify-center items-center mb-4 ${
          service.isActive ? "bg-white bg-opacity-10 text-white" : ""
        }`}
      >
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <CardTitle className="text-3xl text-foreground font-medium">{service.title}</CardTitle>

    </CardHeader>
    <Separator className="my-4" />

    <CardContent>
      <CardDescription className="font-bold text-foreground opacity-70">{service.description}</CardDescription>
    </CardContent>

  </Card>
);

interface Service {
  icon: any;  // Vous pouvez affiner ce type si vous avez un type spécifique pour les icônes
  title: string;
  description: string;
  isActive?: boolean; // Facultatif si ce champ n'est pas toujours présent
}

export const ServiceSolution= () => {
  return (
    <div className="ezy__service10 light py-14 md:py-24  ] text-zinc-900 ">
      <div className="container relative">
        <div className="flex justify-center  mb-12">
        </div>
        <div className="grid grid-cols-3 gap-6 text-center">
          {serviceList.map((service, i) => (
            <div className="col-span-3 md:col-span-1" key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

