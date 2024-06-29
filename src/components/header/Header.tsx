'use client';
import React from 'react';

import { ThemeSettingButton } from './components/ThemeSettingButton';
import ToggleDrawerButton from './components/ToggleDrawerButton';
import LeadingPageLinks from './components/LeadingPageLinks';
import SiteLogoLink from '../logo/SiteLogoLink';

export const Header = () => {
  return (
    <header className='sticky left-0 top-0 flex w-full   border-b border-gray-300 bg-header_background/70  backdrop-blur-sm dark:border-gray-800/70  dark:bg-header_background-dark/70 dark:backdrop-blur-sm'>
      <div className='flex h-14 w-full items-center justify-between pl-2 pr-4 '>
        <ToggleDrawerButton />
        <SiteLogoLink />
        <nav className='ml-12 hidden md:flex '>
          <LeadingPageLinks />
        </nav>
        <div className='mx-auto' />
        <ThemeSettingButton />
      </div>
    </header>
  )
}
