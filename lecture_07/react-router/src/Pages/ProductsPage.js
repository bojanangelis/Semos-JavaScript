import React from 'react'
import './ProductsPage.css'
import { Link } from 'react-router-dom'
import cars from '../utils/data'

const ProductsPage = () => {

  return (
    <div className='product__page'>
      {cars.map((car)=> (  
        <div className='product__card' key={car.id}>
          <p>{car.name}</p>
          <img className='product__image' src={car.image} alt={car.name} />
          <Link className='btn' to={`/product/${car.id}`}>Learn more</Link>
        </div>
      ))} 
    </div>
  )
}

export default ProductsPage