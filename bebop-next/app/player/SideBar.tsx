'use client';
import { useEffect, useState } from 'react';
import { RightResizer } from './RightResizer';
import React from 'react';
import { SideFilters } from './SideFilters';
import { HomeAltSVG, HomeSVG } from './svgs/HomeSVG';
import { SearchAltSVG, SearchSVG } from './svgs/SearchSVG';
import { NavButton } from './NavButton';
import { SideItems } from './SideItems';
import { AddSVG } from './svgs/AddSVG';

const REM_SIDEBAR_WIDTH = 20;
const REM_PIXELS = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
const DEFAULT_WIDTH = REM_PIXELS * REM_SIDEBAR_WIDTH;
const SHOW_META_WIDTH = DEFAULT_WIDTH + REM_PIXELS * 10;

const SideBar = () => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const displayMeta = width > SHOW_META_WIDTH;
  return (
    <nav className="bg-black h-[100%] max-h-full left-0 sticky top-0 box-border flex-none" style={{ width: width }}>
      <RightResizer parentDefaultWidth={DEFAULT_WIDTH} parentSetWidth={setWidth} />
      <div className="h-full flex flex-col">
        <div className="bg-[#3A48FF] w-[100%] border-r-0 h-[8rem] border-black border-[0.5rem] border-solid rounded-br-[1rem] p-3 ">
          <NavButton Svg={HomeSVG} AltSvg={HomeAltSVG} href="/player/home" text="Home" />
          <NavButton Svg={SearchSVG} AltSvg={SearchAltSVG} href="/player/search" text="Search" />
        </div>
        <div className="bg-[#3A48FF] w-[100%] h-0 border-black border-r-0 border-[0.5rem] border-t-[0rem] border-solid rounded-tr-[1rem] p-3 flex-grow flex flex-col">
          <div className="flex flex-row select-none items-center">
            <img src={'/Layers.svg'} alt="Layers Icon" />
            <span className="w-[1rem]"></span>
            <p className={`text-xl text-[#C1F2BB] font-semibold`}>Library</p>
            <p className="float-right w-1 ml-auto text-pink-300 mr-5">
              <AddSVG />
            </p>
          </div>
          <SideFilters />
          <SideItems displayMeta={displayMeta} />
        </div>
      </div>
    </nav>
  );
};

export { SideBar };
