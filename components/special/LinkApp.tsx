import { lazy, Suspense } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { useTranslations } from 'next-intl';

const Spline = lazy(() => import("@splinetool/react-spline"));
const call = "/assets/eath-call.png";

export const LinkApp = () => {
  const t = useTranslations('HomePage.linkApp');

  return (
    <div className="light text-white bg-secondary relative">
      <div className="" />
      <div className="relative w-screen">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 text-center">
            <h2 className="text-3xl leading-none md:text-[70px] font-bold mb-6">
              {t('title')}
            </h2>
            <div className="text-[22px] leading-normal lg:px-24 xl:px-64">
              {t('description')}
              <LinkPreview url="https://www.apple.com/fr/app-store/" className="font-bold text-primary">
                {t('appStore')}
              </LinkPreview>{" "}
              et{" "}
              <LinkPreview url="https://play.google.com/store/apps?hl=fr" className="font-bold text-primary">
                {t('playStore')}
              </LinkPreview>
            </div>

            <div className="flex items-center justify-center mt-12">
              <a href="#!" className="shadow m-1">
                <img
                  src="https://cdn.easyfrontend.com/pictures/hero/play-app-android.png"
                  alt={t('imageAlt.android')}
                />
              </a>
              <a href="#!" className="shadow m-1">
                <img
                  src="https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png"
                  alt={t('imageAlt.apple')}
                />
              </a>
            </div>
          </div>
          <div className="col-span-12 h-fit relative w-screen">
            <img 
              className="w-full h-auto"
              src={call}
              alt={t('imageAlt.preview')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

