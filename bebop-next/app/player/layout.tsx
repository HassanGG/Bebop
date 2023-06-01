import { SideBar } from './SideBar';

const PlayerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100vw] h-[100vh]">
      {children}
      <SideBar />
    </div>
  );
};

export default PlayerLayout;
