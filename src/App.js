import "./App.css";
import {Routes,Route} from "react-router-dom"
import {Home,Product,Profile,Wishlist,Cart,Error} from './pages'
import { Navbar } from "./Components";

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>    
    </div>
  );
}

export default App;
