'use client';
import React from 'react';

import { ThemeSettingButton } from './component/ThemeSettingButton';
import ToggleDrawerButton from './component/ToggleDrawerButton';

type User = {
  name: string;
};


export const Header = () => {
  const onClick = () => { };
  return (
    <header className='sticky left-0 top-0 flex w-full   border-b border-gray-300 bg-header_background/70  backdrop-blur-sm dark:border-gray-800/50  dark:bg-header_background-dark dark:backdrop-blur-sm'>
      <div className='flex h-14 w-full items-center justify-between px-4 '>
        <ToggleDrawerButton onClick={onClick} />
        <a href='/' className='text-2xl'>rixia.dev</a>
        <div className='mx-auto' />
        <ThemeSettingButton />
      </div>
    </header>
  )
}
