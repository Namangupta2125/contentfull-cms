function Hero() {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="flex  justify-evenly items-center p-[10px] bg-cyan-100 w-full h-[75vh]">
        <div className="w-[40%]">
          <h1 className="text-cyan-600 mb-5 text-7xl">ContentFull CMS</h1>
          <p className="leading-loose tracking-widest">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut
            dolorum repellat ut, nam similique id autem facere quos ratione
            dolores ad nulla inventore aliquam rem accusantium vero error
            assumenda laboriosam molestiae odit? Assumenda officia repudiandae
            nostrum odit itaque repellendus vitae dignissimos deleniti, quae,
            quisquam, corrupti accusantium sapiente. Quod, ullam! Laudantium ab
            repellat.
          </p>
        </div>
        <img src="./assets/hero.svg" alt="" className="w-[30%] h-auto" />
      </div>
    </section>
  );
}
export default Hero