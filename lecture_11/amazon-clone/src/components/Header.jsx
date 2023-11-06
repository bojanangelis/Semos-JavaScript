import React from 'react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/solid'
import {
  SignIn,
  SignInButton,
  UserButton,
  UserProfile,
  useAuth,
} from '@clerk/clerk-react'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { userId } = useAuth()
  const navigate = useNavigate()

  const items = useSelector(selectItems)

  return (
    //ceo
    <header className="">
      <div className="flex items-center bg-amazon_blue p-4 flex-grow">
        {/* img */}
        <div className="mt-2 pr-4 flex items-center flex-grow sm:flex-grow-0">
          <img
            className="cursor-pointer"
            width={150}
            height={50}
            src={'https://pngimg.com/d/amazon_PNG11.png'}
            alt={'Amazon logo'}
          />
        </div>
        {/* search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-lg flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            placeholder="Search your amazon product"
            className="p-2 h-full w-6 flex-grow rounded-md flex-shrink focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-16 p-4 text-gray-500" />
        </div>
        {/* right side signup */}
        <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap cursor-pointer">
          <div className="link">
            {userId ? (
              <UserButton />
            ) : (
              <SignInButton>
                <button className="hover:underline flex flex-col underline-offset-2 ">
                  Hello, Sign In <span>Account & list</span>
                </button>
              </SignInButton>
            )}
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div
            onClick={() => navigate('/cart')}
            className="relative flex items-center"
          >
            {items.length > 0 && (
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
            )}
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav  */}

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="flex items-center">
          <Bars3Icon className="h-6 mr-1" />
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's deals</p>
        <p className="hidden md:inline-flex link">Electronics</p>
        <p className="hidden md:inline-flex link">Food & grocery</p>
        <p className="hidden md:inline-flex link">Prime</p>
        <p className="hidden md:inline-flex link">Buy again</p>
        <p className="hidden md:inline-flex link">Shopper Toolkit</p>
      </div>
    </header>
  )
}

export default Header
