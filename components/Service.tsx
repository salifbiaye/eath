
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt, faPepperHot, faShieldAlt, faShieldVirus, IconDefinition

} from "@fortawesome/free-solid-svg-icons";
interface Service {
  icon: IconDefinition;
  title: string;
  description: string;
}


const serviceList: Service[] = [
  {
    icon: faPepperHot,
    title: "Analyse Précise des Ingrédients ",
    description:
      "qui utilise l’intelligence artificielle pour scanner et identifier tous les\n" +
      "composants des repas. Les groupes alimentaires (boissons, céréales, viandes, etc.) sont classés avec précision.\n",
  },
  {
    icon: faShieldAlt,
    title: "Conformité Halal",
    description:
      " Des algorithmes* spécifiques vérifient la conformité des repas aux normes Halal. Pour répondre aux critères des communautés religieuses exigeant des options Halal.",
  },
  {
    icon: faShieldVirus,
    title: "Détection des Allergènes",
    description:
      "Notre application identifie les allergènes potentiels pour prévenir les réactions allergiques. Les consommateurs peuvent commander leur nourriture en toute confiance, sachant que leur sécurité sera prise en compte.",
  },
  {
    icon: faAppleAlt,
    title: "Apport nutritionne",
    description:
      " Par ailleurs, une fonctionnalité de calcul en apport nutritionnel des repas est prévue dans notre application afin de permettre à tout le monde de comprendre l'apport nutritionnel bénéfique que les repas consommés génèrent sur notre santé et bien-être. C'est aussi un outil pour les sujets diabétiques, diététiques, les personnes obèses, les végétariens d'équilibrer voire calibrer leurs régimes alimentaires quotidiens en faisant un choix qui répondrait aux besoins réels de leur organisme.",
  },
];

const ServiceItem: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white dark:bg-muted rounded-lg text-foreground shadow h-full p-3 md:mt-4">
    <div className="p-4 lg:p-8">
      <div className="text-[40px] text-primary mb-2">
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <h5 className="text-xl font-medium my-6">{service.title}</h5>
      <p className="opacity-75 mt-4">{service.description}</p>
    </div>
  </div>
);



function ShapeOne() {
  return (
    <svg
      className="absolute -bottom-[20%] left-0 -z-[1]"
      width="405"
      height="626"
      viewBox="0 0 405 626"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-252.65"
        y="236.986"
        width="433.92"
        height="140"
        rx="73.8464"
        transform="rotate(-33.796 -302.65 296.986)"
        fill="#7DC242"

      />
      <rect
        x="-315"
        y="452.403"
        width="666.584"
        height="140"
        rx="73.8464"
        transform="rotate(-33.796 -315 502.403)"
        fill="#916CAF "

      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute hidden md:block right-0 -z-[1]"
      width="340"
      height="658"
      viewBox="0 0 495 778"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="489" cy="389" r="389" fill="#916CAF "  />
    </svg>
  );
}

export default function  Service () {
  return (
    <div>
      <section className="ezy__service20 light py-14 md:py-24 bg-background text-foreground relative z-[1] overflow-hidden">
        <ShapeOne/>
        <ShapeTwo/>

        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-3xl md:text-[40px] font-bold leading-normal mb-4">
                Dans un monde où la sécurité alimentaire est une préoccupation croissante
              </h2>
              <p className="text-[17px] leading-normal opacity-80">
                une application de gestion de sécurité alimentaire devient essentielle pour protéger la santé des consommateurs.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-2 gap-6 gap-x-5">
                <div className="col-span-2 md:col-span-1">
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

