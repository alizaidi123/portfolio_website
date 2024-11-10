import React from 'react'
import Image from 'next/image'
import Headings from '../Component/Headings'
import Cards from '../Component/Cards'

const data = [
    {
        id:1,
        title: "Basic Replica of PakWheels Website",
        description: "Developed a responsive replica of PakWheels website using Typescript & Next.js",
        img: "/project1.jpg",
        tags: ["Node", "CSS", "TailWind CSS", "TypeScript"]
    },
    {
        id:2,
        title: " Dynamic CountDown Timer",
        description: "Developed a Dyanmic CountDown Timer using combination Typescript & Next.js",
        img: "/Project2.jpg",
        tags: ["Node", "CSS", "TailWind CSS", "TypeScript"]
    },
    {
        id:3,
        title: "Dynamic/Responsive Resume Builder",
        description: "Developed a Dynamic and Responsive Resume Builder using Typescript & Next.js",
        img: "/project3.jpg",
        tags: ["Node", "CSS", "TailWind CSS", "TypeScript"]
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-28 pb-10 uppercase' data-aos="fade-down">
      <Headings title=' My Projects ' />
      <div className='grid gap-2 xl:gap-0 xl:gap-y-6 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Cards
        key={el.id}
        title={el.title}
        description={el.description}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
