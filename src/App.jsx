/* eslint-disable no-unused-vars */
import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Home from './components/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './Page';


const App = () => {
  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-zinc-800'>
      {/* background is behind of foreground */}
      {/* <Background />
      <Foreground /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todos" element={<Page />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Home /> */}
      
    </div>
  )
}

export default App
