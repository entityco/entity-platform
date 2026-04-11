import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from "next/font/google"
import './globals.css';

import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from '@/components/clerk-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  weight: "300",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Entity – AI co-scientist for Applied Scientists',
  description: 'Entity is a reasoning-first AI platform for teams to high stack decisions effortlessly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        className='h-full'
        suppressHydrationWarning
      >
        <body className={`${inter.variable} ${ibmPlexMono.variable} flex min-h-full flex-col antialiased`}>
          <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
