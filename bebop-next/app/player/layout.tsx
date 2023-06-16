import NoSSRWrapper from '../utils/NoSSRWrapper';
import { Controls } from './Controls';
import { SideBar } from './SideBar';

const PlayerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col">
      <div className="flex flex-row flex-grow">
        <NoSSRWrapper>
          <SideBar />
        </NoSSRWrapper>
        {children}
      </div>
      <div>
        <Controls />
      </div>
    </div>
  );
};

export default PlayerLayout;
