import './App.css';
import ProductDetail from './Components/ProductDetail';
import ProductList from './Components/ProductList';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './Components/Cart';
import Login from './Components/login/Login';
import SignUp from './Components/login/SignUp';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
  );
}

export default App;
