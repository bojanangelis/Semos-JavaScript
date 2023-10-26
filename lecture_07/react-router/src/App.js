import './App.css'
import AboutPage from './Pages/AboutPage'
import ErrorPage from './Pages/ErrorPage'
import CustomSharedLayout from './Pages/CustomShatedLayout'
import ProductsPage from './Pages/ProductsPage'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import ProductIdPage from './Pages/ProductIdPage'
import HomePage from './Pages/HomePage'
import { useEffect, useState } from 'react'
import LoginPage from './Pages/LoginPage'
import ProtectedRoute from './Pages/ProtectedRoute'

function App() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const handleUser = (e) => {
  // setEmail(e.target.value)
  // }
  // const handlePassword = (e) => {
  // setPassword(e.target.value)
  // }
  // console.log(!user.email && !user.password)
  // console.log(Object.values(user))
  // console.log(Object.keys(user))
  // console.log(Object.entries(user))

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=''
          element={
            <CustomSharedLayout email={email}>
              <Route index path='/' element={<HomePage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='products' element={<ProductsPage />} />
              <Route path='product/:productID' element={<ProductIdPage />} />
              <Route path='*' element={<ErrorPage />} />
            </CustomSharedLayout>
          }
        />

        <Route path='/login' element={<LoginPage user={email} handleUser={handleUser} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

{
  /* {!user.email && !user.password ? (
  <Route path='/login' element={<LoginPage user={user} handleUser={handleUser} />} />
) : (
  <Route path='' element={<CustomSharedLayout user={user} />}>
    <Route index path='/' element={<HomePage />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='products' element={<ProductsPage />} />
    <Route path='product/:productID' element={<ProductIdPage />} />
    <Route path='*' element={<ErrorPage />} />
  </Route>
)} */
}
