import React from 'react'
import Landing from './home/Index'
import Profile from './profile/Index'
import Tasks from './tasks/Index'



const Home = ({header}) => {
    
  return (
    <div className='  w-full  h-full px-32 py-5'>
    <div className=' bg-white h-full w-full'>
{header == "Home" && <Landing/>}
{header == "Profile" && <Profile/>}
{header == "Tasks" && <Tasks/>}
    </div></div>
  )
}

export default Home