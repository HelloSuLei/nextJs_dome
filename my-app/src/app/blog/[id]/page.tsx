import React from 'react';
import Link from 'next/link';
export async function generateMetadata({params}: {params:{id:string}}) {
  return{
    title:`详情页面-${params.id}`,
  }
}
const Index = ({params}:{params:{id:string}}) => {
  return (
    <div className='pt-40 text-center'>
      动态路由页面
      <div>
        <Link href={`/blog/${params.id}/${params.id}`}>点击再往下一层[...id] {params.id}</Link>
      </div>
    </div>
  );
}

export default Index;