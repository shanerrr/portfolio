import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} h-screen font-sans bg-gradient-to-r from-[#5f2c82] to-[#49a09d]`}
    >
      <Component {...pageProps} />
    </div>
  );
}
