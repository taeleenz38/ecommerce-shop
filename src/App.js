import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import shop from './pages/shop/shop';
import cart from './pages/cart/cart';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<shop/>} />
          <Route path="/cart" element={<cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
