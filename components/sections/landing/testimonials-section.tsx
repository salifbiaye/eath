import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useTranslations } from 'next-intl';

const ReviewCard = ({ img, name, username, body }: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-secondary",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  const t = useTranslations('HomePage.testimonials');

  const reviews = [
    {
      name: "Cyril M. Smith",
      username: "@cyrilsmith",
      body: t('cases.0.body'),
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Sophie Grégoire Trudeau",
      username: "@sophiegr",
      body: t('cases.1.body'),
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Vladimir Putin",
      username: "@vputin",
      body: t('cases.2.body'),
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Mahatma Gandhi",
      username: "@gandhi",
      body: t('cases.3.body'),
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jimi Hendrix",
      username: "@jimi",
      body: t('cases.4.body'),
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Marlon Brando",
      username: "@brando",
      body: t('cases.5.body'),
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Karen Carpenter",
      username: "@kcarpenter",
      body: t('cases.6.body'),
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Anton Pavlovich Chekhov",
      username: "@chekhov",
      body: t('cases.7.body'),
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Alexander Litvinenko",
      username: "@Litvinenko",
      body: t('cases.8.body'),
      img: "https://avatar.vercel.sh/jack",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative mt-10 flex size-full flex-col items-center justify-center overflow-hidden rounded-lg pb-5">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 pt-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
          {t('title')}
        </h2>
        <p className="text-muted-foreground max-w-[85%] pb-10 leading-normal sm:text-lg sm:leading-7">
          {t('subtitle')}
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-white"></div>
    </div>
  );
};

export default MarqueeDemo;
