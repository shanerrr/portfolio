import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      <Head>
        <title>Page Not Found | Shane Goonasekera</title>
        <meta name="description" content="Stuff about Shane" />
        <link rel="icon" href="/images/logo.webp" />
      </Head>

      <div className="container flex h-screen flex-col items-center justify-center">
        <h1 className="text-9xl font-bold text-yellow">:(</h1>
        <h2 className="text-2xl font-medium mt-4">Page Not Found</h2>
        <Link href="/" className="rounded-xl border-2 text-xl border-yellow px-4 py-2 mt-12">
          Go Home
        </Link>
      </div>
    </main>
  );
}
