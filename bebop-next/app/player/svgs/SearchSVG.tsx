const SearchSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 35 35">
      <ellipse cx="15.92" cy="15.783" stroke="currentColor" strokeWidth="3" rx="10.098" ry="10.044"></ellipse>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        d="M15.92 11.479a4.348 4.348 0 00-3.06 1.26 4.304 4.304 0 00-1.268 3.044M28.902 28.696l-4.327-4.304"
      ></path>
    </svg>
  );
};

const SearchAltSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 18a7 7 0 100-14 7 7 0 000 14zm0-12a5 5 0 00-5 5 1 1 0 102 0 3 3 0 013-3 1 1 0 100-2z"
        clipRule="evenodd"
      ></path>
      <path stroke="#222" strokeLinecap="round" strokeWidth="2" d="M20 20l-2-2"></path>
    </svg>
  );
};

export { SearchSVG, SearchAltSVG };
