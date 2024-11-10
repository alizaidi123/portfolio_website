import React from 'react'

const Skills = () => {
  return (
    <div className='container pt-28 flex justify-center items-center' data-aos="fade-down">
        <div className='container gap-10 flex flex-col justify-center items-center'>
            <div> <h2 className='text-4xl md:text-4xl uppercase flex flex-col justify-center items-center gap-10 font-bold underline'> My Skills </h2> </div>
              <div>
              <p className='text-2xl pt-2 text-center font-light flex justify-center items-center mx-8 my-3'> 
              I bring a solid foundation in web development, with skills across key front-end technologies. With TypeScript, I ensure scalable and type-safe code, enhancing maintainability in complex applications. My HTML expertise allows me to create well-structured, semantic content, while CSS helps me build visually appealing, responsive designs. Leveraging Next.js, I optimize performance and enable server-side rendering for a seamless user experience across single-page applications and beyond.
              </p>
                </div>  
                <div>
                <p className='text-2xl pt-2 text-center flex justify-center items-center font-light mx-8 mt-2 mb-28'>
                    With an MBA background, I bring a strategic understanding of business operations and management principles. My negotiation skills allow me to effectively advocate for solutions and create value in complex scenarios. I’m adept at public speaking, enabling me to communicate ideas clearly and engage audiences effectively. My leadership skills help me guide teams toward shared goals, fostering collaboration and growth. Additionally, my management skills ensure I can oversee projects, align resources, and drive results efficiently in dynamic environments. 
                    </p>  
                </div>
                
            
        </div>
      
    </div>
  )
}

export default Skills
