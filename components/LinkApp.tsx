import { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));
const call ="/eath-call.png"
export const LinkApp = () => {
  return (
    <div
      className=" light  text-white bg-secondary relative"

    >
      <div
        className=" "

      />

      <div className=" relative w-screen">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 text-center">
            <h2 className="text-3xl leading-none md:text-[70px] font-bold mb-6">
              Disponible sur toutes les plateformes
            </h2>
            <p className="text-[22px] leading-normal  lg:px-24 xl:px-64">
              Notre application mobile de sécurité alimentaire est maintenant accessible sur l'App Store et le Google Play Store. Que vous soyez utilisateur d’iOS ou d’Android, vous pouvez profiter de notre technologie avancée pour scanner et vérifier la sécurité des aliments, où que vous soyez. Téléchargez-la dès aujourd’hui pour une alimentation plus sûre et plus consciente !"
            </p>

            <div className="flex items-center justify-center mt-12">
              <a href="#!" className="shadow m-1">
                <img
                  src="https://cdn.easyfrontend.com/pictures/hero/play-app-android.png"
                  alt=""
                />
              </a>
              <a href="#!" className="shadow m-1">
                <img
                  src="https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png"
                  alt=""
                />
              </a>
            </div>

          </div>
          <div className="col-span-12 h-fit  relative w-screen ">
            {/*<Suspense fallback={<div>Loading...</div>}>*/}
            {/*  <Spline scene="https://prod.spline.design/OSAR8C1qASBT690h/scene.splinecode" />*/}
            {/*</Suspense>*/}
            <img className={"w-full h-auto"}
              src={call}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

