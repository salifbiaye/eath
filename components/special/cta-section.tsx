import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, HeartHandshake } from "lucide-react";
import MarqueeIcon from "@/components/special/MarqueeIcon";
import { Globe } from "@/components/special/Globe";
import Ripple from "@/components/magicui/ripple";
import * as React from "react";
import { useTranslations } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('HomePage.cta');

  return (
    <section id="cta">
      <div className="py-14">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border-y p-14">
          <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
            <HeartHandshake className="mx-auto size-16 text-pink-500 lg:size-24"/>
          </div>
          <div className="inset-x-0 h-full">
            <MarqueeIcon/>
            <div className="z-10 flex flex-col items-center text-center text-black dark:text-white">
              <Globe/>
              <h1 className="text-3xl font-bold lg:text-4xl">
                {t('title')}<br/>{t('subtitle')}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
