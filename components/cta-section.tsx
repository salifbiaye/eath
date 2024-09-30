import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, HeartHandshake } from "lucide-react";
import MarqueeIcon from "@/components/MarqueeIcon";
import {Globe} from "@/components/Globe";

export default function CTASection() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border-y p-14">
          <div
            className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
            <HeartHandshake className="mx-auto size-16 text-pink-500  lg:size-24"/>
          </div>
          <div className="inset-x-0  h-full ">
            <MarqueeIcon/>
            <div className="z-10 mt-32 flex flex-col items-center text-center text-black dark:text-white">
              <h1 className="text-3xl font-bold lg:text-4xl">
                La sécurité alimentaire ?<br/> c'est ensemble que nous la garantissons.
              </h1>
              <Globe className=" -right-10 md:-right-10 hidden lg:block "/>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
