import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

type NavButtonProps = {
  Svg: () => ReactElement;
  AltSvg: () => ReactElement;
  text: string;
  href: string;
};
const NavButton = ({ Svg, AltSvg, href, text }: NavButtonProps) => {
  return (
    <Link href={href}>
      <div className={`flex flex-row select-none items-center mt-1 hover:text-[#FF9CF4]`}>
        <Svg />
        <span className="w-[1rem]"></span>
        <p className="font-semibold">{text}</p>
      </div>
    </Link>
  );
};

export { NavButton };
