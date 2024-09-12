export const Contatos = () => {
  return (
    <div id="contatos">
      <div className="duration-700 bg-white border-t-[1.4px] dark:border-t-[0.5px] dark:border-neutral-700 dark:bg-neutral-950 py-4 ">
        <div className="lg:flex lg:justify-between px-8">
          <div className="lg:flex">
            <div>
              <h1 className=" text-center pt-8 font-lexend-bold text-3xl lg:text-5xl lg:text-start text-neutral-800 dark:text-white">
                Vicente<span className="text-purple-900">.dev</span>
              </h1>
            </div>
            <div className="text-center lg:text-start lg:pl-3 flex flex-col py-6">
              <div>
                <h2 className="text-xl font-lexend-bold pb-2 dark:text-white">
                  Paginas
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-2">
                <a
                  href="/#home"
                  className="text-base font-lexend-light dark:text-white pb-2"
                >
                  Inicio
                </a>
                <a
                  href="/sobre"
                  className="text-base font-lexend-light dark:text-white pb-2"
                >
                  Sobre
                </a>
                <a
                  href="/#habilidades"
                  className="text-base font-lexend-light dark:text-white pb-2"
                >
                  Habilidades
                </a>
                <a
                  href="/projetos"
                  className="text-base font-lexend-light dark:text-white pb-2"
                >
                  Projetos
                </a>

                <a
                  href="#contatos"
                  className="text-base font-lexend-light dark:text-white pb-2"
                >
                  Contatos
                </a>
              </div>
            </div>
          </div>
          <div className="text-center lg:justify-end ">
            <p className="text-center  pt-4 font-lexend-regular dark:text-white">
              <i className="bi bi-telephone text-black dark:text-white pr-2"></i>
              : (21) 99528-2307
            </p>
            <p>
              <p className="text-center text-base font-lexend-light dark:text-white">
                <i className="bi bi-envelope-at text-black dark:text-white pr-2"></i>
                : vicente.dev021@gmail.com
              </p>
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:text-center ml-4 gap-4 dark:">
          <a href="https://wa.me/5521995282307">
            <i className="bi bi-whatsapp duration-500 text-2xl cursor-pointer text-green-400 hover:text-green-600"></i>
          </a>
          <a href="https://github.com/021Vicente-dev">
            <i className="bi bi-github duration-500 text-2xl cursor-pointer text-neutral-950 dark:text-neutral-100 dark:hover:text-neutral-400 hover:text-neutral-800"></i>
          </a>
          <a href="https://www.linkedin.com/in/ryan-vicente-35b4a6326/">
            <i className="bi bi-linkedin duration-500 text-2xl cursor-pointer text-blue-600 hover:text-blue-400"></i>
          </a>
          <a href="https://discord.gg/6zvKwSTxPQ">
            <i className="bi bi-discord duration-500 text-2xl cursor-pointer text-blue-800 hover:text-blue-600"></i>
          </a>
        </div>
        <p className="dark:text-white text-center pt-4">©  Todos os direitos reservados há <strong>Vicente<strong className="text-purple-900">.dev</strong></strong>.</p>
      </div>
    </div>
  );
};
