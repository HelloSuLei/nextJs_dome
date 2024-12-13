"use client"
import React, { useState,useEffect } from "react";

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(0);
  useEffect(()=>{
    console.log('我是 dashboard 的 template 的 useEffect' )
  },[])
  return (
    <div className='border-2 border-dashed border-black  p-4 w-1/2 mx-auto mt-10'>
      <h2>Dashboard Layout {count}</h2>
      <button className='bg-black text-white p-2 my-4 rounded-md' onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>

  )
}