import '../styles/global.scss';
import 'tippy.js/dist/tippy.css';
import NextNprogress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNprogress color="var(--color-main)" startPosition={0.3} stopDelayMs={200} height={3} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
