import { AppProps } from 'next/app';
import '../styles/global.scss';
import 'tippy.js/dist/tippy.css';
import 'swiper/css';
import NextNprogress from 'nextjs-progressbar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNprogress
        color="var(--gradient-primary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
