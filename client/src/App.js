import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom"
import Cart from "./components/cart/cart";

function App() {
  return (
  
   <div>
       
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    
   </div>
  )
}

export default App;
