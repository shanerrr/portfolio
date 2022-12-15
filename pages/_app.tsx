import type { AppProps } from 'next/app';
import { Rubik, Dancing_Script } from '@next/font/google';
import '../styles/globals.css';

//fonts
const rubik = Rubik({
  subsets: ['latin'],
  fallback: ['-apple-system', 'Roboto'],
  variable: '--font-rubik',
});
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${rubik.variable} ${dancingScript.variable} w-full bg-navygreen bg-main-pattern font-sans`}
    >
      <Component {...pageProps} />
    </div>
  );
}
