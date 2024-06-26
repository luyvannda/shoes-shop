'use client';

import { FC, ReactNode } from 'react';

interface SideBarProps {
  isOpen: boolean;
  children: ReactNode;
  onClickClose: () => void;
}

const SideBar: FC<SideBarProps> = ({ children, isOpen, onClickClose }) => {
  return (
    <div>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full transform overflow-y-auto bg-white p-5 transition duration-500 dark:bg-night md:w-[60%] lg:w-[48%] xl:w-[38%] ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 font-bold text-black dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
};

export default SideBar;
