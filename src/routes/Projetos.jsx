import { useState } from "react";
import { Contatos } from "../components/Contatos";

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
                    src="https://cdn.discordapp.com/attachments/1172335701874974822/1279395153483796541/image.png?ex=66d44916&is=66d2f796&hm=f199be2fc53b5cb4d9c9c1c9768cfe61341386c94694e86be08bb526d00241d1&"
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">uma pagina virtual para compras e encomendas</p>
                  <div className="flex gap-5">
                    <button className="w-[10rem] px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://021vicente-dev.github.io/Landing-Page/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="w-[7.6rem] border-[1px] rounded-md border-blue-800 text-blue-800">
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
                    src="https://cdn.discordapp.com/attachments/1172335701874974822/1279395059074076763/image.png?ex=66d44900&is=66d2f780&hm=40de270154ee99b70d316439d9fa6c3632e4fe690581fb48f2cc9ebdfb0a4cf9&"
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Uma bio de redes sociais podendo conter vários links e informações</p>
                  <div className="flex gap-5">
                    <button className="w-[10rem] px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://021vicente-dev.github.io/Bio/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="w-[7.6rem] border-[1px] rounded-md border-blue-800 text-blue-800">
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
                    src="https://media.discordapp.net/attachments/1172335701874974822/1279395168134365297/image.png?ex=66d4491a&is=66d2f79a&hm=ac89ef12d46c14fd6fb4fff66fc8455ba49ee33bc02d285769c35a611a7446c8&=&format=webp&quality=lossless&width=550&height=322"
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Tela de Login ultilizada em sites</p>
                  <div className="flex gap-5">
                    <button className="w-[10rem] px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://021vicente-dev.github.io/Login/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="w-[7.6rem] border-[1px] rounded-md border-blue-800 text-blue-800">
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
                    src="https://cdn.discordapp.com/attachments/1172335701874974822/1279395100916449311/image.png?ex=66d4490a&is=66d2f78a&hm=0f366e4fafd2e82e892d76bfe454b46dcc3ffc6f42d6382643e35ebead110436&"
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Tela de Cadastro ultilizada em sites</p>
                  <div className="flex gap-5">
                    <button className="w-[10rem] px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://021vicente-dev.github.io/Cadastro/">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="w-[7.6rem] border-[1px] rounded-md border-blue-800 text-blue-800">
                      <a href="https://github.com/021Vicente-dev/Cadastro">
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
                    src="https://cdn.discordapp.com/attachments/1172335701874974822/1279395078430789632/image.png?ex=66d44904&is=66d2f784&hm=af2ea1ccf64c663c8cc03905839ccec32224a2d6575b5f184c25da98087b1c1a&"
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Buscador de cep consulte seu endereço pelo seu cep de qualquer lugar</p>
                  <div className="flex gap-5 pt-4">
                    <button className="w-[10rem] px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="https://buscador-de-p4boo5oz6-pigmeu200s-projects.vercel.app/" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="w-[7.6rem] border-[1px] rounded-md border-blue-800 text-blue-800">
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
                    src="https://cdn.discordapp.com/attachments/1172335701874974822/1279395186790764604/image.png?ex=66d4491e&is=66d2f79e&hm=23bc63d7d7294c410107f9a1f918340477564ebefee5e2d9defdcc807d2f20fb&"
                    alt=""
                  />
                  <p className="text-neutral-950 font-lexend-light text-sm dark:text-neutral-100">Uma página onde mostramos quem somos e nossos aprendizados</p>
                  <div className="flex gap-5">
                    <button className="w-[10rem] px-[0.5rem] border-[1px] rounded-md border-green-500 text-green-500">
                      <a href="" target="_blank">
                        <i className="bi bi-eye pr-1"></i>Visualizar
                      </a>
                    </button>
                    <button className="w-[7.6rem] border-[1px] rounded-md border-blue-800 text-blue-800">
                      <a href="" target="_blank">
                        <i className="bi bi-github pr-1"></i>Github
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
