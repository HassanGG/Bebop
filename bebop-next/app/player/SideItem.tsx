const SideItem = () => {
  return (
    <div className="bg-black/[.5] hover:bg-black/[.2] w-[100%] h-[3.5rem] select-none flex items-center p-2 rounded-[0.4rem] mb-2 ">
      <div className="w-[2.5rem] h-[2.5rem] bg-white"></div>
      <div className="w-5"></div>
      <section className="whitespace-nowrap text-ellipsis overflow-hidden">
        <p>Test name</p>
        <span className="text-sm">Album</span>
        <img src="/Ellipse 67.svg" alt="Dot" className="inline m-2" />
        <span className="text-sm ">Name of Album</span>
      </section>
    </div>
  );
};

export { SideItem };
