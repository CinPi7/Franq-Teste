import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <div
        className="text-zinc-800 flex justify-center items-center h-2/3 bg-slate-300"
        style={{ backgroundImage: "url('./src/assets/background.png')" }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
