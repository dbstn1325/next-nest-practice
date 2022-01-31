import type { AppProps } from 'next/app';
import Header from '../components/header';

function MyApp({ Component, pageProps })  {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
