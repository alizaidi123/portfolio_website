 import React from 'react'
 import { TbMenuOrder } from "react-icons/tb";
 import Link from 'next/link';
 import { CgWebsite } from "react-icons/cg";
 

 const Navbar = () => {
   return (
     <div className='container pt-8'>
        <div className='flex justify-around  items-center'>
            <div className='text-xl font-medium flex gap-2 text-center items-center'>
              <CgWebsite size={30} /> Welcome To My Web </div>
            <ul className='gap-10 lg:gap-16 hidden md:flex font-medium items-center text-xl'>
                <li className='menuLink'><Link href= '/Hero'>Home</Link></li>
                <li className='menuLink'><Link href= '/About'>About</Link></li>
                <li className='menuLink'> <Link href= '/Projects'>Projects</Link> </li>
                <li className='menuLink'><Link href= '/Skills'>Skills</Link></li>
                <li className='menuLink'><Link href= '/Contacts'>Contact</Link></li>

            </ul>
            
        </div>
        <TbMenuOrder className='md:hidden' size={15} />
     </div>
     
   )
 }
 
 export default Navbar
 