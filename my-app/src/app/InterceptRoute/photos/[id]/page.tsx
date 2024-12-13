import React from 'react';
import Image from "next/image";
import {photos} from '../../data'

const Index = ({params}: { params: { id: string } }) => {
  const item = photos.find(item => item.id === params.id)!;
  return (
    <div className='container mx-auto pt-8'>
      <Image src={item.src} alt={item.alt} height={400} width={400} className='rounded-lg mx-auto'/>
      <div className='border-2 border-dashed border-gray-500 rounded-lg p-3 mt-10'>
        <p>
          <strong>title：</strong>{item.alt}
        </p>
        <p>
          <strong>Price：</strong>{item.price}
        </p>
        <p>
          <strong>Desc：</strong>
          o safely allow optimizing images, define a list of supported URL patterns in next.config.js. Be as specific as
          possible to prevent malicious usage. For example, the following configuration will only allow images from a
          specific AWS S3 bucket:
        </p>
      </div>
    </div>
  );
}

export default Index;