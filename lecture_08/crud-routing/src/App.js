import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutComponent from "./pages/LayoutComponent";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem('email'));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "home", element: <HomePage /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}



export default App;
