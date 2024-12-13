import React from "react";
import Link from "next/link";

export default function ParallelRoutingLayout({
   children,
   team,
   analytics,
   }: Readonly<{
  children: React.ReactNode;
  team:React.ReactNode;
  analytics:React.ReactNode;
}>) {

  return (
    <div className="container mx-auto pt-40">
      <div className='flex justify-center text-blue-500 p-6 gap-6'>
        <Link href="/parallelRouting">parallelRouting</Link>
        <Link href="/parallelRouting/Visitors">Visitors</Link>
      </div>
      <div className='flex gap-6'>
        {team}
        {analytics}
      </div>
      {children}
    </div>
  );
}
