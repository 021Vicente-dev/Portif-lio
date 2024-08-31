import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FaJsSquare, FaReact, FaBootstrap, FaSass } from "react-icons/fa";
import { SiTypescript, SiVite, SiMysql } from "react-icons/si";
export const Experiencias = () => {
  return (
    <div id="habilidades">
      <div className="duration-700 flex justify-between flex-col items-center px-5 h-full dark:bg-neutral-950 py-20">
        <div className="flex flex-col gap-3 pt-5">
          <h1 className="text-neutral-950 text-center text-3xl font-lexend-semibold dark:text-slate-100">
            Minhas experiências
          </h1>
          <p className="text-neutral-950 text-center text-sm font-lexend-light dark:text-slate-400">
            Minhas experiências e as linguagens de <strong>programação</strong>{" "}
            e de <strong>marcação / estilização</strong> nas quais tenho maior
            domínio e expertise.
          </p>
        </div>
        <div className="flex border-[1.5px]  rounded-lg px-9 py-2 mb-5 mt-12 dark:border-neutral-700">
          {/* Java Script */}

          <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
              <FaJsSquare className="mt-3 ml-3 text-white" />
            </div>
          </a>

          {/* React.js */}

          <a href="https://react.dev/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
              <FaReact className="mt-2.5 ml-2.5 text-white text-xl" />
            </div>
          </a>

          {/* TypeScript */}

          <a href="https://www.typescriptlang.org/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
              <SiTypescript className="mt-3 ml-3 text-white"/>
            </div>
          </a>

          {/* React.Native */}

          <a href="https://reactnative.dev/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
            <FaReact className="mt-2.5 ml-2.5 text-white text-xl" />
            </div>
          </a>

          {/* Vite */}

          <a href="https://vitejs.dev/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
            <SiVite className="mt-3 ml-3 text-white"/>
            </div>
          </a>

          {/* TailwindCss */}

          <a href="https://tailwindcss.com/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
              <RiTailwindCssFill className="mt-3 ml-3 text-white" />
            </div>
          </a>

          {/* BoosTrap */}

          <a href="https://getbootstrap.com/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
              <FaBootstrap className="mt-3 ml-3 text-white"/>
            </div>
          </a>

          {/* sass */}

          <a href="https://sass-lang.com/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
              <FaSass className="mt-3 ml-3 text-white"/>
            </div>
          </a>

          {/* MySql */}

          <a href="https://www.mysql.com/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
            <SiMysql className="mt-3 ml-3 text-white"/>
            </div>
          </a>
          {/* Next.js */}

          <a href="https://nextjs.org/" target="_blank">
            <div className="flex w-12 h-12 rounded-r-full rounded-l-full border-4 border-white -ml-5 hover:-mt-5 hover:cursor-pointer duration-500 bg-neutral-900 dark:border-neutral-950">
            <RiNextjsLine className="mt-3 ml-3 text-white"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
