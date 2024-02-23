import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import FooterCopyright from './FooterCopyright'

const Home = () => {
  return (
    <div className='h-max max-w-full overflow-x-hidden px-[10%] bg-black text-white'>
        <Header></Header>
        <Hero></Hero>
        <Features></Features>
        <FooterCopyright></FooterCopyright>
    </div>
  )
}

export default Home
