'use client';

import { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Cart from './Cart';
import { SHOE_LIST } from '@/constant';
import { BiMoon, BiSun } from 'react-icons/bi';

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

export default function ClientComponent() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  // Remember that when retrieving the value from localStorage, we’ll need to parse it back to a boolean if needed:
  // const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'isDarkMode',
      String(window.document.documentElement.classList.contains('dark'))
    );
  };
  return (
    <>
      <NavBar onClickCartBtn={() => setIsSideBarOpen(true)} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </SideBar>
      <div className="fixed bottom-4 right-4 z-50 ">
        <button
          onClick={toggleDarkMode}
          className="rounded-full bg-night-50 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </>
  );
}
