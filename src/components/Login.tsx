import { Link } from "react-router-dom";
import { CircleUserRound, LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedRememberMe = localStorage.getItem("rememberMe");

    if (storedRememberMe === "true" && storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      setTimeout(() => {
        alert(`Bem vindo, ${storedEmail}`);
      }, 5000);

      window.location.href = "/dashboard";
    } else if (email === "" || password === "") {
      setError("Preencha todos os campos.");
    } else {
      setError("Email ou senha incorretos.");
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 border-indigo-300 rounded-lg p-10 shadow-lg backfrop-filter backdrop-blur-sm bg-opacity-35 relative bg-indigo-300">
        <h1 className="text-4xl text-indigo-100 font-bold text-center mb-6 ">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="overflow-auto pb-4"
          id="login"
          name="login"
        >
          <div className="relative my-4">
            <input
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="username@email.com"
              type="email"
              id="email"
              className="h-8 block w-72 py-3 text-sm text-zinc-300 bg-transparent border-2 rounded  border-b-3 border-indigo-400 appearance-none px-2   focus:outline-none focus:ring focus:ring-pink-200 "
            />
            <label
              htmlFor="email"
              className="text-indigo-100 text-sm font-thin"
            >
              <CircleUserRound className="size-4 absolute top-2 right-3 text-indigo-300" />{" "}
              Seu Email
            </label>
          </div>
          <div className="relative my-4">
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="****"
              type="password"
              id="password"
              className="h-8 block w-72 py-3 text-sm text-zinc-300 bg-transparent border-2 rounded  border-b-3 border-indigo-400 appearance-none px-2   focus:outline-none focus:ring focus:ring-pink-200 "
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
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Lembre-se de mim</label>
            </div>
            <Link to="/" className="text-indigo-300 text-sm font-thin">
              Esqueceu a senha?
            </Link>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

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
    </div>
  );
};

export default Login;
