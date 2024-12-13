import React from 'react';

/** 软导航可以展示页面，硬导航（刷新页面）页面不存在 解决刷新不存在  需要在平行级和父级 建造default.tsx并且copy本页面的内容放到default.tsx*/
const Index = () => {
  return (
    <div className='flex items-center justify-center h-60 rounded-lg bg-pink-500 flex-1'>
      @Visitors 平行路由
    </div>
  );
}

export default Index;