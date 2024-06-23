

import type { Metadata } from "next";
import Head from 'next/head';

import "./globals.css";
// import App from "./page";
import Menu from '@/app/components/menu'
// import Naverbar from '@/app/components/Navbar'

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
    <html lang="ko">
    <Head>
        <meta property="og:title" content="aubestudio" />
  

      </Head>
      <body>
      {/* <Naverbar /> */}
        {children}
   

      <ScrollToTopButton />
      </body>
    </html>
    </>

  );
}
