import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { BsFillChatTextFill } from "react-icons/bs";

const Contacts = () => {
  return (
    <div className='pt-28 container flex flex-col justify-center items-center align-middle mb-60' data-aos="fade-down">
        <div className='grid md:grid-cols-1 gap-10 justify-center items-center align-middle'>
            <div className='space-y-8'>
            <h2 className='text-4xl md:text-4xl uppercase font-bold underline text-center'> My Contact Details </h2>
            <p className='text-2xl pt-2 text-center flex justify-center items-center font-light'>You can contact me via Call, Message or E-mail</p>
            <div className='flex gap-3 items-center mx-36 '>
                <MdAlternateEmail size={30} /> saboor.ali.zaidi@gmail.com
            </div>
            <div className='flex gap-3 items-center mx-36'>
                <TbPhoneCall size={30} /> +923120004057
            </div>
            <div className='flex gap-3 items-center mx-36'>
                <BsFillChatTextFill size={30} /> +923120004057
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default Contacts
