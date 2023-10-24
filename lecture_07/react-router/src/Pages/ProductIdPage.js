import React from 'react'
import './ProductIdPage.css'
import { useParams } from 'react-router-dom'
import cars from '../utils/data'

const ProductIdPage = () => {
    const params = useParams()

    //params.productId
    const {productID} = params
    const infoAboutCar = cars.find((car) => car.id === productID)

    console.log(infoAboutCar)

  return (
    <div className='product-id-page'>
        <img src={infoAboutCar.image} alt={infoAboutCar.name} />
        <h2> Carid--- {params.productID}</h2>
        <p>{infoAboutCar.name}</p>
    </div>
  )
}

export default ProductIdPage