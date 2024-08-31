import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import {
  HeartHandshake,
  HeartPulse,
  Users,
  Heart,
  Gift,
  UserPlus,
  Share,
  HelpCircle,
} from 'lucide-react';
import {IconHelp, IconUsersGroup} from "@tabler/icons-react";
const reviews = [
  {
    icon: <HeartHandshake className="mx-auto size-16 text-pink-500 lg:size-18" />,
  },
  {
    icon: <HeartPulse className="mx-auto size-16 text-red-500 lg:size-18" />,
  },
  {
    icon: <Users className="mx-auto size-16 text-blue-500 lg:size-18" />,
  },
  {
    icon: <Heart className="mx-auto size-16 text-rose-500 lg:size-18" />,
  },
  {
    icon: <Gift className="mx-auto size-16 text-yellow-500 lg:size-18" />,
  },
  {
    icon: <UserPlus className="mx-auto size-16 text-green-500 lg:size-18" />,
  },
  {
    icon: <Share className="mx-auto size-16 text-teal-500 lg:size-18" />,
  },
  {
    icon: <HelpCircle className="mx-auto size-16 text-indigo-500 lg:size-18" />,
  },
  {
    icon: <IconHelp className="mx-auto size-16 text-orange-500 lg:size-18" />,
  },
  {
    icon: <HeartHandshake className="mx-auto size-16 text-purple-500 lg:size-18" />,
  },

  {
    icon: <IconUsersGroup className="mx-auto size-16 text-pink-400 lg:size-18" />,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
                      img,
                      name,
                      username,
                      body,
                    }: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-secondary",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeIcon = () => {
  return (
    <div className="relative   flex size-full flex-col items-center justify-center overflow-hidden rounded-lg  pb-5">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 pt-10 text-center">

        {/* <MarqueeDemo /> */}
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            {item.icon}
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((item,index) => (
          <div key={index} className="flex justify-center items-center">
            {item.icon}
          </div>
        ))}
      </Marquee>
      <div
        className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white"></div>
      <div
        className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-white"></div>
    </div>
  );
};

export default MarqueeIcon;
