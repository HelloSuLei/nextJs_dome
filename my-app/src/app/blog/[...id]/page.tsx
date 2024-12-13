import React from 'react';

const Index = ({params}:{params:{id:string}}) => {
  console.log(params);
  return (
    <div className='pt-40 text-center'>
      通过在括号[...folderName]内添加省略号，可以将动态段扩展为捕获所有后续段
    </div>
  );
}

export default Index;