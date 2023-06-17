const SIZE = 25;
const SkipSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 34 34">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M16.843 16.126l-10.582-5.88a.4.4 0 00-.594.35v12.808a.4.4 0 00.594.35l10.582-5.88a1 1 0 000-1.748z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        d="M22.667 24.083V9.917M28.333 24.083V9.917"
      ></path>
    </svg>
  );
};

const AltSkipSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 34 34">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M17.157 16.126l10.582-5.88a.4.4 0 01.594.35v12.808a.4.4 0 01-.594.35l-10.582-5.88a1 1 0 010-1.748z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        d="M11.333 24.083V9.917M5.667 24.083V9.917"
      ></path>
    </svg>
  );
};

export { SkipSVG, AltSkipSVG };
