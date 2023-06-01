import { SideBar } from './SideBar';

const PlayerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row">
      <SideBar />
      {children}
    </div>
  );
};

export default PlayerLayout;
