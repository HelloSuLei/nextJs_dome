import React from 'react';
import { photos } from './data';
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div>结合平行路由实现拦截路由，点击图片实现弹窗展示，分享路由实现页面展示（备注本地开发实现分享效果，先点击出图片出弹窗在硬刷新就可以）</div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {
              photos.map(item => (
                <Link href={`/InterceptRoute/photos/${item.id}`} className="group" key={item.id}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={200}
                    height={200}
                    className='w-full h-full object-cover'
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{item.alt}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default Index;