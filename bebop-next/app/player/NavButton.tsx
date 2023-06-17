import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactElement, ReactNode } from 'react';

type NavButtonProps = {
  Svg: () => ReactElement;
  AltSvg: () => ReactElement;
  text: string;
  href: string;
};
const NavButton = ({ Svg, AltSvg, href, text }: NavButtonProps) => {
  const displaySVG = usePathname() === href ? <AltSvg /> : <Svg />
  
  return (
    <Link href={href}>
      <div className={`flex flex-row select-none items-center mt-1 hover:text-[#FF9CF4] hover:scale-110 hover:translate-x-2  ease-in-out transition duration-200`}>
        {displaySVG}
        <span className="w-[1rem]"></span>
        <p className="font-semibold">{text}</p>
      </div>
    </Link>
  );
};

export { NavButton };
