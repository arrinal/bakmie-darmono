import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bakmie Darmono",
  description: "Bakmie karet otentik dengan topping paling lengkap di Jakarta",
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    other: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://bakmiedarmono.com',
    siteName: 'Bakmie Darmono',
    title: 'Bakmie Darmono',
    description: 'Bakmie karet otentik, bakmie karet pedas dengan topping paling lengkap di Jakarta',
    images: [
      {
        url: '/about-bakmie-darmono.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bakmie Darmono',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bakmie Darmono',
    description: 'Bakmie karet otentik, bakmie karet pedas dengan topping paling lengkap di Jakarta',
    images: ['/about-bakmie-darmono.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
