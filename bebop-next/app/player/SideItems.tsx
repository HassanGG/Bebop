const SideItems = ({ displayMeta }: { displayMeta: Boolean }) => {
  return (
    <div className="h-[0rem] overflow-scroll flex-grow overflow-x-hidden">
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
      <SideItem displayMeta={displayMeta} />
    </div>
  );
};

const SideItem = ({ displayMeta }: { displayMeta: Boolean }) => {
  const metaData = displayMeta ? (
    <>
      <section className="text-xs">
        <p>Date Added</p>
        <p>12/2/2</p>
      </section> 
      <section className="text-xs pr-2">
        <p>Last Played</p>
        <p> 3/2/1</p>
      </section>
    </>
  ) : (
    <> </>
  );
  return (
    <div
      className="bg-black/[.1] hover:bg-black/[.3] w-[100%] h-[3.5rem] select-none flex items-center p-2 rounded-[0.4rem] mb-2 overflow-hidden"
      onClick={() => {
        console.log('clicked');
      }}
    >
      <div className="flex flex-row justify-between w-full items-center">
        <div className="w-auto flex flex-row items-center">
          <div className="w-[2.5rem] h-[2.5rem] bg-white"></div>
          <div className="w-4"></div>
          <section className="whitespace-nowrap text-ellipsis overflow-hidden">
            <p>Test name</p>
            <span className="text-sm">Album</span>
            <img src="/Ellipse 67.svg" alt="Dot" className="inline m-2" />
            <span className="text-sm ">Name of Album</span>
          </section>
        </div>
        {metaData}
      </div>
    </div>
  );
};

export { SideItems };
