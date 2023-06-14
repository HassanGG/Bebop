import { HomeItem } from './HomeItem';

const LongDisplay = () => {
  return (
    <div className='w-full'>
      <div className='text-black text-2xl'>Title</div>
      <div className="flex flex-row w-full overflow-hidden flex-nowrap">
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
      </div>
    </div>
  );
};

export { LongDisplay };
