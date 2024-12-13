"use client"
import React from 'react';
import Hero from "@/app/components/Hero";
import Scale from "../../../public/Scale.jpg";
import { updateUsername,createPost } from './actions'
import { useRouter } from 'next/navigation'

const Index = () => {
  // 户端组件中的事件处理程序内部进行重定向，可以使用useRouter挂钩中的push方法
  const router = useRouter()

  return (
    <div>
      <Hero
        imgUrl={Scale}
        altText={'Scale-标题'}
        content={'Scale-内容展示'}
      />
      <div className='absolute top-72 z-40 w-full text-white h-auto text-center'>
        <div onClick={() => createPost('')}>
          redirect  模拟服务端调用重定项
        </div>
        <div onClick={() => updateUsername('')}>
          permanentRedirect 模拟服务端调用重定项
        </div>
        <div onClick={() => router.push('/')}>
          useRouter 客户端点击事件重定项
        </div>
      </div>
    </div>
  );
}

export default Index;