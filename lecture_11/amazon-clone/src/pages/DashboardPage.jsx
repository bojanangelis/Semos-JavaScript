import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'

const DashboardPage = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // koga ke dobieme data setData setLoading false
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {isLoading && <p>Loading...</p>}

        <Banner />
        <ProductFeed products={data} />
      </main>
    </>
  )
}

export default DashboardPage
