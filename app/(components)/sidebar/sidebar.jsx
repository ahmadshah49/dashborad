import React from 'react'
import Link from 'next/link'
import { AiFillAppstore,AiOutlineShopping,AiOutlineTeam } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0  bg-red-400 h-full w-[20%] flex flex-col gap-y-[8rem]'>
      <Link className='my-32z w-full mx-6 mt-6 text-3xl font-bold text-white' href={"/"}>Dashboard</Link>
      <div className='flex flex-col gap-10 mx-6'>
        <Link className='flex items-center gap-1 text-white font-semibold w-42 pl-4 rounded-full py-2 hover:ease-linear hover:duration-200		 hover:bg-red-300  ' href={"/"}><span className='text-3xl'><AiFillAppstore/></span>Dashboard</Link>
        <Link className='flex items-center gap-1 text-white font-semibold w-42 pl-4 rounded-full py-2 hover:ease-linear hover:duration-200		 hover:bg-red-300 ' href={"/products"}><span  className='text-3xl'><AiOutlineShopping/></span>Products</Link>
        <Link className='flex items-center gap-1 text-white font-semibold w-42 pl-4 rounded-full py-2 hover:ease-linear hover:duration-200		 hover:bg-red-300 ' href={"/visitors"}><span  className='text-3xl'><AiOutlineTeam/></span>Visitors</Link>
   
      </div>
    </div>
  )
}

export default Sidebar
