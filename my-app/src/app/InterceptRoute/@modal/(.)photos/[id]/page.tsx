"use client"
import React from 'react';
import {photos} from "@/app/InterceptRoute/data";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Index = ({params}:{params:{id:string}}) => {
  const item = photos.find(item => item.id === params.id)!;
  const router = useRouter();
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={()=>router.back()}>
      <div>阻拦路由</div>
      <Image src={item.src} alt={item.alt} width={300} height={300} className='rounded-lg' onClick={(e)=>e.stopPropagation()}/>
    </div>
  );
}

export default Index;