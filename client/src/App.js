
import { Route,Routes } from "react-router-dom"
import { Outlet, useRoutes } from "react-router-dom"
import Cart from "./components/cart/cart";
import Login from "./pages/login/Login";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import Siginup from "./pages/siginup";
import AuthProtect from "./components/AuthProtect";
import MainLayout from "../src/components/mainLayout"

function App() {
  return useRoutes([
    {
      path: "/",
      element: (
          <AuthProtect>
            <MainLayout>
                <Outlet />
            </MainLayout>
          </AuthProtect>
      ),
      children: [
        { path: "/", element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "signup", element: <Siginup/> }
      ],
    },
    { path: "signin", element: <Login /> },
    // { path: "*", element: <Navigate to="/" /> },
  ]);
}

export default App;