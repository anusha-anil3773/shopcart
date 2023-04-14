import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom"
import Cart from "./components/cart/cart";
import Login from "./pages/login/Login";
function App() {
  return (
  
   <div>
       
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    
   </div>
  )
}

export default App;
