import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Product from './component/Product';
import PageNotFound from './component/PageNotFound';
import MainHeader from './component/MainHeader';
function App() {
  return (
   
    <div>
     <nav>
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
      </ul>
    </nav>
     <Routes>
      <Route path='/' element={<MainHeader/>}>
      {/* default route */}
      <Route index element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/*" element={<PageNotFound/>}></Route>
      </Route>
     </Routes>
    </div>
  );
}
export default App;
