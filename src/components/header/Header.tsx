'use client';
import React from 'react';

import { ThemeSettingButton } from './component/ThemeSettingButton';
import ToggleDrawerButton from './component/ToggleDrawerButton';
import LeadingPageLinks from './component/LeadingPageLinks';
import Image from 'next/image';

export const Header = () => {
  const onClick = () => { };
  return (
    <header className='sticky left-0 top-0 flex w-full   border-b border-gray-300 bg-header_background/70  backdrop-blur-sm dark:border-gray-800/70  dark:bg-header_background-dark/70 dark:backdrop-blur-sm'>
      <div className='flex h-14 w-full items-center justify-between px-4 '>
        <ToggleDrawerButton onClick={onClick} />
        <div className='flex flex-row '>
          <div className='flex items-center pr-2'>
            <Image src='/images/prof-cat.svg' alt='サイトアイコン画像' width={36} height={36} />
          </div>
          <a href='/' className='text-2xl text-grayishblack dark:text-grayishblack-dark'>rixia.dev</a>
        </div>
        <nav className='ml-12 hidden md:flex '>
          <LeadingPageLinks />
        </nav>
        <div className='mx-auto' />
        <ThemeSettingButton />
      </div>
    </header>
  )
}
