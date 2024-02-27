import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const Page = () => {
  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-zinc-800'>
        <Background />
      <Foreground />
    </div>
  )
}

export default Page;