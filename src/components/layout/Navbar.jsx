import React from 'react'
import { IoMdLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { FcParallelTasks } from "react-icons/fc";
const Navbar = ({setHeader}) => {
  return (
    <div class="relative w-full   bg-black">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <div class="inline-flex items-center space-x-2">
        <span className=' text-3xl'>
        <FcParallelTasks />
        </span>
        <span class="font-bold text-white text-2xl">ToDoList</span>
      </div>
      <div class="hidden lg:block">
        <ul class="inline-flex space-x-8">
          <li>
          {/* <p className='text-3xl  text-blue-600,  text-blue-600  mx-5' ><GrTasks />  </p> */}
          
          
          </li>
          
          <li>
          {/* <p className='text-3xl   text-white,  text-white mx-5'> <FaUserCircle /> </p> */}
          </li>
        </ul>
      </div>
      <div class=" flex ">
      <p onClick={()=>setHeader("Home")} className='text-2xl font-semibold text-white mx-2 hover:bg-green-400  rounded-md  '>
      <i className='  cursor-pointer' > Home</i>
      </p>
      <p onClick={()=>setHeader("Tasks")} className='text-2xl font-semibold text-white mx-2 hover:bg-green-400  rounded-md  '>
      <i className='  cursor-pointer' > Tasks</i>
      </p>
      <p onClick={()=>setHeader("Profile")} className='text-2xl font-semibold text-white mx-9 hover:bg-blue-500 rounded-md '>
     <i  className='  cursor-pointer'  > Profile</i>
      </p>
      <p className='text-3xl font-semibold text-red-600 hover:bg-white rounded-md'>
      <IoMdLogOut  className='  cursor-pointer' />
      </p>
      </div>
      <div class="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 cursor-pointer"
        >
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </div>
    </div>
  </div>
  

  )
}

export default Navbar