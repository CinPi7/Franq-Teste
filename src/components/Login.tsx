import { Link } from "react-router-dom";
import { CircleUserRound, LockKeyhole } from "lucide-react";

const Login = () => {
  return (
    <div className="border-2 border-indigo-300 rounded-lg p-10 shadow-lg backfrop-filter backdrop-blur-sm bg-opacity-35 relative">
      <h1 className="text-4xl text-indigo-100 font-bold text-center mb-6 ">
        Login
      </h1>
      <form>
        <div className="relative my-4">
          <input
            placeholder="username@email.com"
            type="email"
            className="h-8 block w-72 py-3 text-sm text-zinc-300 bg-transparent border-2 rounded  border-b-3 border-indigo-400 appearance-none px-2   focus:outline-none focus:ring focus:ring-pink-200 "
          />
          <label htmlFor="email" className="text-indigo-100 text-sm font-thin">
            <CircleUserRound className="size-4 absolute top-2 right-3 text-indigo-300" />{" "}
            Seu Email
          </label>
        </div>
        <div className="relative my-4">
          <input
            placeholder="****"
            type="password"
            className="h-8 block w-72 py-3 text-sm text-zinc-300 bg-transparent border-2 rounded  border-b-3 border-indigo-400 appearance-none px-2  focus:outline-none focus:ring focus:ring-pink-300 "
          />
          <label
            htmlFor="password"
            className="text-indigo-100 text-sm font-thin"
          >
            <LockKeyhole className="size-4 absolute top-2 right-3 text-indigo-300" />
            Sua Senha
          </label>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-indigo-100 text-sm font-thin flex gap-2 items-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Lembre-se de mim">Resgatar senha</label>
          </div>
          <Link to="/" className="text-indigo-300 text-sm font-thin">
            Esqueceu a senha?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full mb-4 text-[14px] mt-6 h-7 rounded-full bg-pink-100 text-zinc-800 duration-150 hover:bg-indigo-400 hover:text-white"
        >
          Entrar
        </button>
        <div>
          <span className="text-indigo-100 text-sm font-thin">
            Novo aqui?{" "}
            <Link to="/Register" className="font-bold text-indigo-300">
              Crie uma conta!
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
