import React from 'react'
const Home = () => {
  return (
    <div className='relative flex justify-center items-center max-sm:h-screen '>
        <img src="/todo.gif" alt="" className=' w-full h-screen blur-[2px] z-[2] max-sm:w-auto max-sm:h-auto' />
        <div className=' absolute z-[3] flex flex-col gap-10 justify-center items-center w-screen h-screen
        leading-none tracking-tighter '>
        <p className='font-semibold text-[4vw] text-sky-600'>Welcome to the Play With Todos</p>
        <p className="text-white font-medium text-[2vw]">Drag & Throw your Todos</p>
        <button className="rounded-full cursor-pointer hover:scale-110 transition ease-in-out
     flex items-center justify-center gap-1 bg-blue-600 h-[50px] w-[100px] text-white"><a href="/todos">Let's Go &rarr;</a></button>
        </div>

    </div>
  )
}

export default Home