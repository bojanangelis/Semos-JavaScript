import React, { useCallback, useEffect, useState } from 'react'

const useScrollPosition = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  //   const handleScroll = useCallback(() => {
  //     setHasScrolled(window.scrollY > 300)
  //   })
  useEffect(() => {
    console.log('event scroll called')

    window.addEventListener('scroll', () => {
      setHasScrolled(window.scrollY > 300)
    })
    //ne vi treba
    // clean up ---> memory leak
    // return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return { hasScrolled, scrollToTop }
}

export default useScrollPosition
// useEffect(() => {
// console.log('event scroll called')
// window.addEventListener('scroll', () => {
// if (window.scrollY > 300) {
//   setHasScrolled(true)
// } else {
//   setHasScrolled(false)
// }
// })
