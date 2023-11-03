import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import DashboardPage from './DashboardPage'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'

function ClerkProviderWithRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route
        path="/cart"
        element={
          <>
            {/* ova e protected ako sme logirani so google znaci moze da pristapime do pagov */}
            <SignedIn>
              <CartPage />
            </SignedIn>

            {/* ako sme odlogirani nosime na signin */}
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  )
}

export default ClerkProviderWithRoutes
