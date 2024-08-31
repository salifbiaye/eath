import {motion} from "framer-motion";
import {ServiceSolution} from "./Servicesolution";



export function Solution(){
  return (
    <motion.div initial={{opacity: 0,}} whileInView={{opacity: 1,}}
                transition={{type: "spring", stiffness: 100, damping: 25}}
                className={`relative h-fit flex flex-col  items-center justify-center`}>

      <h2 className="font-heading font-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
        Voici les solutions
      </h2>
      <ServiceSolution/>


    </motion.div>

  );
}
