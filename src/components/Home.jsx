import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'

const Home = () => {
  return (
    <div className='h-screen w-full px-[10%] bg-black text-white'>
        <Header></Header>
        <Hero></Hero>
        <Features></Features>
    </div>
  )
}

export default Home
