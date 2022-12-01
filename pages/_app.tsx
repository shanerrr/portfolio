import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Rubik, Dancing_Script } from '@next/font/google';

//fonts
const workSans = Rubik({
  subsets: ['latin'],
  variable: '--font-inter',
});
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${workSans.variable} ${dancingScript.variable} w-full bg-navygreen font-sans`}
    >
      <Component {...pageProps} />
    </div>
  );
}
