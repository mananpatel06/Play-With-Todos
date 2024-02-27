/* eslint-disable no-unused-vars */
import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Home from './components/Home'
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
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/todos" element={<Page />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Home /> */}
      
    </div>
  )
}

export default App
