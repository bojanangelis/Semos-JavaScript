import './App.css';
import AboutPage from './Pages/AboutPage';
import ErrorPage from './Pages/ErrorPage';
import CustomSharedLayout from './Pages/CustomShatedLayout';
import ProductsPage from './Pages/ProductsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductIdPage from './Pages/ProductIdPage';


// homework

// signup login dashboard
// posebni ruti za login email



function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        {/* routes -- Nested */}
        <Route path='/' element={<CustomSharedLayout />}>
            {/*  ako imame nested ruti  mora da imame vo ShareLayout Outlet */}
            <Route index path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='products' element={<ProductsPage />} />
            
            <Route path='product/:productID' element={<ProductIdPage />} />
            
            <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
