import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='h-16 w-full shadow-sm flex items-center sticky top-0 right-0 left-0 bg-slate-50 z-50'>
        <div className='flex justify-between items-center  w-full max-w-7xl mx-auto'>
              <div>
                  <p className='text-2xl font-semibold uppercase text-neutral-700'>Maazi mediaworks</p>
              </div>
              <div className='flex gap-4'>
                  <Link href={'/'} className='text-slate-600 uppercase font-semibold'>
                    Home
                  </Link>
                  <Link href={'/about'} className='text-slate-600 uppercase font-semibold'>
                    About
                  </Link>
              </div>
        </div>
    </nav>
  )
}

export default Nav
