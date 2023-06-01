'use client';
import { useState } from 'react';
import { RightResizer } from './RightResizer';

const REM_WIDTH = 16;
const DEFAULT_WIDTH = parseFloat(window.getComputedStyle(document.documentElement).fontSize) * REM_WIDTH;

const SideBar = () => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);

  return (
    <nav className="bg-black h-[100%] left-0 fixed top-0" style={{ width: width }}>
      <RightResizer parentDefaultWidth={DEFAULT_WIDTH} parentSetWidth={setWidth} />
      <div className="bg-[#3A48FF] w-[100%] h-[100%] border-black border-[0.5rem] border-solid">
        Home <br /> Search
      </div>
    </nav>
  );
};

export { SideBar };
