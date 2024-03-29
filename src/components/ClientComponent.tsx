'use client';

import { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import CartItem from './CartItem';
import { SHOE_LIST } from '@/constant';

export default function ClientComponent() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <NavBar onClickCartBtn={() => setIsSideBarOpen(true)} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[2]} />
        <CartItem item={SHOE_LIST[3]} />
      </SideBar>
    </>
  );
}
