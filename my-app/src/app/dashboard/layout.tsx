"use client"
import React, {useEffect, useState} from "react";
import Link from 'next/link';



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState<number>(0);

  useEffect(()=>{
    console.log('我是 dashboard 的 layout 的 useEffect' );
  },[])
  return (
    <div className='relative z-40 top-40'>
      <div className='border-2 border-dashed border-black  p-4 w-1/2 mx-auto'>
        <div>嵌套布局数据更新 点击下方粉色文字 或者黑色按钮</div>
        <div className='flex gap-4 font-bold text-lg mb-4 text-pink-500'>
          <Link href={'/dashboard/about'}>About</Link>
          <Link href={'/dashboard/settings'}>Settings</Link>
        </div>
        <h2>Dashboard Layout {count}</h2>
        <button className='bg-black text-white p-2 my-4 rounded-md' onClick={() => setCount(count + 1)}>Increment
        </button>
        {children}
      </div>
    </div>


  );
}
