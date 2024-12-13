import React from 'react';
import Hero from "@/app/components/Hero";
import PerformanceUrl from "../../../public/PerformanceUrl.jpeg";

const Index = () => {
  return (
    <Hero
      imgUrl={PerformanceUrl}
      altText={'PerformanceUrl-标题'}
      content={'PerformanceUrl-内容展示'}
    />
  );
}

export default Index;