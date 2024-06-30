// import { useState } from 'react'
import { useState } from 'react'

import Index from './components/layout'
// import Login from './components/Login'
// import Register from './components/Register'

function App() {
  // const [back, setCount] = useState("black")
//  const [user,setUser]=useState(true)
//  const updateLogin=(newTrue)=>{
// // setUser(newTrue)
//  }
  return (
    <div >
 {/* <button onClick={()=>{
  setCount("blue")
 }} className='py-3 rounded-lg w-32   bg-blue-600  text-cyan-50 text-2xl font-semibold'>{"blue"}</button>
 <button onClick={()=>{
  setCount("pink")
 }} className='py-3 rounded-lg w-32  text-cyan-50  text-2xl font-semibold bg-pink-400'  >{"pink"}</button>
      */}
     {/* {user ? <Login updateLogin={updateLogin}   /> : <Register updateLogin={updateLogin}   />} */}


<Index/>

    </div>
  )
}

export default App
