const Controls = () => {
  return (
    <div className="bg-black w-full h-[6rem] justify-between flex-row flex">
      <div className="flex flex-row items-center">
        <div className="w-[3rem] h-[3rem] m-3 bg-white"></div>
        <section>
          <p>Name of Song</p>
          <p>Artist</p>
        </section>
      </div>
      <p>play button</p>
      <p>
        Volume Controls
      </p>

    </div>
  );
};

export { Controls };
