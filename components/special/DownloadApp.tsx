import { useTranslations } from 'next-intl';

export const DownloadApp = () => {
  const t = useTranslations('HomePage.downloadApp');

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
            </div>

            <div className="flex items-center justify-center mt-12">
              <a 
                href="/eath.apk" 
                download 
                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{t('downloadButton')}</span>
              </a>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};
