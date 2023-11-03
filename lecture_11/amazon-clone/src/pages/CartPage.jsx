import React from 'react'
import Header from '../components/Header'
import Order from '../components/Order'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'

const CartPage = () => {
  const items = useSelector(selectItems)
  console.log(items)
  return (
    <>
      <Header />
      <main className="flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            alt="img"
            width={700}
            height={200}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length < 1
                ? 'Your Amazon Basket is empty'
                : 'Shopping Cart'}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default CartPage

{
  /* <main className="max-w-screen-lg mx-auto p-10">
  <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
    Your orders
  </h1>
  {/* WIP 
  <h2>6 Orders</h2>

  <h2>Please sing in to see your orders</h2>
  <div></div>
</main> */
}
