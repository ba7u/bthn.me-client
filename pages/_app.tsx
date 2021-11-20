// eslint-disable-next-line rules/forbid-import
import { appWithTranslation } from 'next-i18next';
import { HeaderComponent } from 'components/header/component';
import type { AppProps } from 'next/app';
import '../styles/index.css';
import { NavigationComponent } from 'components/navigation/component';
import { configPaths } from 'config/paths';
// import { SwitchLanguageComponent } from 'components/switch-language/component';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { TitleComponent } from 'components/title/component';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <HeaderComponent>
        <TitleComponent />
        <div className='flex'>
          <NavigationComponent paths={configPaths} activePath={router.pathname} />
          {/* <SwitchLanguageComponent router={router} /> */}
        </div>
      </HeaderComponent>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
};

export default appWithTranslation(MyApp);
