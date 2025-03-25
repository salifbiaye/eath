'use client'

import React from "react";
import { Building2, Flag, Globe, Lightbulb, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

type SocialLink = {
  icon: any;
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

type Teamambition = {
  title: string;
  icon: any;
  description: string;
  gradient: string;
};

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
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/CheikhounaThioune.jpeg",
        name: "Cheikhouna THIOUNE",
        designation: "PDG et co-fondateur de eath, ancien Campus Director HULT PRIZE à l'université Cheikh Anta Diop",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/EspoirMbongo.jpg",
        name: "Espoir MBONGO",
        designation: "co-fondateur de eath",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/AntonPROKHOROV.jpg",
        name: "Ahtoh Anton PROKHOROV",
        designation: "co-fondateur de eath",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
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
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/CheikhBoye.jpg",
        name: "Cheikh BOYE",
        designation: "UI design",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/JeanMarie.jpeg",
        name: "Jean MARIE",
        designation: "UI design",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
    ],
  },
  {
    title: "Pole Développement",
    description: "equipe de developpement de l'application mobile et de la plateforme web",
    members: [
      {
        img: "/images/MarietaSow.jpeg",
        name: "Marieta SOW",
        designation: "Developpement backend",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/SalifBiaye.jpg",
        name: "Salif BIAYE",
        designation: "Developpement web",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "images/Rosalex.jpeg",
        name: "Ahan ROSALEX",
        designation: "Developpement backend",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/YoussouphNiang.jpeg",
        name: "Youssouph NIANG",
        designation: "Developpement mobile",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
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
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/MariamaDiallo.jpeg",
        name: "Mariame DIALLO",
        designation: "Base de données",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "/images/DialikaThiaw.jpeg",
        name: "Dialika THIAW",
        designation: "Base de données",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
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
        name: "Willane Jaurès SABOUBANGA",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "images/LaurianeMbagdje.jpeg",
        name: "Lauriane Mbagdje DORENAN",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "images/AbdouNdiaye.jpg",
        name: "Abdou NDIAYE",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
      {
        img: "images/MamadouDiallo.jpeg",
        name: "Mamadou Saidou DIALLO",
        designation: "Intelligence artificielle",
        socialLinks: [
          { icon: "twitter", href: "#!" },
          { icon: "facebook", href: "#!" },
          { icon: "vimeo", href: "#!" },
        ],
      },
    ],
  },
];

const teamambitions: Teamambition[] = [
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
];

const TeamAmbitionsSection = () => {
  return (
    <div className="bg-background py-14 md:py-24 w-full">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="flex">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-[3.5rem] font-bold text-center text-secondary mb-10 mt-4">
              Rencontrez <br/>
              <span className="text-5xl md:text-[6rem] font-bold text-center mt-1 text-primary leading-none">
                notre equipe
              </span>
            </h1>
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamambitions.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.3, delay: index * 0.1}}
                >
                  <Card className="group relative rounded-[5px] border-muted dark:bg-muted h-full overflow-hidden hover:shadow-lg transition-all duration-300">
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
  );
};

export default function TeamMember() {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{type: "spring", stiffness: 100, damping: 25, delay: 0.2}}
      className="bg-background"
    >
      <TeamAmbitionsSection />

      {teamSections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="bg-gray-50 py-16 md:py-24 dark:bg-transparent"
        >
          <div className="mx-auto max-w-6xl border-t px-6">
            <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950 text-primary font-medium">
              {section.title.split(' ').slice(-1)[0]}
            </span>
            <div className="mt-12 gap-8 sm:grid sm:grid-cols-2 md:mt-16">
              <div className="sm:w-4/5">
                <h2 className="text-3xl font-bold sm:text-4xl text-primary">{section.title}</h2>
              </div>
              <div className="mt-6 sm:mt-0">
                <p className="text-muted-foreground text-lg">{section.description}</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {section.members.map((member, index) => (
                  <div key={index} className="group relative overflow-hidden cursor-pointer">
                    <div className="relative overflow-hidden rounded-md">
                      <div className=" h-96 rounded-[10px] w-full overflow-hidden group-hover:h-[22.5rem] transition-all duration-500">
                        <img
                          className="h-full  w-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 group-hover:rounded-[20px]"
                          src={member.img || "/placeholder.svg"}
                          alt={member.name}
                          width="826"
                          height="1239"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="px-2 pt-4 sm:pb-0 sm:pt-5">
                      <div className="flex justify-between items-center">
                        <h3 className="text-title text-lg font-medium transition-all duration-500 group-hover:tracking-wider group-hover:text-primary">{member.name}</h3>
                        <span className="text-xs text-muted-foreground font-mono">_0{index + 1}</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </motion.div>
  );
}
