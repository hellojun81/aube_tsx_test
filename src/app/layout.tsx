

import type { Metadata } from "next";
import Head from 'next/head';

import "./globals.css";
// import App from "./page";
import Menu from '@/app/components/menu'

import React from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';



export const metadata: Metadata = {
  title: "aubestudio",
  description: "everything is possible.",
  viewport:"width=device-width, initial-scale=1.0, user-scalable=no",
  
  // og:image:"/preview.jpg",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>    
    <html lang="en">
    <Head>
    <title>aubestudio</title>
        <meta property="og:title" content="aubestudio" />
        <meta property="og:description" content="everything is possible." />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://aubestudio.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
   
      </Head>
      <body>
      <Menu />
        {children}
   

      <ScrollToTopButton />
      </body>
    </html>
    </>

  );
}
