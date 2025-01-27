import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pedidos from './Pages/SaleOrder/SaleOrder';
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale-order" element={<Pedidos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
