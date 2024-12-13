import React from "react";
export default function ParallelRoutingLayout({
   children,
   modal,
   }: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {

  return (
    <div className="container mx-auto pt-40">
      {children}
      {modal}
    </div>
  );
}
