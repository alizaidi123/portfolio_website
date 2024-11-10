import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string;
    description: string;
    img: string;
    tags: string[];
}

const Cards: React.FC<propsType> = ({title, description, img, tags }) => {   
  return (
    <div className='border border-teal-950 w-[400px] sm:w-[400px] items-center justify-center text-center' data-aos="fade-down">
        <div>
            <Image className='w-[400px] sm:w-[400px] h-auto'
            src={img}
            width={350}
            height={350}
            alt={title}
            />
        </div>

        <div className='p-4 space-y-4' >
            <div className='text-3xl font-semibold'>{title}</div>
            <div>{description}</div>
            <div>
                {tags.map((el) => (
                    <div className='tags' key={el}>
                    {el}     
                    </div>
                ) )}
            </div>

        </div>
      
    </div>
  )
}

export default Cards
