'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faVimeo,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {DropdownMenuSeparator} from "@/components/ui/dropdown-menu";
import React from "react";


type SocialLink = {
  icon: typeof faTwitter | typeof faFacebook | typeof faVimeo;
  href: string;
};

type Member = {
  img: string;
  name: string;
  designation: string;
  socialLinks: SocialLink[];
};

type Section = {
  title: string;
  description: string;
  members: Member[];
};
type Teamambition={
  title:string;
  description:string;
}
const teamSections: Section[] = [

  {
    title: "Le comité de management de eath",
    description: "equipe de direction de l'application mobile",
    members: [

      {
        img: "/images/KhalidYahouza.jpeg",
        name: "Khalid Yahouza ALMOU",
        designation: "co-fondateur de eath",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/CheikhounaThioune.jpeg",
        name: "Cheikhouna THIOUNE",
        designation: "PDG et co-fondateur de eath ,ancien Campus Director  HULT PRIZE à l'université Cheikh Anta Diop",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/EspoirMbongo.jpg",
        name: "Espoir MBONGO",
        designation: "co-fondateur de eath",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/AntonPROKHOROV.jpg",
        name: "Ahtoh Anton PROKHOROV",
        designation: "co-fondateur de eath",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
     ]
  },
  {
    title: "Pole Design",
    description: "equipe de design de l'application mobile",
    members: [
      {
        img: "/images/LouisDieme.jpeg",
        name: "Louis DIEME",
        designation: "UI design",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/CheikhBoye.jpeg",
        name: "Cheikh Boye",
        designation: "UI design",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/JeanMarie.jpeg",
        name: "Jean Marie",
        designation: "UI design",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },

    ],
  },
  {
    title: "Pole Développement ",
    description: "equipe de developpement de l'application mobile et de la plateforme web",
    members: [
      {
        img: "/images/MarietaSow.jpeg",
        name: "MarietaSow",
        designation: "Developpement backend",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/SalifBiaye.jpg",
        name: "Salif BIAYE",
        designation: "Developpement web",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "images/Rosalex.jpeg",
        name: "AHAN Rosalex",
        designation: "Developpement backend",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/YoussouphNiang.jpeg",
        name: "Youssouph Niang",
        designation: "Developpement mobile",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
    ],
  },
  {
    title: "Pole Base de données",
    description: "equipe de base de données de l'application mobile",
    members: [
      {
        img: "/images/ElhadjAbdouBoye.jpeg",
        name: "El hadj Abdou BOYE",
        designation: "Base de données",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/MariamaDiallo.jpeg",
        name: "Mariame Diallo",
        designation: "Base de données",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/DialikaThiaw.jpeg",
        name: "Dialika Thiaw",
        designation: "Base de données",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },

    ],
  },
  {
    title: "Pole Intelligence artificielle",
    description: "equipe de l'intelligence artificielle de l'application mobile",
    members: [
      {
        img: "/images/WillianeJaures.jpeg",
        name: "Willane Jaurès SABOUBANGA.",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "images/LaurianeMbagdje.jpeg",
        name: "Lauriane Mbagdje DORENAN",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "images/AbdouNdiaye.JPG",
        name: "Abdou Ndiaye",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "images/MamadouDiallo.jpeg",
        name: "Mamadou Saidou Diallo",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },

    ],
  },
];
const teamambitions:Teamambition[]=[
  {
    title:"Nos Origines",
    description:"Les membres de l'équipe de notre startup sont issus du milieu universitaire, passionnés dans le travail, nous relevons les défis en transformant ce qui est excellent en quelque chose de parfait, et ce qui est déjà parfait en une valeur plus que parfaite."
  },
  {
    title:"Notre Motivation",
    description:"Ayant été inspirés par les épisodes de crises récentes : COVID 19, guerres, pauvreté, famine, dégradation de l'environnement, chômage des jeunes, nous nous sommes levés pour embrasser la responsabilité sociale de nos communautés."
  },
  {
    title:"Notre Ambition",
    description:"C'est ce qui fait que nous sommes une startup à haut potentiel. Notre application mobile pourrait perturber beaucoup de secteurs, car toute innovation implique des changements. Aussi, nos contributions aux défis et problèmes urgents sont claires, accessibles et de bonne qualité."
  },
  {
    title:"Notre Expertise",
    description:"En abordant le problème de la sécurité alimentaire dans le monde, cela signifie que nous avons une connaissance approfondie du problème et de la cible. Nous interagissons régulièrement avec nos utilisateurs sur la base de retour d'information, après plusieurs tests de fiabilité de notre application."
  },
  {
    title:"Notre Modèle d'Entreprise",
    description:"Notre modèle d'entreprise sociale entend satisfaire des exigences sociales en matière de sécurité alimentaire et de santé publique, deux piliers majeurs des ODD. Mais notre startup compte surtout générer des revenus par le rapport adéquation : problème/solution, produit/marché, demande/offre."
  },
  {
    title:"Notre Impact",
    description:"En définitive, notre startup Eath aura un impact positif significatif sur l'environnement et les populations pour les années à venir."
  }
];
type TeamMemberItemProps = {
  member: Member;
};

const TeamMemberItem: React.FC<TeamMemberItemProps> = ({ member }) => (
  <motion.div
    initial={{opacity: 0, y: 200}}
    whileInView={{opacity: 1, y: 0}}
    transition={{type: "spring", stiffness: 100, damping: 25}}
    className="group relative "
  >
    <div
      className="h-96 w-96 bg-cover bg-center rounded-[10px]  mx-auto"
      style={{backgroundImage: `url(${member.img})`}}
    ></div>
    <div
      className="absolute -bottom-12  rounded-[10px] left-[10%] p-5 w-[80%] bg-white shadow-xl dark:bg-slate-800 text-center overflow-hidden z-[1] group-hovetext-secondary group-hover:pt-7 group-hover:px-5 group-hover:pb-20 duration-300 group-hover:bg-muted">
      <h3 className="text-xl font-semibold leading-normal opacity-80 mb-1">
        {member.name}
      </h3>
      <p className="text-[14px] leading-normal opacity-80 mb-2">
        {member.designation}
      </p>

      <div
        className="absolute w-full left-0 top-auto opacity-0  translate-y-7 group-hover:opacity-100 group-hover:translate-y-0 mt-1 ">
        {/*<ul className="flex justify-center items-center">*/}
        {/*  {member.socialLinks.map((item, i) => (*/}
        {/*    <li key={i}>*/}
        {/*      <a*/}
        {/*        href={item.href}*/}
        {/*        className="w-10 h-10 text-[26px] text-center hover:text-secondary dark:hover:text-white mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] transition duration-300"*/}
        {/*      >*/}
        {/*        <FontAwesomeIcon icon={item.icon}/>*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </div>
    </div>
  </motion.div>
);

type TeamSectionProps = {
  section: Section;
};

const TeamSection: React.FC<TeamSectionProps> = ({section}) => (
  <section className="ezy__team12 light py-14 md:py-24 bg-background text-foreground dark:text-secondary overflow-hidden">
    <div className="container px-4 mx-auto">
      <div className="flex justify-center text-center">
        <div className="sm:max-w-md">
          <h3 className="text-3xl text-primary leading-none md:text-[45px] font-bold">
            {section.title}
          </h3>
          <p className="text-[17px] leading-normal opacity-80 mt-4 mb-12">
            {section.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {section.members.map((member, i) => (

          <div className="col-span-3 lg:col-span-1 my-12  xl:p-12g" key={i}>
      <TeamMemberItem member={member}/>
              </div>
        ))}
      </div>
    </div>
  </section>
);

export default function TeamMember() {
  return (
    <motion.div
      initial={{opacity: 0, y: 200}}
      animate={{opacity: 1, y: 0}}
      transition={{type: "spring", stiffness: 100, damping: 25, delay: 0.5}}
    >

      <div className="bg-background py-14 md:py-24 w-screen">
        <div className=" px-4 mx-auto w-screen">
          <div className="flex ">
            <div className="max-full text-white text-center">
              <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold text-center text-secondary mb-10 mt-4">
                Rencontrez <br/>
                <span
                  className="text-5xl md:text-[6rem] font-gotham font-bold text-center mt-1 text-primary leading-none">
                    notre equipe
                </span>
              </h1>
              <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamambitions.map((teamambition,i)=>(
                  <Card className="shadow-lg rounded-lg bg-white dark:bg-muted">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{teamambition.title}</CardTitle>
                    </CardHeader>
                    <DropdownMenuSeparator className={"bg-muted dark:bg-muted-foreground  w-96 mx-auto"}/>
                    <CardContent>
                      <CardDescription className="text-lg leading-relaxed">
                        {teamambition.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {teamSections.map((section, i) => (
        <TeamSection section={section} key={i}/>
      ))}
    </motion.div>
  );
};
