import React from 'react'
import Currency from 'react-currency-formatter'

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className='relative border rounded-md'>
      <div className='flex items-center space-x-10'>
        <p>Order Placed</p>
        <p>{new Date(timestamp?.toDate()).toLocaleDateString()}</p>
        <div>
          <p>TOTAL</p>
          <p>
            <Currency quantity={300} currency='EUR' /> -- Next day delivery
            <Currency quantity={10} currency='EUR' />
          </p>
        </div>
        <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right'> 10 items</p>
        <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right'> ORDER</p>
      </div>
    </div>
  )
}

export default Order
