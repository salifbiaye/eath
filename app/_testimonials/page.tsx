import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Cyril M. Smith",
    username: "@cyrilsmith",
    body: "Cyril M. Smith est décédé après avoir consommé un plat contenant des allergènes non déclarés. Sa réaction allergique sévère a conduit à des complications fatales.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Sophie Grégoire Trudeau",
    username: "@sophiegr",
    body: "Sophie Grégoire Trudeau a souffert d'une grave réaction allergique due à une contamination croisée des aliments. Bien qu'elle ait survécu, les complications ont eu un impact durable sur sa santé.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Vladimir Putin",
    username: "@vputin",
    body: "Vladimir Putin a été victime d'une tentative d'empoisonnement au polonium-210. Bien que ce ne soit pas directement lié à la nourriture, cet incident met en lumière les dangers des substances toxiques.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Mahatma Gandhi",
    username: "@gandhi",
    body: "Mahatma Gandhi a souffert de nombreux problèmes de santé liés à son alimentation pendant ses périodes de jeûne. Bien que la cause principale de son décès ait été une balle, ses habitudes alimentaires ont contribué à ses problèmes de santé.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jimi Hendrix",
    username: "@jimi",
    body: "Jimi Hendrix est décédé d'une surdose de médicaments, exacerbée par ses problèmes de santé digestifs et alimentaires. Ses habitudes alimentaires ont joué un rôle dans ses problèmes de santé.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Marlon Brando",
    username: "@brando",
    body: "Marlon Brando est décédé des suites de complications de santé liées à une alimentation inadéquate et à un excès de poids, contribuant à ses problèmes médicaux graves.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Karen Carpenter",
    username: "@kcarpenter",
    body: "Karen Carpenter est décédée des suites d'une anorexie sévère, un trouble lié à une alimentation inadéquate et à des problèmes de santé alimentaire.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Anton Pavlovich Chekhov",
    username: "@chekhov",
    body: "Anton Pavlovich Chekhov est décédé de la tuberculose, mais il a souffert de problèmes de santé liés à une alimentation inadéquate et à des maladies infectieuses.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Alexander Litvinenko",
    username: "@Litvinenko",
    body: "Ancien agent des services secrets russes, Alexander Litvinenko a été empoisonné au polonium-210 en 2006. L'empoisonnement a eu lieu en grande partie lors d'une rencontre dans un restaurant de Londres. Son cas est bien documenté et a eu un large impact médiatique.",
    img: "https://avatar.vercel.sh/jack",
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

const MarqueeDemo = () => {
  return (
    <div className="relative mt-10 flex size-full flex-col items-center justify-center overflow-hidden rounded-lg  pb-5">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 pt-10 text-center">
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
                    Tragédies Alimentaires
                  </h2>
                  <p className="text-muted-foreground max-w-[85%] pb-10 leading-normal sm:text-lg sm:leading-7">
                    Les Incidents Mortels dus aux Allergènes et Poisons.
                  </p>
                  {/* <MarqueeDemo /> */}
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
