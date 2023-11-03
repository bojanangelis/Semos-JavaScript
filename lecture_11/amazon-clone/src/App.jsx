import { BrowserRouter } from 'react-router-dom'
import ClerkProviderWithRoutes from './pages/ClerkProviderWithRoutes'

// za doma
// login forma so react router dom
// globalen state po izbor
// i prikazuvanje na movies so fetch movies

// cela web strana

function App() {
  return (
    <>
      <BrowserRouter>
        <ClerkProviderWithRoutes />
      </BrowserRouter>
      {/* <DashboardPage /> */}
    </>
  )
}

export default App
