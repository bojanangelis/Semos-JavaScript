import { MinusIcon, PlusIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({
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

  const handleRemoveItem = () => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className="grid grid-cols-5">
      <img src={image} alt={title} width={200} height={200} />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(Math.round(rating?.rate))
            .fill(1)
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="EUR" />
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={handleAddItems}>
          <PlusIcon className="h-5" />
        </button>

        <button>
          <MinusIcon onClick={handleRemoveItem} className="h-5" />
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
