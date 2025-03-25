"use client";

import { useTranslations } from 'next-intl'
import { Leaf, ThumbsUp ,PiggyBank} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
// import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import { CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/animated-beam-multiple-outputs";
// import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/animated-beam-multiple-outputs";
import { Skull, AlertTriangle } from "lucide-react";
import {useEffect} from "react";

const allergenes=[

    "Gluten",
    "Lait",
    "Œufs",
    "Arachides",
    "Noix",
    "Poisson",
    "Crustacés",
    "Soja",
    "Moutarde",
    "Sésame",
    "Sulfites",
    "Lupin",
    "Céleri",
  "Mollusques",
  "Fruits à coque",
  "Graines de sésame",
  "Graines de moutarde",
  "Graines de pavot",
  "Orge",
  "Avoine",
  "Seigle",
  "Épeautre",
  "Kamut",
  "Lait de vache",
  "Lait de chèvre",
  "Lait de brebis",
  "Lait de jument",
  "Lait de bufflonne",
  "Tartrazine ",
  "Benzoate de sodium",
  "Nitrites et nitrates",
  "Glutamate",
  "Maïs ",
  "lentilles",
  "Pois chiches",
  "Pois cassés",
  "Haricots rouges",
  "Haricots"

]
const files = [
  {
    name: "Salmonelle",
    body: "La salmonelle est un groupe de bactéries pouvant causer des intoxications alimentaires. ",
  },
  {
    name: "E. coli",
    body: "Escherichia coli (E. coli) est une bactérie couramment trouvée dans les intestins des humains et des animaux. ",
  },
  {
    name: "Listéria",
    body: "Listeria monocytogenes est une bactérie pouvant causer la listériose, une infection grave généralement provoquée par la consommation d'aliments contaminés.",
  },
  {
    name: "Botulisme",
    body: "Le botulisme est une maladie rare mais potentiellement mortelle causée par une toxine produite par la bactérie Clostridium botulinum.",
  },
  {
    name: "Aflatoxines",
    body: "Les aflatoxines sont des composés toxiques produits par certaines moisissures, notamment Aspergillus flavus et Aspergillus parasiticus. ",
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const features = [
  {
    Icon:Skull,
    name: "Les risques d'empoisonnement",
    description: "Le poison est une substance mortelle qui peut être utilisée pour tuer des personnes.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-destructive",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center  gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium  dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: InputIcon,
    name: "Gestion des Allergènes",
    description: "Identifiez et gérez efficacement la présence d'allergènes dans vos produits, assurant une conformité totale avec les normes de sécurité alimentaire.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <></>
    )
    // background: (
    //   <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
    //     <CommandInput placeholder="Tapez une commande ou recherchez..." />
    //     <CommandList>
    //       <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
    //       <CommandGroup heading="Suggestions d'allergènes">
    //         {
    //       allergenes.map((allergene, idx) => (
    //         <CommandItem key={idx}  >
    //           {allergene}
    //         </CommandItem>
    //       ))}
    //       </CommandGroup>
    //     </CommandList>
    //   </Command>
    //
    // ),
  },
  {
    Icon: Leaf,
    name: "La certification Halal des Aliments",
    description: "Garantit que les aliments respectent les normes halal, en assurant une traçabilité et une conformité complètes.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

export default function Features() {
  const t = useTranslations('HomePage.features')

  const files = [
    {
      name: t('poisoning.pathogens.salmonella.name'),
      body: t('poisoning.pathogens.salmonella.body'),
    },
    {
      name: t('poisoning.pathogens.ecoli.name'),
      body: t('poisoning.pathogens.ecoli.body'),
    },
    {
      name: t('poisoning.pathogens.listeria.name'),
      body: t('poisoning.pathogens.listeria.body'),
    },
    {
      name: t('poisoning.pathogens.botulism.name'),
      body: t('poisoning.pathogens.botulism.body'),
    },
    {
      name: t('poisoning.pathogens.aflatoxins.name'),
      body: t('poisoning.pathogens.aflatoxins.body'),
    },
  ];

  const features = [
    {
      Icon: Skull,
      name: t('poisoning.title'),
      description: t('poisoning.description'),
      href: "/",
      cta: t('cta'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-destructive",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
              )}
            >
              <div className="flex flex-row items-center  gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium  dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      ),
    },
    {
      Icon: InputIcon,
      name: t('allergens.title'),
      description: t('allergens.description'),
      href: "/",
      cta: t('cta'),
      className: "col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      Icon: Leaf,
      name: t('halal.title'),
      description: t('halal.description'),
      href: "/",
      cta: t('cta'),
      className: "col-span-3 lg:col-span-2",
      background: (
        <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
  ];

  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
