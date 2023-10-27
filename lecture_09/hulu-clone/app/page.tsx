'use client'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { RecoilRoot } from 'recoil'

//how to start app
// npx create-next-app@latest my-app
// tailwindcss i nextjs
// database https://developer.themoviedb.org/reference/intro/authentication
// recoil https://recoiljs.org/docs/getting-started/

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
