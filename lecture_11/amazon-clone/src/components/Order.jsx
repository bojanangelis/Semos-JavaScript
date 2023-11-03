import React from 'react'
import Currency from 'react-currency-formatter'

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p>ORDER PLACED</p>
          <p>{new Date(timestamp?.toDate()).toLocaleDateString()}</p>
        </div>
        <div>
          <p>TOTAL</p>
          <p>
            <Currency quantity={300} currency="EUR" /> -- Next day delivery
            <Currency quantity={10} currency="EUR" />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {' '}
          10 items
        </p>
        <p className="absolute text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right">
          {' '}
          ORDER
        </p>
      </div>
      <div className="p-5 space-x-6 overflow-x-auto">
        {images.map(image => (
          <img src={image} alt="" className="h-20 object-contain sm:h-32" />
        ))}
      </div>
    </div>
  )
}

export default Order
