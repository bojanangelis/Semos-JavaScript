import { API_URL } from '@/utils/requests'
import Image from 'next/image'
import React from 'react'

const Thumbnail = ({ movie }: any) => {
  console.log(movie)
  const base_url = 'https://image.tmdb.org/t/p/original/'
  const x = API_URL + movie.backdrop_path
  console.log(x)

  return (
    <div className='p-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50'>
      <Image
        src={base_url + movie.backdrop_path || base_url + movie.poster_path}
        alt={movie.title}
        width={1920}
        height={1080}
      />
      {movie.title}
    </div>
  )
}

export default Thumbnail
