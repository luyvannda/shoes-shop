'use client';

import { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Cart from './Cart';
import { SHOE_LIST } from '@/constant';

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

export default function ClientComponent() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <NavBar onClickCartBtn={() => setIsSideBarOpen(true)} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </SideBar>
    </>
  );
}
