import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'
import useScrollPosition from '../hooks/useScrollPosition'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import useFetch from '../hooks/useFetch'

const DashboardPage = () => {
  const { hasScrolled, scrollToTop } = useScrollPosition()

  const {
    data: dataProducts,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products')

  if (error) return <div>{error}</div>

  return (
    <div>
      <Header />
      <main className="max-w-screen-2xl mx-auto relative">
        {loading && <p>Loading...</p>}
        <Banner />
        <ProductFeed products={dataProducts} />
        {hasScrolled && (
          <ArrowUpIcon
            onClick={scrollToTop}
            className="h-20 right-10 bottom-24 bg-white fixed z-[999999] rounded-full p-5 hover:text-green-700 cursor-pointer text-green-600"
          />
        )}
      </main>
    </div>
  )
}

export default DashboardPage

// console.log('has scrolled 300px down in y oska-->', hasScrolled)
// const [data, setData] = useState(null)
// const [isLoading, setLoading] = useState(true)

// useEffect(() => {
//   fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(data => {
//       // koga ke dobieme data setData setLoading false
//       setData(data)
//       setLoading(false)
//     })
// }, [])
