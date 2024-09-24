import React from 'react'
import Header from './components/header'
import About from './components/about/about'
const Home = () => {
  return (
    <>
      <h1 className='text-center text-2xl p-4'>Home</h1>
      <Header />
      <About />
    </>
  )
}

export default Home
