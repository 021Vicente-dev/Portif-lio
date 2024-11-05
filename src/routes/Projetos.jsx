import { useState } from "react";
import { Contatos } from "../components/Contatos";
import bio from "../../public/bio.png";
import landingPage from "../../public/landingPage.png";
import cadastro from "../../public/cadastro.png";
import login from "../../public/login.png";
import buscadordecep from "../../public/buscadordecep.png";
import portifolio from "../../public/portifolio.png";
import hud from "../../public/hud-focus.png";
import hudc from "../../public/hudc-focus.png";
import rotas from "../../public/rotass.png";
import telamorte from "../../public/tela-de-morte.png";

export const Projetos = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleHandleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className={`${darkMode && "dark"}`}>
        <div className="duration-700 flex justify-between items-center px-5 h-20 border-b-[1.4px] border-neutral-200 dark:border-b-[1px] dark:border-neutral-600 dark:bg-neutral-950">
          <div className="hidden lg:flex gap-5">
            <a
              className="text-sm font-lexend-regular text-neutral-950 duration-500 hover:text-slate-500 dark:text-slate-50 dark:hover:text-slate-400 "
              href="/#home"
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
              href="#contatos"
            >
              Contatos
            </a>
          </div>
          <div>
            <a href="#home">
              <h1 className=" font-lexend-bold text-3xl lg:-ml-[13.6rem] text-neutral-800 dark:text-white">
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
                  <p className="text-base font-lexend-medium font-">light</p>
                </i>
              ) : (
                <i className="bi bi-moon-stars-fill flex justify-center items-center gap-2 text-center">
                  <p className="text-base font-lexend-medium">drak</p>
                </i>
              )}
            </button>
          </div>
        </div>
        <div className="duration-700 dark:bg-neutral-950">
          <div className="text-center flex flex-col py-3 gap-3">
            <h1 className="text-5xl font-lexend-semibold dark:text-neutral-50">Projetos</h1>
            <p className="text-xs font-lexend-extralight dark:text-neutral-300">
              Abaixo, você pode ver meus projetos. Role a página para explorar
              todos eles.
            </p>
          </div>

          <h1 className="text-center font-lexend-regular text-2xl dark:text-neutral-50 py-5">
            Html/Css
          </h1>
          <div className="flex justify-center">
            <div className="w-[45rem] h-72 overflow-y-auto p-4 border-[1px] border-neutral-600 rounded-md py-9">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                    Landing Page
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={landingPage}
                    alt=""
                  />
                  <p className="text-neutral-950 pb-5 font-lexend-light text-sm dark:text-neutral-100">uma pagina virtual para compras e encomendas</p>
                  <div className="flex md:gap-5 gap-2 max-[414px]:mt-[1.3rem] max-[390px]:mt-0">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://021vicente-dev.github.io/Landing-Page/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="md:w-[7.6rem] w-[9rem] text-xs md:text-base border-[1px] rounded-md border-blue-800 text-blue-800">
                      <a href="https://github.com/021Vicente-dev/Landing-Page" target="_blank">
                        <i className="bi bi-github pr-1"></i>Github
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                    Bio
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={bio}
                    alt=""
                  />
                  <p className="text-neutral-950 md:pb-6 font-lexend-light text-sm dark:text-neutral-100">Uma bio de redes sociais podendo conter vários links e informações</p>
                  <div className="flex md:gap-5 gap-2">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://021vicente-dev.github.io/Bio/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="md:w-[7.6rem] w-[9rem] text-xs md:text-base border-[1px] rounded-md border-blue-800 text-blue-800">
                      <a href="https://github.com/021Vicente-dev/Bio" target="_blank">
                        <i className="bi bi-github pr-1"></i>Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-center font-lexend-regular text-2xl dark:text-neutral-50 py-8">
            JavaScript
          </h1>
          <div className="flex justify-center">
            <div className="w-[45rem] h-72 overflow-y-auto p-4 border-[1px] border-neutral-600 rounded-md py-9">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                    Tela de Login
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={login}
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Tela de Login ultilizada em sites</p>
                  <div className="flex md:gap-5 gap-2 max-[390px]:mt-[1.9rem]">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://021vicente-dev.github.io/Login/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="md:w-[7.6rem] w-[9rem] text-xs md:text-base border-[1px] rounded-md border-blue-800 text-blue-800">
                      <a href="https://github.com/021Vicente-dev/Login" target="_blank">
                        <i className="bi bi-github pr-1"></i>Github
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                    Tela de Cadastro
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={cadastro}
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Tela de Cadastro ultilizada em sites</p>
                  <div className="flex md:gap-5 gap-2">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://021vicente-dev.github.io/Cadastro/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="md:w-[7.6rem] w-[9rem] text-xs md:text-base border-[1px] rounded-md border-blue-800 text-blue-800">
                      <a href="https://github.com/021Vicente-dev/Cadastro" target="_blank">
                        <i className="bi bi-github pr-1"></i>Github
                      </a>
                    </button>
                  </div>
                </div>     
              </div>
            </div>
          </div>

          <h1 className="text-center font-lexend-regular text-2xl dark:text-neutral-50 py-8">
            React.Js
          </h1>
          <div className="flex justify-center pb-8">
            <div className="w-[45rem] h-72 overflow-y-auto p-4 border-[1px] border-neutral-600 rounded-md py-9">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                    Buscador de cep
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={buscadordecep}
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light pb-2 text-sm dark:text-neutral-100">Buscador de cep consulte seu endereço pelo seu cep de qualquer lugar</p>
                  <div className="flex md:gap-5 gap-2">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://buscador-de-p4boo5oz6-pigmeu200s-projects.vercel.app/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="md:w-[7.6rem] w-[9rem] text-xs md:text-base border-[1px] rounded-md border-blue-800 text-blue-800">
                      <a href="https://github.com/021Vicente-dev/Buscador-de-Cep" target="_blank">
                        <i className="bi bi-github pr-1"></i>Github
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                    Protifólio
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={portifolio}
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Uma página onde mostramos quem somos e nossos aprendizados</p>
                  <div className="flex md:gap-5 gap-2 max-[390px]:mt-[1.9rem] max-[414px]:mt-[1.4rem]">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://portif-lio-plum.vercel.app/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="md:w-[7.6rem] w-[9rem] text-xs md:text-base border-[1px] rounded-md border-blue-800 text-blue-800">
                      <a href="https://github.com/021Vicente-dev/Portif-lio" target="_blank">
                        <i className="bi bi-github pr-1"></i>Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center font-lexend-regular text-2xl dark:text-neutral-50 py-8">
            Fivem
          </h1>
          <div className="flex justify-center pb-8">
            <div className="w-[45rem] h-72 overflow-y-auto p-4 border-[1px] border-neutral-600 rounded-md py-9">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                    Hud・Fron-End
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={hud}
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light pb-2 text-sm dark:text-neutral-100">Uma hud desenvolvida por mim para a cidade Focus Roleplay.</p>
                  <div className="flex justify-center md:gap-5 gap-2">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://cdn.discordapp.com/attachments/1284338854693703703/1303172413613146132/image.png?ex=672ac963&is=672977e3&hm=9943a90156fa4a78d210b46b8fc5a4949c1435c83ff8d95d9311987347f49475&" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    
                  </div>
                </div>
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                  Hud Veiculos・Fron-End
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={hudc}
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Uma hud para veiculos desenvolvida por mim para a cidade Focus Roleplay.</p>
                  <div className="flex justify-center md:gap-5 gap-2 max-[390px]:mt-[1.9rem] max-[414px]:mt-[1.4rem]">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500 ">
                      <a href="https://cdn.discordapp.com/attachments/1284338854693703703/1303172405643972708/image.png?ex=672ac961&is=672977e1&hm=ba01770467d358c52a2befc79ca2dfb2ca2f16b7ffa8702f7dd07f4ea5378aee&" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                   
                  </div>
                </div>
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                  Rotas・Fron-End
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={rotas}
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Uma Front de Rotas desenvolvido por mim para iniciar rotas de diversos items</p>
                  <div className="flex justify-center md:gap-5 gap-2 max-[390px]:mt-[1.9rem] max-[414px]:mt-[1.4rem]">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://cdn.discordapp.com/attachments/1284338854693703703/1303172432689106945/image.png?ex=672ac967&is=672977e7&hm=8dc2888cab4f1feb400fd070462d0a92dc07b634cfc433c4bdb31f0e9015bbce&" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    
                  </div>
                </div>
                <div className="flex flex-col gap-5 text-white text-center bg-gray-50 border-[1px] border-neutral-600 rounded px-2 py-3 dark:bg-neutral-900">
                  <h1 className="text-neutral-950 font-lexend-regular text-xl dark:text-neutral-50">
                  Tela de Morte・Fron-End
                  </h1>
                  <img
                    className="items-center mx-4 rounded-md"
                    src={telamorte}
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Uma Tela de morte desenvolvida por mim, para mostrar que o player esta morto </p>
                  <div className="flex justify-center md:gap-5 gap-2 max-[390px]:mt-[1.9rem] max-[414px]:mt-[1.4rem]">
                    <button className="md:w-[13rem] w-[9rem] py-2 text-xs md:text-base px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://cdn.discordapp.com/attachments/1284338854693703703/1303172426506571807/image.png?ex=672ac966&is=672977e6&hm=8b88b0214583dbdb42877818f8d1eadd1acda0104b0147e3ad46437016a0e69a&" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="duration-700 dark:bg-neutral-950">
          <Contatos />
        </div>
      </div>
    </div>
  );
};
