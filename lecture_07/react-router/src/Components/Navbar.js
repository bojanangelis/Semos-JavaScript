import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import cars from '../utils/data'

const Navbar = ({ user }) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const searchData = cars.filter((car) => car.name.includes(search.length > 3 && search))

  // map, filter, find (za intervuew)
  // useState, useEffect, useRef.
  // const searchData = cars.filter((car) => car.name.includes(search))

  const handleNavigation = (id) => {
    if (id) navigate(`product/${id}`)
    setSearch('')
  }
  return (
    <nav className='navbar'>
      <div className='navbar__links'>
        {/* /destructure so golem zagradi */}
        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to='/about'>
          About
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to='/products'>
          Products
        </NavLink>
      </div>
      <div className='div--navbar__search'>
        <p>{user.email}</p>
        <input
          value={search}
          onChange={(e) => handleSearch(e)}
          required
          type='text'
          placeholder='Search'
          className='navbar__search'
        />
        {searchData.map((car) => {
          return (
            <button onClick={() => handleNavigation(car.id)} className='navbar__search--result'>
              <p>{car.name}</p>
              <img className='navbar__search--result--img' src={car.image} alt={car.name} />
            </button>
          )
        })}
        {/* <div>
              <Link>Search</Link>
            </div> */}
      </div>
    </nav>
  )
}

export default Navbar
