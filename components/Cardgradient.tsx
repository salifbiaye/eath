
import {useState} from "react";
import { motion } from 'framer-motion';


export function CardWithReadMore({ card, index }:any) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: index * 0.1}}
      className="group relative "
    >

      <div
        className="relative overflow-hidden rounded-xl min-h-[300px] p-8 transition-transform duration-300 hover:-translate-y-1">
        <div
          className={`absolute inset-0  opacity-10   bg-gradient-to-br ${card.gradient} transition-opacity duration-300 group-hover:opacity-20`}
        />
        <div className="relative  z-10">
          <div
            className={`mb-4 inline-flex rounded-[5px] p-3 bg-gradient-to-br ${card.gradient}`}
          >
            <card.icon className="h-6 w-6 text-white"/>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-muted-foreground">{card.title}</h3>
          <p className={`text-gray-900 ${isExpanded ? '' : 'line-clamp-3'}`}>{card.text}</p>
          {card.text.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              {isExpanded ? 'Lire moins' : 'Lire plus'}
            </button>
          )}
        </div>
        <div
          className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${card.gradient} transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
        />
      </div>
    </motion.div>
  )
}
