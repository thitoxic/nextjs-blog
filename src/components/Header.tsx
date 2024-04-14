import React from 'react'

const Header = () => {
  return (
    <div className='w-screen  bg-stone-200 h-14 text-black flex justify-evenly flex-row items-center'>
        <div className='w-25 flex flex-row'>
        <p className='mx-6'>Blogs</p>
        <p className='mx-6'>Photography</p>
        <p className='mx-6'>Profile</p>
        </div>
    </div>
  )
}

export default Header