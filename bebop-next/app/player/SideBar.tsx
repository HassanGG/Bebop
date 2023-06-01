'use client';
import { useRef, useState } from 'react';
import { RightResizer } from './RightResizer';

const SideBar = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const REM_WIDTH = useRef(16).current;
  const DEFAULT_WIDTH = useRef(
    parseFloat(window.getComputedStyle(document.documentElement).fontSize) * REM_WIDTH
  ).current;
  const [width, setWidth] = useState(DEFAULT_WIDTH);

  return (
    <nav
      className="bg-black h-[100%] left-0 sticky top-0 box-border flex-none"
      style={{
        width: width,
      }}
    >
      <RightResizer parentDefaultWidth={DEFAULT_WIDTH} parentSetWidth={setWidth} />
      <div className="bg-[#3A48FF] w-[100%] h-[8rem] border-black border-[0.5rem] border-solid rounded-br-[2rem]"></div>
      <div className="bg-[#3A48FF] w-[100%] h-[100%] border-black border-[0.5rem] border-t-[0rem] border-solid rounded-tr-[2rem]"></div>
    </nav>
  );
};

export { SideBar };
