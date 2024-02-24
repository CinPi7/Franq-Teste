import { Link } from "react-router-dom";
import { CircleUserRound, LockKeyhole } from "lucide-react";

const Register = () => {
  return (
    <div className="border-2 border-indigo-300 rounded-lg p-10 shadow-lg backfrop-filter backdrop-blur-sm bg-opacity-35 relative">
      <h1 className="text-4xl text-indigo-100 font-bold text-center mb-6 ">
        Registrar
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
            Confirmar Senha
          </label>
        </div>

        <button
          type="submit"
          className="w-full mb-4 text-[14px] mt-6 h-7 rounded-full bg-pink-100 text-zinc-800 duration-150 hover:bg-indigo-400 hover:text-white"
        >
          Registrar
        </button>
        <div>
          <span className="text-indigo-100 text-sm font-thin">
            Já é cadastrado?{" "}
            <Link to="/Login" className="font-bold text-indigo-300">
              Faça o login!
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
