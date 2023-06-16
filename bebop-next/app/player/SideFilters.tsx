const buttonStyle = `bg-[#101010] h-[2.5rem] rounded-lg p-2 m-1 hover:bg-black/[.5] overflow-hidden `;
const SideFilters = () => {
  return (
    <div className="flex flex-row w-[100%] h-[4rem] mt-2 p-1 text-sm">
      <button type="button" className={buttonStyle}>Albums</button>
      <button type="button" className={buttonStyle}>Playlists</button>
      <button type="button" className={buttonStyle}>
        Artists
      </button>
    </div>
  );
};

export { SideFilters};
