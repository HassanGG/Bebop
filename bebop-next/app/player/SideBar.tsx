'use client';
import { useState } from 'react';
import { RightResizer } from './RightResizer';
import React from 'react';
import { SideItem } from './SideItem';
import { SideFilters } from './SideFilters';
import { HomeAltSVG, HomeSVG } from './svgs/HomeSVG';
import { SearchAltSVG, SearchSVG } from './svgs/SearchSVG';
import { NavButton } from './NavButton';

const REM_WIDTH = 20;
const REM_PIXELS = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
const DEFAULT_WIDTH = REM_PIXELS * REM_WIDTH;

const SideBar = () => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  return (
    <nav className="bg-black h-[100%] left-0 sticky top-0 box-border flex-none" style={{ width: width }}>
      <RightResizer parentDefaultWidth={DEFAULT_WIDTH} parentSetWidth={setWidth} />
      <div className="h-full flex flex-col">
        <div className="bg-[#3A48FF] w-[100%] border-r-0 h-[8rem] border-black border-[0.5rem] border-solid rounded-br-[1rem] p-3 ">
          <NavButton Svg={HomeSVG} AltSvg={HomeAltSVG} href="/player/home" text="Home" />
          <NavButton Svg={SearchSVG} AltSvg={SearchAltSVG} href="/player/search" text="Search" />
        </div>
        <div className="bg-[#3A48FF] w-[100%] border-black border-r-0 border-[0.5rem] border-t-[0rem] border-solid rounded-tr-[1rem] p-3 flex-grow">
          <div className="flex flex-row select-none items-center">
            <img src={'/Layers.svg'} alt="Layers Icon" />
            <span className="w-[1rem]"></span>
            <p className={`text-xl text-[#C1F2BB] font-semibold`}>Library</p>
            <p className="float-right w-1 ml-auto text-pink-300">+</p>
          </div>
          <SideFilters />
          <SideItem displayMeta={true} />
          <SideItem displayMeta={false} />
          <SideItem displayMeta={true} />
          <SideItem displayMeta={true} />
          <SideItem displayMeta={true} />
          <SideItem displayMeta={true} />
          <SideItem displayMeta={true} />
        </div>
      </div>
    </nav>
  );
};

export { SideBar };
