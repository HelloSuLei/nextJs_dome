import React from "react";
import "./globals.css";
import Header from './components/Header'
import { Comforter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';
const comforter =  Comforter({subsets:['latin'],weight:'400'});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  team:React.ReactNode;
  analytics:React.ReactNode;
}>) {

  return (
    <html lang="en" className={comforter.className}>
      <body>
       <Header/>
       <div>
         <AntdRegistry>
             {children}
         </AntdRegistry>
       </div>
      </body>
    </html>
  );
}
