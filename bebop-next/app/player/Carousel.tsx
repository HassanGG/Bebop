const buttonStyle = 'bg-black h-[2.5rem] rounded-lg p-2 m-1 hover:bg-black/[.7] overflow-hidden ';
const Carousel = () => {
  return (
    <div className="flex flex-row  w-[100%] h-[5rem] mt-2">
      <button type="button" className={buttonStyle}>Albums</button>
      <button type="button" className={buttonStyle}>Playlists</button>
      <button type="button" className={buttonStyle}>
        Artists
      </button>
    </div>
  );
};

export { Carousel };
