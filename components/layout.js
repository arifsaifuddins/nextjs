import Image from 'next/image'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <header className="flex items-center justify-between mx-auto px-10 py-5 bg-slate-500 text-white">
        <Image width="100" height="100" src={'/vercel.svg'} alt="logo" />
        <nav className='flex items-center gap-10'>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Contact</a></p>
          <p><a href="#">Project</a></p>
        </nav>
      </header>
      {children}
      <footer className='text-center py-10 border-t-2'>&copy; 2023 Copyright</footer>
    </>
  )
}

export default Layout
