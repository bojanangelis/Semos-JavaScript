'use client'
import { requestURL } from '@/atoms/requestAtom'
import x from '@/utils/requests'

import React from 'react'
import { useSetRecoilState } from 'recoil'

const NavBar = () => {
  // da ne pravam ova set RequestUrl mozam deirekno na linija 11
  // const [requestUrl, setRequestUrl] = useRecoilState(todoListState);

  const setRequestURL = useSetRecoilState(requestURL)

  const handleRequestUrl = (obj: any) => {
    setRequestURL(obj)
  }

  // console.log(Object.keys(x))
  // console.log(Object.values(x))
  // console.log(Object.entries(x))
  // console.log(Object.entries(x).map(([key]) => key))
  // console.log(Object.entries(requests).map((item) => item))
  // for loop

  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(x).map(([key, { title, url }]) => (
          <button
            key={key as unknown as string}
            onClick={() => handleRequestUrl({ title, url })}
            className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'
          >
            {title}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
