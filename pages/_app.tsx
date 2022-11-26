import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Inter, Dancing_Script } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${dancingScript.variable} font-sans bg-navygreen`}
    >
      <Component {...pageProps} />
    </div>
  );
}
