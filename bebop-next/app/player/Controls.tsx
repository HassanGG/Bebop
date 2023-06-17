import { PlaySVG } from './svgs/PlaySVG';
import { AltSkipSVG, SkipSVG } from './svgs/SkipSVG';

const Controls = () => {
  return (
    <div className="bg-black w-full h-[6rem] sticky justify-between flex-row flex select-none">
      <div className="flex flex-row items-center">
        <div className="w-[3rem] h-[3rem] m-3 bg-white"></div>
        <section>
          <p className="text-sm">Name of Song</p>
          <p className="text-gray-400 text-xs">Artist</p>
        </section>
      </div>
      <div className="flex flex-row items-center">
        <AltSkipSVG />
        <PlaySVG />
        <SkipSVG />
      </div>
      <p>sdfasdf Volume Controls</p>
    </div>
  );
};

export { Controls };
