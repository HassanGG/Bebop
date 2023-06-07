'use client';
import { useState } from 'react';
import Image from 'next/image';
import { RightResizer } from './RightResizer';
import React from 'react';
import { SideItem } from './SideItem';
import { Colors } from '../utils/Colors';

const REM_WIDTH = 16;
const REM_PIXELS = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
const DEFAULT_WIDTH = REM_PIXELS * REM_WIDTH;

const SideBar = () => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  return (
    <nav className="bg-black h-[100vh] left-0 sticky top-0 box-border flex-none" style={{ width: width }}>
      <RightResizer parentDefaultWidth={DEFAULT_WIDTH} parentSetWidth={setWidth} />
      <div className="h-full flex flex-col">
        <div className="bg-[#3A48FF] w-[100%] border-r-0 h-[8rem] border-black border-[0.5rem] border-solid rounded-br-[2rem] p-3 ">
          <div className="flex flex-row select-none items-center">
            <img src={'/Home.svg'} alt="Home Icon" />
            <span className="w-[1rem]"></span>
            <p>Home</p>
          </div>
          <div className="flex flex-row select-none items-center mt-1 ">
            <img src={'/Search_alt.svg'} alt="Search Icon" />
            <span className="w-[1rem]"></span>
            <p>Search</p>
          </div>
        </div>

        <div className="bg-[#3A48FF] w-[100%] border-black border-r-0 border-[0.5rem] border-t-[0rem] border-solid rounded-tr-[2rem] p-3 flex-grow">
          <div className="flex flex-row select-none items-center">
            <img src={'/Layers.svg'} alt="Layers Icon" />
            <span className="w-[1rem]"></span>
            <p
              className="text-xl"
              style={{
                color: Colors.Green,
              }}
            >
              Library
            </p>
          </div>
          <SideItem />
          <SideItem />
          <SideItem />
          <SideItem />
          <SideItem />
          <SideItem />
          <SideItem />
        </div>
      </div>
    </nav>
  );
};

export { SideBar };
