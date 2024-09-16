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
                    src="https://cdn.discordapp.com/attachments/1284338854693703703/1284339009400733747/image.png?ex=66e8e869&is=66e796e9&hm=9bbf3584024aec9d3170934587e3d4bade4979784ba57e7db0e409a34bf8af2f&"
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
                    src="https://cdn.discordapp.com/attachments/1284338854693703703/1284338997530857545/image.png?ex=66e8e866&is=66e796e6&hm=8969536d29c18171a431235d6c3bc73fb68c166590598be25bbec9c3c699ad60&"
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
                    src="https://cdn.discordapp.com/attachments/1284338854693703703/1284338985858240595/image.png?ex=66e8e864&is=66e796e4&hm=9b100e35fe0529453d4de0bed4e5212db9cf843cda2e7863c084873c6c0802e5&"
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
                    src="https://cdn.discordapp.com/attachments/1284338854693703703/1284338929306308669/image.png?ex=66e8e856&is=66e796d6&hm=772c8de9427be24d817d4806188cff037b3d59ddd24fe4b312c8699fea2aab7e&"
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
                    src="https://cdn.discordapp.com/attachments/1284338854693703703/1284338894971867146/image.png?ex=66e8e84e&is=66e796ce&hm=8fd4dbde2222a051a6e98e27fc25001b379c76dd0b7bbeaf40f4b9b4894705b8&"
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
                    src="https://cdn.discordapp.com/attachments/1284338854693703703/1284339174601916538/image.png?ex=66e8e891&is=66e79711&hm=49741e08f7d74d2d727bed5b3c1eefa9ffa085a414a9fbf86b2daeeecbbd4f38&"
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
        </div>
        <div className="duration-700 dark:bg-neutral-950">
          <Contatos />
        </div>
      </div>
    </div>
  );
};
