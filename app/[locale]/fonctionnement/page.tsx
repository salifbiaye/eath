'use client'
import { motion } from 'framer-motion';
import Service from "@/components/special/Service";
import ServiceList from "@/components/special/ServiceList";




export default function  Fonctionnement() {
  return (
    <motion.div initial={{opacity: 0, y: 200}}  animate={{opacity: 1, y: 0}}
                transition={{type: "spring", stiffness: 100, damping: 25 ,delay:0.5}} className={`h-full`}>

      <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold  text-center text-secondary mb-10 mt-4">
        Le fonctionnement de <br/>
        <span
          className="text-5xl md:text-[6rem] font-gotham font-bold  text-center  mt-1 text-primary leading-none">
                                  eath
                               </span>
      </h1>

      <Service/>

      <ServiceList/>
    </motion.div>
  );
}
