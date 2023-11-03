import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch()

  const handleAddItems = () => {
    dispatch(
      addToBasket({ id, title, price, description, category, image, rating }),
    )
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img src={image} alt={title} height={200} width={200} />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(Math.round(rating?.rate))
          .fill(1)
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="line-clamp-2 text-xs my-2">{description}</p>
      <div className="py-2">
        <Currency quantity={price} currency="EUR" />
      </div>
      <button onClick={handleAddItems} className="button">
        Add to basket
      </button>
    </div>
  )
}

export default Product
