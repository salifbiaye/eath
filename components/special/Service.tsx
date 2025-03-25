
import { useTranslations } from 'next-intl';
import { Apple, Leaf, LucideIcon, Shield, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export default function Service() {
  const t = useTranslations('functioningPage.services');

  const serviceList: Service[] = [
    {
      title: t('list.ingredients.title'),
      description: t('list.ingredients.description'),
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: t('list.allergens.title'),
      description: t('list.allergens.description'),
      icon: ShieldAlert,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: t('list.halal.title'),
      description: t('list.halal.description'),
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: t('list.nutrition.title'),
      description: t('list.nutrition.description'),
      icon: Apple,
      color: 'from-pink-500 to-rose-600',
    },
  ];
  const ServiceItem: React.FC<{ service: Service }> = ({ service }) => (
    <motion.div
      key={service.title}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5 * 0.2}}
      className="group relative mb-6"
    >
      <div className="relative overflow-hidden rounded-3xl  bg-gray-200/50 dark:bg-gray-900/50 backdrop-blur-sm">
        {/* Animated gradient border */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]"/>

        <div className="relative p-8">
          <div className="flex items-center gap-6">
            <div
              className={`rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
            >
              <service.icon className="h-8 w-8 text-white"/>
            </div>
            <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
          </div>
          <p className="mt-6 text-gray-900 dark:text-muted-foreground">{service.description}</p>

          {/* Decorative elements */}
          <div
            className={`absolute right-0 top-0 h-24 w-24 bg-gradient-to-br ${service.color} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30`}
          />
          <div
            className={`absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-br ${service.color} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30`}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div>
      <section className="ezy__service20 light py-14 md:py-24 bg-background text-foreground relative z-[1] overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-3xl md:text-[40px] font-bold leading-normal mb-4">
                {t('mainTitle')}
              </h2>
              <p className="text-[17px] leading-normal opacity-80">
                {t('subtitle')}
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-2 gap-3 ">
                <div className="col-span-2  md:col-span-1">
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
}

