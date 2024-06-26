import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/containers/home/elements/footer';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: ["favicon.ico"],
  title: 'Bukuku Club',
  description:
    'Berawal dari komunitas kecil yang diberi nama Bukuku.Club, yaitu sebuah komunitas yang mendorong dan memfasiltasi anak-anak untuk berkarya dalam bentuk buku. Komunitas ini berdiri sejak tahun 2016.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <!-- Basic site information --> */}
        <meta property="og:title" content="Bukuku Club" />
        <meta
          property="og:description"
          content="Berawal dari komunitas kecil yang diberi nama Bukuku.Club, yaitu sebuah komunitas yang mendorong dan memfasiltasi anak-anak untuk berkarya dalam bentuk buku. Komunitas ini berdiri sejak tahun 2016."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bukuku.club" />

        {/* <!-- Image information --> */}
        <meta property="og:image" content="/images/cta.png" />
        <meta property="og:image:alt" content="Bukuku Club" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Optional: If your website represents a company or an organization --> */}
        <meta property="og:site_name" content="Bukuku Club" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
