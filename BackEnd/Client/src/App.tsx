import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from "./Components/Login";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import AddProduct from "./Components/AddProduct";
import Register from "./Components/Register";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/products/add" element={<AddProduct/>} />
                <Route path="/products/:productId" element={<ProductDetail/>} />
            </Routes>
        </div>
    )
}

export default App
