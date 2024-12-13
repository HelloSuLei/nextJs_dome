"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
const linkData = [
  {name:'parallelRouting',href:'/parallelRouting'},
  {name:'dashboard',href:'/dashboard'},
  {name:'blog',href:'/blog'},
  {name:'InterceptRoute',href:'/InterceptRoute'},
  {name:'Performance',href:'/Performance'},
  {name:'Reliability',href:'/Reliability'},
  {name:'Scale',href:'/Scale'},
  {name:'error',href:'/error'},
]
const Index = () => {
  const pathname = usePathname();
  return (
    <div className='absolute w-full z-10 bg-gradient-to-l from-gray-800'>
      <div className='flex justify-between container mx-auto text-white p-8'>
        <Link className={`${pathname==='/'?'text-purple-500':''} text-3xl font-bold`} href={'/'}>Home</Link>
        <div className='text-1x space-x-4'>
          {
            linkData.map(item=>(
              <Link
                key={item.href}
                className={pathname===item.href?'text-purple-500':''}
                href={item.href}
              >
                {item.name}
              </Link>))
          }
        </div>
      </div>
    </div>
  );
}

export default Index;