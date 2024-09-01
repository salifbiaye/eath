"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
// import MarqueeDemo from "./_testimonials/page"
import { Footer } from "react-day-picker"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { buttonVariants } from "@/registry/new-york/ui/button"
// import MailPage from "@/app/(app)/examples/mail/page"
import { buttonVariants } from "@/components/ui/button"
import { Announcement } from "@/components/announcement"
// import { Announcement } from "@/components/announcement"
// import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import AvatarCircles from "@/components/magicui/avatar-circles"
import { BorderBeamm } from "@/components/magicui/border-beam"
import LinearGradient from "@/components/magicui/linear-gradient"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { SiteFooter } from "@/components/site-footer"

import FaqPage from "@/app/a-propos/page"
import Features from "@/app/_features/page"
import OrbitingCirclesDemo from "@/app/_integrations/page"
// import  { SiteFooter }  from "../components/site-footer"
import PricingPage from "@/app/fonctionnement/page"
import MarqueeDemo from "@/app/_testimonials/page"
import { SiteHeader } from "@/components/site-header"
import CTASection from "@/components/cta-section"
import {LinkApp} from "@/components/LinkApp";
import {Solution} from "@/components/Solution";
import {useEffect} from "react";
import BentoObjectif from "@/components/BentoObjectif";
import {ThreeDAiSection} from "@/components/ThreeDAiSection";
import * as React from "react";
import Ripple from "@/components/magicui/ripple";
import BoxReveal from "@/components/magicui/box-reveal";
const logo ='/logotitle.png'
const Container = ({
                     className,
                     children,
                   }: {
  className?: string;
  children: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};


export default function IndexPage() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ]
  const accueil = "/Accueil.mp4"
  const accueildark = "/accueil-dark.mp4"
  const iPhone12 = "/iPhone-12-Mockup.png"
  const samsung = "/samsung.png"
  const eath = "/Eath.mp4"
  const authentification = "/Authentification.mp4"
  const eathdark = "/Eath-dark.mp4"
  const authentificationdark = "/Authentification-dark.mp4"
const accueildarkimage= "/accueil-dark.png"
  const  accueilimage = "/Accueil.png"
  const authentificationimage = "/authentification.png"
  const eathimage = "/eath.png"
  const authentificationdarkimage = "/authentificationdark.png"
  const eathdarkimage = "/eathdark.png"
  return (
    // <div className="container relative overflow-hidden">
    <section id="hero">
      <div className="flex flex-col gap-6 overflow-x-hidden px-7 text-center items-center">

        <div className="relative h-screen w-screen flex flex-col gap-4 items-center justify-center lg:flex-row">

        <div>

            <h1
              className="relative flex flex-row max-w-[43.5rem] gap-1 text-balance bg-gradient-to-br from-primary from-50% to-neutral-200/60 bg-clip-text pt-5 text-center font-semibold tracking-tighter text-transparent text-7xl md:text-9xl mx-auto md:px-4 md:py-2  dark:text-white">
              <img src={logo} alt="logo" className="  rounded-full"/>

            </h1>
        </div>

          <Ripple/>
        </div>
        <p
          className="max-w-xl text-balance  text-base tracking-tight text-black text-center md:text-lg dark:font-medium dark:text-white">
          révolutionnons la sécurité{" "}
          <span className="font-bold text-black dark:text-white">
                  alimentaire
                </span>
          ,{" "}
          <span className="font-bold text-black dark:text-white">
                  dans le monde
                </span>
          .
          <br/>
        </p>


        <div className="relative  rounded-xl lg:block">
          <video
            className="w-full h-auto hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg dark:md:block"
            autoPlay
            muted
            playsInline
                 hidden
            disablePictureInPicture
            loop
            controls={false}
            style={{pointerEvents: 'none'}}

          >
            <source src={accueildark} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <img src={accueildarkimage}
               className={"w-full h-auto dark:block hidden dark:md:hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg "}/>
          <video
            className="w-full h-auto  hidden md:block max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg dark:hidden"
            autoPlay
            muted
            playsInline
            hidden
            disablePictureInPicture
            loop
            controls={false}
            style={{pointerEvents: 'none'}}

          >
            <source src={accueil} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <img src={accueilimage}
               className={"w-full h-auto block md:hidden dark:hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg "}/>
          <BorderBeamm size={250} duration={12} delay={9}/>
          {/* <Features /> */}
        </div>

        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 pt-20 text-center">
          <h2 className="font-heading font-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
            Problèmes
          </h2>
          <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
            Dans le contexte actuel, assurer la sécurité alimentaire est devenu une priorité cruciale pour protéger la
            santé des consommateurs. Les applications de gestion de la sécurité alimentaire doivent aborder plusieurs
            défis majeurs pour garantir une alimentation saine et sécurisée. Voici les principaux problèmes que notre
            application vise à résoudre
          </p>
        </div>

        <div className="container relative mx-auto mt-32 w-full max-w-[1000px]">
          <motion.span
            animate={["initial"]}
            whileHover={["hover"]}
            variants={{
              hover: {
                scale: 1.1,
                rotate: -6,
                transition: {
                  duration: 0.2,
                },
              },
              initial: {
                y: [-8, 8],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
            }}
            className="absolute -top-16 left-0 right-auto cursor-pointer lg:-top-20"
          >
                  <span className="flex items-center">
                    <span
                      className="mt-3 inline-block whitespace-nowrap rounded-full bg-neutral-800 px-4 py-1.5 text-[12px] font-semibold uppercase leading-5 tracking-wide text-white">
                      Problèmes
                    </span>
                    <svg
                      className="mr-6 h-8 w-14 [transform:rotateY(180deg)rotateX(0deg)]"
                      width="45"
                      height="25"
                      viewBox="0 0 45 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                        fill="currentColor"
                        className="fill-gray-300 dark:fill-gray-700"
                      />
                    </svg>
                  </span>
          </motion.span>
          <Features/>
        </div>
      </div>
      <div className="  flex  flex-col items-center space-y-4 pt-20  mb-52 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
          Objectifs
        </h2>
        <p className="text-muted-foreground max-w-[85%] pb-10 leading-normal sm:text-lg sm:leading-7">
          L'objectif principal de notre application de sécurité alimentaire est de garantir la sécurité et la qualité
          des aliments que vous consommez, en offrant des outils puissants pour détecter les risques potentiels et
          fournir des informations cruciales dans le monde entier.
        </p>
        <BentoObjectif/>
      </div>
      <Solution/>
      <ThreeDAiSection/>
      <div className="max-w-7xl mx-auto flex px-5 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1
            className="mb-5 sm:text-6xl  text-purpleSmart text-5xl font-bold font-gotham items-center Avenir xl:w-2/2 ">
            Avec Eath,
          </h1>
          <p className="mb-4 xl:w-3/4 text-greenSmart font-bold font-gotham  text-lg">
            profitez d'une expérience multiplateforme exceptionnelle sur Android, iPhone et bien plus
            encore.
          </p>

        </div>
        <div
          className="xl:mr-44 sm:mr-0 flex flex-row max-h-[calc(100vh-15vh)]   sm:mb-28  mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-40 lg:w-80 md:ml-1 "
            alt="iPhone-12"
            src={iPhone12}
          ></img>
          <img
            className="w-40 lg:w-80   md:ml-1 "
            alt="iPhone-12"
            src={samsung}
          ></img>
        </div>
      </div>

      <h2 className="font-heading text-3xl text-center mb-3  mt-8 leading-[1.1] sm:text-3xl md:text-3xl font-bold">
        Accédez à votre espace personnel <br/>
        avec une sécurité renforcée.
      </h2>

      <div className={`px-7 mb-8 flex flex-col  items-center justify-center`}>
        <div className="relative  rounded-xl lg:block">
          <video
            className="w-full h-auto hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg dark:md:block"
            autoPlay
            muted
            playsInline
            hidden
            disablePictureInPicture
            loop
            controls={false}
            style={{pointerEvents: 'none'}}

          >
            <source src={authentificationdark} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <img src={authentificationdarkimage}
               className={"w-full h-auto dark:block hidden dark:md:hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg "}/>
          <video
            className="w-full h-auto  hidden md:block max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg dark:hidden"
            autoPlay
            muted
            playsInline
            hidden
            disablePictureInPicture
            loop
            controls={false}
            style={{pointerEvents: 'none'}}

          >
            <source src={authentification} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <img src={authentificationimage}
               className={"w-full h-auto block md:hidden dark:hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg "}/>
          <BorderBeamm size={250} duration={12} delay={9}/>
          {/* <Features /> */}
        </div>

        <h2 className="font-heading text-3xl text-center mb-3  mt-8 leading-[1.1] sm:text-3xl md:text-3xl font-bold">
          Explorez notre contenu <br/>
          à travers ces pages fascinantes.
        </h2>
        <div className="relative  rounded-xl lg:block">
          <video
            className="w-full h-auto hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg dark:md:block"
            autoPlay
            muted
            playsInline
            hidden
            disablePictureInPicture
            loop
            controls={false}
            style={{pointerEvents: 'none'}}

          >
            <source src={eathdark} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <img src={eathdarkimage}
               className={"w-full h-auto dark:block hidden dark:md:hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg "}/>
          <video
            className="w-full h-auto  hidden md:block max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg dark:hidden"
            autoPlay
            muted
            playsInline
            hidden
            disablePictureInPicture
            loop
            controls={false}
            style={{pointerEvents: 'none'}}

          >
            <source src={eath} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <img src={eathimage}
               className={"w-full h-auto block md:hidden dark:hidden  max-w-[1200px] border-8 border-muted rounded-[inherit]  object-contain shadow-lg "}/>
          <BorderBeamm size={250} duration={12} delay={9}/>
          {/* <Features /> */}
        </div>
      </div>
      <MarqueeDemo/>
      <CTASection/>
      <LinkApp/>

    </section>

    // </div>
  )
}
