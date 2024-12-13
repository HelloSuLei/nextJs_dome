import React from 'react';
import Hero from "@/app/components/Hero";
import ReliabilityUrl from "../../../public/ReliabilityUrl.jpeg";

const Index = () => {
  return (
    <div>
      <div className='fixed top-40 text-center text-white w-full'>
        点击Performance 实现next.config.ts 重定项
      </div>
      <Hero
        imgUrl={ReliabilityUrl}
        altText={'Reliability-标题'}
        content={'Reliability-内容展示'}
      />
    </div>

  );
}

export default Index;