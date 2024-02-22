import React from 'react'
import Header from './Header'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='h-screen w-full px-[10%] bg-black text-white'>
        <Header></Header>
        <Hero></Hero>
    </div>
  )
}

export default Home
