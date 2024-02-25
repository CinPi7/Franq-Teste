import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Plus } from "lucide-react";

function App() {
  return (
    <div className="">
      <Header />

      <div
        className="bg-cover bg-repeat flex justify-center h-[100vh]"
        style={{
          backgroundImage: "url('./src/assets/background.jpg')",
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Dashboard" element={<DashboardContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export function DashboardContent() {
  return (
    <div className="flex flex-col w-[90%] my-6">
      <div className="flex flex-row">
        <h1 className="text-xl text-white mb-2 font-bold">Finance</h1>
        <button className="inline-flex items-center ml-6 justify-center gap-1.5 text-xs bg-indigo-400 text-zinc-950 font-bold rounded-full px-1.5 py-2 w-24 mb-4">
          <Plus className="size-3 text-zinc-950 font-bold" />
          Criar
        </button>
      </div>
      <div className="bg-zinc-800 opacity-80 max-h-[calc(100vh - 296px)] overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
