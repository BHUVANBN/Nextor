import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Nextor - Ideate. Integrate. Innovate. Inspire.',
  description: 'Nextor is a leading esports and gaming company specializing in marketing, events, streaming platforms, and location-based entertainment. Join the battle and experience the future of gaming.',
  keywords: 'esports, gaming, marketing, events, streaming, entertainment, Nextor',
  authors: [{ name: 'Nextor' }],
  creator: 'Nextor',
  publisher: 'Nextor',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextor.com',
    title: 'Nextor - Ideate. Integrate. Innovate. Inspire.',
    description: 'Nextor is a leading esports and gaming company specializing in marketing, events, streaming platforms, and location-based entertainment.',
    siteName: 'Nextor',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nextor - Esports & Gaming Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextor - Ideate. Integrate. Innovate. Inspire.',
    description: 'Nextor is a leading esports and gaming company specializing in marketing, events, streaming platforms, and location-based entertainment.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-dark-950 text-white`}>
        {children}
      </body>
    </html>
  );
} 