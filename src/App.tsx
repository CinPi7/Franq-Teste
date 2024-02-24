import LOGO from "./assets/LOGO.svg";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="h-screen">
      <div className="py-8 mx-8 flex items-center justify-between">
        <img src={LOGO} alt="franq-logo" />
        <div className="bg-indigo-400 border-10 h-12 w-12 rounded-full"></div>
      </div>
      <div
        className="text-zinc-800 flex justify-center items-center h-2/3 bg-slate-300"
        style={{ backgroundImage: "url('./src/assets/background.png')" }}
      >
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Routes>
      </div>

      <footer className="inset-x-0 bottom-0 relative h-44 w-auto bg-gray-800">
        <p className="flex items-center justify-center h-5/6">
          <a
            href="https://github.com/CinPi7/Franq"
            className="text-pink-200 font-thin text-lg"
          >
            2024
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
