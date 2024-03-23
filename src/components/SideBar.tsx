'use client';

import { FC, ReactNode } from 'react';

interface SideBarProps {
  isOpen: boolean;
  children: ReactNode;
}

const SideBar: FC<SideBarProps> = ({ children, isOpen }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-full transform bg-white transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
    >
      <button className="absolute right-4 top-4 p-2 font-bold text-black">
        X
      </button>
      {children}
      <div />
    </div>
  );
};

export default SideBar;
