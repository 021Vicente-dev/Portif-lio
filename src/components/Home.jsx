export const Home = () => {
  return (
    <div id="home" className="duration-700 bg-white dark:bg-neutral-900 bg-scroll">
      <div className="flex justify-around items-center py-16 border-b-[1.4px] border-neutral-200 dark:border-neutral-700 dark:border-b-[0.5px]">
        <div className="w-full flex justify-center items-center flex-col ml-16 md:ml-40 lg:ml-0 xl:-ml-24">
          <h1 className="text-neutral-950 text-center text-4xl md:w-full xl:pl-10 xl:-ml-9 dark:text-slate-100">
            Olá, Bem vindo(a) ao meu portifólio!
          </h1>
          <p className=" w-80 text-neutral-800 text-center pt-3 md:w-9/12 lg:w-8/12 xl:w-7/12  dark:text-slate-300">
            Explore um pouco mais sobre quem eu sou, minhas habilidades e
            experiências no dinâmico e extenso universo da tecnologia. Aqui,
            você encontrará um panorama completo das minhas competências,
            conquistas e a paixão que me impulsiona a buscar inovação e
            excelência nesse campo em constante evolução.
          </p>
        </div>
        <div></div>
        <div className="lg:mr-28 xl:mr-0 w-3/12 py-12">
          <img
            className=" hidden lg:flex xl:-ml-36 rounded-l-full rounded-r-full"
            src="https://cdn.discordapp.com/attachments/1172335701874974822/1279393403779416125/image.png?ex=66d44775&is=66d2f5f5&hm=026279af326baa0bd3f13fca2a4cc54220b7239010507b37083467bdc90a1f6b&"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
};
