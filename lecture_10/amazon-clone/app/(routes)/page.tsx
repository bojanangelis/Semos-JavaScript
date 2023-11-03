'use client'
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import ProductFeed from '@/components/ProductFeed'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        // koga ke dobieme data setData setLoading false
        setData(data)
        setLoading(false)
      })
  }, [])
  console.log(data)

  return (
    <>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        {isLoading && <p>Loading...</p>}

        <Banner />
        {/* //@ts-ignore */}
        <ProductFeed products={data} />
      </main>
    </>
  )
}
