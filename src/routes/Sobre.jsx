import { useState } from "react";
import { Contatos } from "../components/Contatos";

export const Sobre = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleHandleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="duration-700 flex justify-between items-center px-5 h-20 border-b-[1.4px] border-neutral-200 dark:border-b-[1px] dark:border-neutral-500 dark:bg-neutral-950">
        <div className="hidden lg:flex gap-5">
          <a
            className="text-sm font-lexend-regular text-neutral-950 duration-500 hover:text-slate-500 dark:text-slate-50 dark:hover:text-slate-400 "
            href="/"
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
            <h1 className=" font-lexend-bold text-3xl lg:-ml-52 text-neutral-800 dark:text-white">
              Vicente<span className="text-purple-900">.dev</span>
            </h1>
          </a>
        </div>
        <div className="border-[1px] border-neutral-400 text-center p-1 w-24 rounded-lg">
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
                <p className="text-base font-lexend-medium">drak</p>
              </i>
            )}
          </button>
        </div>
      </div>
      <div className="duration-700 bg-white dark:bg-neutral-950">
        <div className="text-center font-lexend-regular text-5xl pt-3 pb-8 text-neutral-900 dark:text-neutral-100">
          <h1>Um Pouco Sobre Mim</h1>
        </div>
        <div className="flex flex-row items-center gap-9 ml-14 px-8 w-11/12 pb-8">
          <div className="">
            <p className="text-center py-8 px-5 border-[1px] border-neutral-400 rounded-2xl text-sm font-mono text-neutral-900 dark:text-neutral-50">
              Olá, meu nome é <strong>Ryan Vicente</strong> conhecido como
              <strong>Vicente.Dev</strong>, tenho 16 anos e sou um entusiasta e
              profissional em desenvolvimento web, com especialização também em
              aplicativos mobile. Desde criança, a tecnologia sempre foi uma das
              minhas maiores paixões. Minha curiosidade e vontade de entender
              como as coisas funcionam me levaram a explorar cada vez mais esse
              universo. Em 2019, após muito esforço e dedicação, consegui
              realizar um grande sonho, comprar meu primeiro computador. Esse
              momento foi um divisor de águas na minha vida, pois me abriu as
              portas para o vasto e fascinante mundo da programação. Apesar de
              minha paixão inicial, foi somente em 2022 que decidi realmente
              mergulhar de cabeça na área de desenvolvimento. Desde então, venho
              me dedicando intensamente a aprimorar minhas habilidades,
              aprendendo novas linguagens, frameworks e técnicas que me permitem
              criar soluções inovadoras e eficientes. Durante esse período, me
              envolvi em diversos projetos, tanto pessoais quanto acadêmicos,
              que me proporcionaram uma base sólida de conhecimentos práticos e
              teóricos. Atualmente, estou cursando o último ano do ensino médio,
              onde busco aplicar e expandir meus conhecimentos adquiridos em
              cursos especializados. Já completei várias formações que foram
              essenciais para consolidar minhas habilidades técnicas em
              programação,
              <strong> desenvolvimento web e aplicativos mobile.</strong>
            </p>
          </div>

          <img
            className="h-[30rem] rounded-3xl"
            src="./../public/image.png"
            alt=""
          />
          <div>
            <p className="text-center py-8 px-5 border-[1px] border-neutral-400 rounded-2xl text-sm font-mono text-neutral-900 dark:text-neutral-50">
              Minha trajetória educacional tem sido marcada por um forte
              compromisso com o aprendizado contínuo, o que me permite estar
              sempre atualizado com as tendências e inovações do setor. No
              próximo ano, estou animado para iniciar a faculdade de Engenharia
              de Software. Vejo essa nova fase como uma oportunidade de
              aprofundar ainda mais meus conhecimentos e me preparar para os
              desafios do mercado de trabalho. Acredito que a combinação de
              minha experiência prática, adquirida ao longo dos últimos anos,
              com a formação acadêmica em Engenharia de Software, será crucial
              para meu desenvolvimento como profissional completo e inovador.
              Sou uma pessoa altamente motivada, sempre em busca de aprender
              coisas novas e evoluir em minha carreira. Estou constantemente
              explorando novas tecnologias, metodologias e abordagens para
              aprimorar minhas habilidades e contribuir de forma significativa
              em qualquer projeto do qual faça parte. Neste momento, estou
              aberto a novas oportunidades, seja em projetos
              <strong>freelancers</strong> ou em uma
              <strong>contratação formal</strong>. Estou pronto para colaborar
              em iniciativas que me permitam continuar expandindo minhas
              competências e agregar valor através de soluções criativas e
              eficazes.
            </p>
          </div>
        </div>
        <div className="flex justify-between px-8 pb-8 gap-8">
          <div className=" flex-col items-center w-2/4 text-center border-[1px] rounded-md border-neutral-300">
            <h1 className="text-xl font-lexend-regular py-3 text-neutral-900 dark:text-neutral-100">
              Minhas formação acadêmica
            </h1>
            <hr />
            <div className="flex flex-col justify-center">
              <div className="flex justify-center border-[1.6px] rounded-md my-3 p-1 mx-8">
                <i className="bi bi-mortarboard lg:-ml-[12.7rem] lg:mr-36 border-[1.3px] rounded-md p-2 pt-1 text-4xl dark:text-neutral-100"></i>
                <div>
                  <h2 className="text-xl font-lexend-regular text-neutral-900 dark:text-neutral-100">
                    MicroLins
                  </h2>
                  <p className="text-sm font-lexend-light dark:text-neutral-300">
                    Desenvolvimento web 2024
                  </p>
                </div>
              </div>
              <div className="flex justify-center border-[1.6px] rounded-md my-3 p-1 mx-8">
                <i className="bi bi-mortarboard lg:-ml-32 lg:mr-14 border-[1.3px] rounded-md p-2 pt-1 text-4xl dark:text-neutral-100"></i>
                <div>
                  <h2 className="text-xl font-lexend-regular text-neutral-900 dark:text-neutral-100">
                    Udemy
                  </h2>
                  <p className="text-sm font-lexend-light dark:text-neutral-300">
                    Formação Front-end - HTML, CSS, JavaScript, React e +
                  </p>
                </div>
              </div>
              <div className="flex justify-center border-[1.6px] rounded-md my-3 p-1 mx-8">
                <i className="bi bi-mortarboard lg:-ml-28 lg:mr-12 border-[1.3px] rounded-md p-2 pt-1 text-4xl dark:text-neutral-100"></i>
                <div>
                  <h2 className="text-xl font-lexend-regular text-neutral-900 dark:text-neutral-100">
                    Udemy
                  </h2>
                  <p className="text-sm font-lexend-light dark:text-neutral-300">
                    Desenvolvimento Web Completo - 20 cursos + 20 projetos
                  </p>
                </div>
              </div>
              <div className="flex justify-center border-[1.6px] rounded-md my-3 p-1 mx-8">
                <i className="bi bi-mortarboard lg:-ml-52 lg:mr-40 border-[1.3px] rounded-md p-2 pt-1 text-4xl dark:text-neutral-100"></i>
                <div>
                  <h2 className="text-xl font-lexend-regular text-neutral-900 dark:text-neutral-100">
                    Senac/Firjan
                  </h2>
                  <p className="text-sm font-lexend-light dark:text-neutral-300">
                    Full Stack - JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] rounded-md border-neutral-300 w-2/4">
            <div className="text-center ">
              <h1 className="text-2xl font-lexend-regular py-3 text-neutral-900 dark:text-neutral-100">Empresas nas quais ja prestei meus serviços</h1>
              <hr />
            </div>
            <div className="text-center flex flex-col gap-8 pt-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-lexend-medium dark:text-neutral-300">Black Network</h3>
                <p className="text-xs font-lexend-light dark:text-neutral-300">
                  Prestei meu serviço para desenvolver um front-end de um site
                  de venda de host em React e TailwindCss
                </p>
              </div>
              <div>
                <h3 className="text-xl font-lexend-medium dark:text-neutral-300">Start Academy</h3>
                <p className="text-xs px-5 font-lexend-light dark:text-neutral-300">Prestei meu serviço como desenvolvedor full stack desenvolvendo scripts e resolvendo bug&#39;s para esse servidor de Fivem</p>
              </div>
              <div>
                <h3 className="text-xl font-lexend-medium dark:text-neutral-300">Flash Shop</h3>
                <p className="text-xs font-lexend-light dark:text-neutral-300">Prestei meu serviço como desenvolvedor full stack um empresa focada em Fivem</p>
              </div>
              <div>
                <h3 className="text-xl font-lexend-medium dark:text-neutral-300">SoSA Dev Group</h3>
                <p className="text-xs font-lexend-light dark:text-neutral-300">Prestei meu serviço como desenvolvedor front-end um empresa focada em Fivem e aplicações webs</p>
                
              </div>
            </div>
          </div>
        </div>

        <Contatos />
      </div>
    </div>
  );
};
