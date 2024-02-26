import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="bg-cover bg-repeat flex justify-center h-[100vh] bg-local bg-background">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
