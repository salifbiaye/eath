import {motion} from "framer-motion";



import {ServiceAi} from "@/components/ServiceAi";


export function ThreeDAiSection(){
  return (
    <motion.div
      className={` w-screen  relative  bg-background  pt-4`}>

      {/*<motion.h1 initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}}*/}
      {/*           transition={{type: "spring", stiffness: 100, damping: 25}}*/}
      {/*           className="text-2xl md:text-[3.5rem] font-gotham  font-bold absolute  left-0 right-0 text-center text-purpleSmart mb-10 ">*/}
      {/*    L'intelligence <br/>*/}
      {/*    <span*/}
      {/*        className="text-3xl md:text-[5rem] font-gotham font-bold  text-center z-50  mt-1 text-purpleSmart leading-none">*/}
      {/*                     Artificielle*/}
      {/*                   </span>*/}
      {/*</motion.h1>*/}
      <motion.div initial={{opacity: 0,}} whileInView={{opacity: 1,}}
                  transition={{type: "spring", stiffness: 100, damping: 25}}
                  className={`relative h-fit flex flex-col  items-center justify-center`}>

        <h2 className="font-heading font-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">L'intelligence Artificielle
        </h2>
        </motion.div>



      <ServiceAi/>
    </motion.div>
  );

}
