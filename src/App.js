import Categoryy from "./pages/Categoryy";
import Productpage from "./pages/Productpage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Admin_Dashboard from "./pages/Admin_Dashboard";
import Private from "./components/routes/Private";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Categoryy />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Private>
          <Register />
        </Private> } />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
