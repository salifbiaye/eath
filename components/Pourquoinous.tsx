
interface Feature {
  title: string;
  text: string;

}

const contents: Feature[] = [
  {
    title: "Sécurité Alimentaire",
    text: "Grâce à notre analyse précise, vous pouvez consommer vos repas en toute sécurité.",
  },
  {
    title: "Conformité et Respect",
    text: " Répondre aux exigences alimentaires spécifiques telles que les normes Halal.",
  },
  {
    title: "Prévention des Allergies",
    text: " Évitez les réactions allergiques grâce à la détection des allergènes.",
  },
  {
    title: "Santé et Bien-être",
    text: " Comprenez les apports nutritionnels de vos repas et faites des choix alimentaires sains.",
  },
];

const ContentItem = ({ item, index }:any) => (
  <div className="p-4 lg:p-6  text-center">
    <div className="text-lg font-bold flex justify-center items-center">
			<span className="w-12 h-12 bg-secondary  flex justify-center items-center rounded-full mb-4">
				{index}
			</span>
    </div>
    <h5 className=" text-foreground text-xl font-bold mb-4">{item.title}</h5>
    <p className=" text-foreground opacity-80 mb-0">{item.text}</p>
  </div>
);


const Pourquoinous = () => {
  return (
    <section className="ezy__howitworks4 light pb-14 md:pb-24 bg-background text-zinc-900 ">
      <div className="bg-primary py-14 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center">
            <div className="max-w-xl text-white text-center">
              <h1 className="text-3xl md:text-[45px] lg:text-[55px] font-bold leading-snug mb-4">
                Pourquoi choisir Eath?
              </h1>
              <p className="text-[17px] leading-normal opacity-80">
                On estime que 600 millions de personnes tombent malades après avoir mangé des aliments contaminés chaque année dans le monde selon l'OMS, entraînant 420 000 décès, les enfants de moins de 5 ans supportent 40 % de la charge de morbidité imputable aux maladies d’origine alimentaire et 125 000 en meurent chaque année avec une perte de 33 millions d’années de vie en bonne santé.  C'est à cet effet que notre application mobile Eath permet de sauver des vies et garantit que ce que nous mangeons ne présente aucun danger.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-4 gap-6 mt-12">
          {contents.map((item, i) => (
            <div className="text-white col-span-4 md:col-span-2 lg:col-span-1" key={i}>
              <ContentItem index={i + 1} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pourquoinous;
