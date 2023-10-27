'use client'
import {
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import React from 'react'
import HeaderItem from './HeaderItem'
import Image from 'next/image'
import NavBar from './NavBar'

const Header = () => {
  return (
    <>
      <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow'>
          <HeaderItem Icon={HomeIcon} title={'HOME'} />
          <HeaderItem Icon={BoltIcon} title={'TRENDING'} />
          <HeaderItem Icon={CheckBadgeIcon} title={'VERIFIED'} />
          <HeaderItem Icon={RectangleStackIcon} title={'COLLECTIONS'} />
          <HeaderItem Icon={MagnifyingGlassIcon} title={'SEARCH'} />
          <HeaderItem Icon={UserIcon} title={'USER'} />
        </div>
        {/* <img
          className='object-contain'
          src={'https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png'}
          alt='hulu logo'
          width={200}
          height={100}
        /> */}
        <Image
          className='object-contain'
          src={'https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png'}
          alt='hulu logo'
          width={200}
          height={100}
        />
      </header>
      <NavBar />
    </>
  )
}

export default Header
