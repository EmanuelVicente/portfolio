import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Emanuel Vicente | Software Engineer',
    template: '%s | Emanuel Vicente',
  },

  description: 'Software Engineer specialized in React, React Native, TypeScript, Next.js and Node.js.',

  keywords: ['Emanuel Vicente', 'Software Engineer', 'React', 'React Native', 'Next.js', 'TypeScript', 'Node.js'],

  authors: [{ name: 'Emanuel Vicente' }],
  creator: 'Emanuel Vicente',

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Emanuel Vicente | Software Engineer',
    description: 'Software Engineer specialized in React, React Native, TypeScript, Next.js and Node.js.',
    siteName: 'Emanuel Vicente',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Emanuel Vicente | Software Engineer',
    description: 'Software Engineer specialized in React, React Native, TypeScript, Next.js and Node.js.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
