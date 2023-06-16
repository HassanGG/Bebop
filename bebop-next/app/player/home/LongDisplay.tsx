import { HomeItem } from './HomeItem';

const LongDisplay = () => {
  return (
    <div className='w-min'>
      <div className='text-black text-2xl'>Title</div>
      <div className="flex flex-row overflow-hidden flex-nowrap">
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
