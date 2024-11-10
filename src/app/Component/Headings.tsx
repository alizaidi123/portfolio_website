import React from 'react'

interface propsType {
    title: string
}

const Headings: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8 font-bold' data-aos="fade-down">
        <p className='inline-block pb-2 underline'>{title}</p>
      
    </div>
  )
}

export default Headings
