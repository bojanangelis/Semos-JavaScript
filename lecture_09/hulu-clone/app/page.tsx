'use client'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { RecoilRoot } from 'recoil'

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Main />
      </RecoilRoot>
    </>
  )
}
