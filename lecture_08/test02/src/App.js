import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import './App.css';
import CoustmLayout from './pages/CoustmLayout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CoustmLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/post/:id",
          element: <ProductsPage />,
        },
        {
          path: "/dashboard",
          element: <div>Dashboard</div>,
        },
        {
          path: "/about",
          element: <div>About </div>,
        },
      ],
      errorElement: <ErrorPage />
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
