'use client';

import { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';

export default function ClientComponent() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <NavBar onClickCartBtn={() => setIsSideBarOpen(true)} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        Hi
      </SideBar>
    </>
  );
}
