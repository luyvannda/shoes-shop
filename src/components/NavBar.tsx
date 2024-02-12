import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

const Routes = ['Home', 'About', 'Services', 'Pricing', 'Contact'];

export default function NavBar() {
  return (
    <div className="flex items-center justify-between">
      {/* logo */}
      <Link href="/">
        <Image
          src="nike-logo.svg"
          width={80}
          height={80}
          alt="A Nike Logo"
        ></Image>
      </Link>

      {/* Burger Button */}
      <button className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}

      <div className="w-full">
        <ul>
          {Routes.map(route => {
            <li key={route}>{route}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
