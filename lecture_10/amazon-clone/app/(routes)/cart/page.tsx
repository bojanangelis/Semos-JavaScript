import Header from '@/components/Header'
import Order from '@/components/Order'
import React from 'react'

const Cart = () => {
  return (
    <>
      <Header />
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Your orders</h1>
        {/* WIP */}
        <h2>6 Orders</h2>

        <h2>Please sing in to see your orders</h2>
        <div>
          <Order />
        </div>
      </main>
    </>
  )
}

export default Cart
