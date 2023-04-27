import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full bg-navygreen bg-main-pattern font-sans">
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
