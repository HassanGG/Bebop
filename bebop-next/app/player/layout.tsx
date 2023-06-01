import NoSSRWrapper from '../utils/NoSSRWrapper';
import { SideBar } from './SideBar';

const PlayerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row">
      <NoSSRWrapper>
        <SideBar />
      </NoSSRWrapper>
      {children}
    </div>
  );
};

export default PlayerLayout;
