import { Colors } from '@/app/utils/Colors';
import { LongDisplay } from './LongDisplay';
const HomePage = () => {
  return (
    <div className="w-full h-[100%] flex flex-col" style={{ backgroundColor: Colors.Cream }}>
      <LongDisplay />
      <LongDisplay />
      <LongDisplay />
      <LongDisplay />
    </div>
  );
};

export default HomePage;
