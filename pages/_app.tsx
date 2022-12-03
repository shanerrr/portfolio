import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Rubik, Dancing_Script } from '@next/font/google';

//fonts
const rubik = Rubik({
  subsets: ['latin'],
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
