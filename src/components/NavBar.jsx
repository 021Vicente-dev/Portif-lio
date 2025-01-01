import { useState } from "react";
import { Home } from "./Home";
import { Experiencias } from "./Experiencias";
import { Contatos } from "./Contatos";

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleHandleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="duration-700 flex justify-between items-center px-5 h-20 border-b-[1.4px] border-neutral-200 dark:border-b-[1px] dark:border-neutral-600 dark:bg-neutral-950">
        <div className="hidden lg:flex gap-5">
          <a
            className="text-sm font-lexend-regular text-neutral-950 duration-500 hover:text-slate-500 dark:text-slate-50 dark:hover:text-slate-400 "
            href="#"
          >
            Inicio
          </a>
          <a
            className="text-sm font-lexend-regular text-neutral-950 duration-500 hover:text-slate-500 dark:text-slate-50 dark:hover:text-slate-400 "
            href="/sobre"
          >
            Sobre
          </a>
          <a
            className="text-sm font-lexend-regular text-neutral-950 duration-500 hover:text-slate-500 dark:text-slate-50 dark:hover:text-slate-400 "
            href="/#habilidades"
          >
            Habilidades
          </a>
          <a
            className="text-sm font-lexend-regular text-neutral-950 duration-500 hover:text-slate-500 dark:text-slate-50 dark:hover:text-slate-400 "
            href="/projetos"
          >
            Projetos
          </a>
          <a
            className="text-sm font-lexend-regular text-neutral-950 duration-500 hover:text-slate-500 dark:text-slate-50 dark:hover:text-slate-400 "
            href="/#contatos"
          >
            Contatos
          </a>
        </div>
        <div>
          <a href="#home">
            <h1 className=" font-lexend-bold text-3xl lg:-ml-56 text-neutral-800 dark:text-white">
              Vicente<span className="text-purple-900">.dev</span>
            </h1>
          </a>
        </div>
        <div className="border-[1px] border-neutral-600 text-center p-1 w-24 rounded-lg">
          <button
            className=" dark:text-white text-neutral-900"
            onClick={toggleHandleDark}
          >
            {darkMode ? (
              <i className="bi bi-sun-fill flex justify-center items-center gap-2 text-center">
                <p className="text-base font-lexend-medium">light</p>
              </i>
            ) : (
              <i className="bi bi-moon-stars-fill flex justify-center items-center gap-2 text-center">
                <p className="text-base font-lexend-medium">dark</p>
              </i>
            )}
          </button>
        </div>
      </div>
      <Home />
      <Experiencias />
      <Contatos />
    </div>
  );
};
