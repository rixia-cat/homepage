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
    <header className='flex w-full sticky top-0 left-0   backdrop-blur-sm bg-header_background bg-opacity-70 dark:bg-header_background-dark dark:bg-opacity-50 dark:backdrop-blur-sm  border-b border-gray-300 dark:border-gray-800'>
      <div className='flex w-full items-center justify-between px-4 h-14 '>
        <ToggleDrawerButton onClick={onClick} />
        <a href='/' className='text-2xl'>rixia.dev</a>
        <div className='mx-auto' />
        <ThemeSettingButton />
      </div>
    </header>
  )
}
