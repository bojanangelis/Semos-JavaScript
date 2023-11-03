import React from 'react'
import Product from './Product'

type RatingType = {
  count: number
  rate: number
}

type ProductsProps = {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: RatingType
  title: string
}

// @ts-ignore
const ProductFeed = ({ products }: ProductsProps) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
      {/* @ts-ignore */}
      {products?.slice(0, 4)?.map(({ id, title, price, description, category, image, rating }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rating={rating}
        />
      ))}

      {products?.slice(4, 5)?.map(({ id, title, price, description, category, image, rating }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rating={rating}
        />
      ))}

      {products
        ?.slice(5, products.length)
        ?.map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  )
}

export default ProductFeed
