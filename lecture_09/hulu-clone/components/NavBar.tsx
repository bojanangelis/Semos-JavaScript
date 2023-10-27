'use client'
import { requestURL } from '@/atoms/requestAtom'
import requests from '@/utils/requests'
import React from 'react'
import { useSetRecoilState } from 'recoil'

const NavBar = () => {
  // da ne pravam ova set RequestUrl mozam deirekno na linija 11
  // const [requestUrl, setRequestUrl] = useRecoilState(todoListState);

  const setRequestURL = useSetRecoilState(requestURL)

  const handleRequestUrl = (obj: any) => {
    setRequestURL(obj)
  }

  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => handleRequestUrl({ title, url })}
            key={key as unknown as string}
            className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
