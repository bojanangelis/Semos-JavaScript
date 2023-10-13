import React from 'react'
import './MoviePosterCSS.css'

const MoviePosterComponent = ({ title, img  }) => {
  return (
    <div className='movie-poster'>
        <h1 className='movie-poster-title'>{title}</h1>
        <img className='movie-poster-img' 
        src={`https://image.tmdb.org/t/p/w500/${img}`} alt=""/>
    </div>
  )
}

export default MoviePosterComponent