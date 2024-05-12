'use client';

import { TbShoppingBag } from 'react-icons/tb';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

const Routes = ['Home', 'About', 'Services', 'Pricing', 'Contact'];

interface NavBarProps {
  isDarkMode: boolean;
  onClickCartBtn: () => void;
}

export default function NavBar({ isDarkMode, onClickCartBtn }: NavBarProps) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const logoPath = isDarkMode ? '/nike-logo-white.svg' : '/nike-logo-black.svg';

  const toggleMobileMenu = () => {
    setIsMobileMenuShown(prevMenu => !prevMenu);
  };

  return (
    <div className="relative z-10 flex flex-wrap items-center justify-between">
      {/* logo */}
      <Link href="/">
        <Image src={logoPath} width={80} height={80} alt="A Nike Logo"></Image>
      </Link>

      {/* Burger Button */}
      <button
        onClick={toggleMobileMenu}
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}

      <div
        className={`${!isMobileMenuShown && 'hidden'}  w-full lg:block lg:w-auto`}
      >
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:gap-4 lg:border-none lg:bg-transparent ">
          {Routes.map((route, index) => (
            <li
              className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${index === 0 ? ' bg-blue-500 text-white lg:bg-transparent lg:text-blue-500' : 'hover:bg-gray-100'} ${(index === 3 || index === 4) && 'lg:text-white'} `}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>

      {/* Cart button */}

      <div
        onClick={onClickCartBtn}
        className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8"
      >
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </div>
  );
}
