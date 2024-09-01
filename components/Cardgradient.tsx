import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from './ui/card';


import {
  IconAccessible,
  IconAlertTriangle,
  IconCarrot,
  IconColorSwatch,
  IconDevices,
  IconEye,
  IconFlag,
  IconFlask,
  IconHistory,
  IconPyramid,
  IconHeart,
  IconTrophy,
  IconUsers,
} from '@tabler/icons-react';
import { Badge } from './ui/badge';
import {rem} from "@mantine/core";
import {DropdownMenuSeparator} from "@/components/ui/dropdown-menu";

interface IconMapping {
  "Mission": JSX.Element;
  "Vision": JSX.Element;
  "Valeurs": JSX.Element;
  "Origine": JSX.Element;
  "Technologie": JSX.Element;
  "Analyse Précise des Ingrédients": JSX.Element;
  "Conformité Halal": JSX.Element;
  "Détection des Allergènes": JSX.Element;
  "Substances Nocives et Nutrition": JSX.Element;
  "Apport Nutritionnel": JSX.Element;
  "Inclusion Sociale": JSX.Element;
  "Nos cibles": JSX.Element;
}

const iconMapping: IconMapping = {
  "Mission": <IconFlag style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Vision": <IconEye style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Valeurs": <IconHeart style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Origine": <IconHistory style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Technologie": <IconDevices style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Analyse Précise des Ingrédients": <IconFlask style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Conformité Halal": <IconTrophy style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Détection des Allergènes": <IconPyramid style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Substances Nocives et Nutrition": <IconAlertTriangle style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Apport Nutritionnel": <IconCarrot style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Inclusion Sociale": <IconAccessible style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
  "Nos cibles": <IconUsers style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
};

export function CardGradient({ title, text }: { title: string; text: string }) {
  const icon = iconMapping[title as keyof IconMapping] || <IconColorSwatch style={{ width: rem(28), height: rem(28) }} stroke={1.5} />;

  return (
    <Card className="shadow-lg h-96 p-4 rounded-lg bg-background dark:bg-muted relative" >
     <CardHeader>
       <CardTitle className={`flex flex-row gap-4`}>
         <Badge variant={"outline"} className="mb-4">
           {icon}
         </Badge>
         {title}
       </CardTitle>
       <DropdownMenuSeparator className={`bg-muted dark:bg-muted-foreground`}/>
     </CardHeader>
      <CardContent>
        <CardDescription>
          {text}
        </CardDescription>
      </CardContent>
      <CardFooter>

      </CardFooter>
<div className={`absolute left-0  top-0 bottom-0 w-3 bg-secondary rounded-l-lg`}>

</div>

    </Card>
  );
}
