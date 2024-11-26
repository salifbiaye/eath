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
import {Building2, Flag, Github, Globe, Lightbulb, Linkedin, Target, Twitter, Users} from "lucide-react";


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
  icon:any;
  description:string;
  gradient:string;
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
        name: "Cheikh BOYE",
        designation: "UI design",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/JeanMarie.jpeg",
        name: "Jean MARIE",
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
        name: "Marieta SOW",
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
        name: "Ahan ROSALEX",
        designation: "Developpement backend",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/YoussouphNiang.jpeg",
        name: "Youssouph NIANG",
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
        name: "Mariame DIALLO",
        designation: "Base de données",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "/images/DialikaThiaw.jpeg",
        name: "Dialika THIAW",
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
        img: "images/AbdouNdiaye.jpg",
        name: "Abdou NDIAYE",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: faTwitter, href: "#!" },
          { icon: faFacebook, href: "#!" },
          { icon: faVimeo, href: "#!" },
        ],
      },
      {
        img: "images/MamadouDiallo.jpeg",
        name: "Mamadou Saidou DIALLO",
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
const teamambitions:Teamambition[] =  [
  {
    title: 'Nos Origines',
    icon: Users,
    description:
      'Les membres de l\'équipe de notre startup sont issus du milieu universitaire, passionnés dans le travail, nous relevons les défis en transformant ce qui est excellent en quelque chose de parfait.',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Notre Motivation',
    icon: Flag,
    description:
      'Ayant été inspirés par les épisodes de crises récentes : COVID 19, guerres, pauvreté, famine, dégradation de l\'environnement, chômage des jeunes, nous nous sommes levés pour embrasser la responsabilité sociale de nos communautés.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Notre Ambition',
    icon: Target,
    description:
      'C\'est ce qui fait que nous sommes une startup à haut potentiel. Notre application mobile pourrait perturber beaucoup de secteurs, car toute innovation implique des changements.',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Notre Expertise',
    icon: Lightbulb,
    description:
      'En abordant le problème de la sécurité alimentaire dans le monde, nous avons une connaissance approfondie du problème et de la cible.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Notre Modèle d\'Entreprise',
    icon: Building2,
    description:
      'Notre modèle d\'entreprise sociale entend satisfaire des exigences sociales en matière de sécurité alimentaire et de santé publique.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Notre Impact',
    icon: Globe,
    description:
      'En définitive, notre startup Eath aura un impact positif significatif sur l\'environnement et les populations pour les années à venir.',
    gradient: 'from-violet-500 to-purple-500'
  }
]
type TeamMemberItemProps = {
  member: Member;
};

const TeamMemberItem: React.FC<TeamMemberItemProps> = ({ member }) => (
  <motion.div
    key={member.name}
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.5 * 0.2}}
    className="group relative"
  >
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-900">

      <div
        className="absolute inset-0 bg-gradient-to-t  from-primary  via-gray-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>


      <motion.div
        className="h-full w-full"
        whileHover={{scale: 1.05}}
        transition={{duration: 0.4}}
      >
        <img
          src={member.img}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div
          className="translate-y-8 transform space-y-2 text-center transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-2xl font-bold text-white">{member.name}</h3>
          <p className="text-lg text-white">{member.designation}</p>

          {/* Social links */}
          {/*<div className="flex justify-center space-x-4 pt-4">*/}
          {/*  <a*/}
          {/*    href={member.socialLinks[0].href}*/}
          {/*    className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"*/}
          {/*  >*/}
          {/*    <Linkedin className="h-5 w-5"/>*/}
          {/*  </a>*/}
          {/*  <a*/}
          {/*    href={member.socialLinks[0].href}*/}
          {/*    className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"*/}
          {/*  >*/}
          {/*    <Twitter className="h-5 w-5"/>*/}
          {/*  </a>*/}
          {/*  <a*/}
          {/*    href={member.socialLinks[0].href}*/}
          {/*    className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"*/}
          {/*  >*/}
          {/*    <Github className="h-5 w-5"/>*/}
          {/*  </a>*/}

          {/*</div>*/}
        </div>
      </div>
    </div>
  </motion.div>
);

type TeamSectionProps = {
  section: Section;
};

const TeamSection: React.FC<TeamSectionProps> = ({section}) => (
  <section
    className="ezy__team12 light py-14 md:py-24 bg-background  dark:text-secondary overflow-hidden">
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
                {teamambitions.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: index * 0.1}}
                  >
                    <Card className="group relative rounded-[5px] border-muted dark:bg-muted h-full overflow-hidden">
                      <div
                        className={`absolute inset-0 opacity-0 bg-gradient-to-br ${section.gradient} transition-opacity duration-300 group-hover:opacity-10`}
                      />
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div
                            className={`rounded-[5px] p-2 bg-gradient-to-br ${section.gradient}`}
                          >
                            <section.icon className="h-6 w-6 text-white"/>
                          </div>
                          <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-900 dark:text-muted-foreground">{section.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
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
