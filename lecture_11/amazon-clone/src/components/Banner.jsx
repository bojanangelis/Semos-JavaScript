import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

const Banner = () => {
  return (
    <div className="relative w-full">
      <Carousel infiniteLoop autoPlay interval={5000}>
        <div>
          <img
            width={1200}
            height={600}
            src={'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'}
            alt="img"
          />
        </div>
        <div>
          <img
            width={1200}
            height={600}
            src={'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'}
            alt="img"
          />
        </div>
        <div>
          <img
            width={1200}
            height={600}
            src={'https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg'}
            alt="img"
          />
        </div>
      </Carousel>
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-50" />
    </div>
  )
}

export default Banner
