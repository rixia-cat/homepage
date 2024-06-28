'use client';
import { CircleHalfTilt, CircleNotch, MoonStars, Question, Sun, CheckCircle, CircleHalf } from '@phosphor-icons/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes'
import { RefObject, createRef, useEffect, useMemo, useRef, useState } from 'react';

enum ThemeMode {
    Light = 'light',
    Dark = 'dark',
    System = 'system',
}
type ButtonData = {
    iconElm: JSX.Element,
    label: string
}
type DropdownData = {
    mode: ThemeMode,
    iconElm: JSX.Element,
    label: string,
}
const dropdownItemEntries = [
    ThemeMode.Light,
    ThemeMode.Dark,
    ThemeMode.System
]

const ICONSIZE = 24;

export const ThemeSettingButton = () => {
    const [mounted, setMounted] = useState(false);
    const [systemTheme, setSystemTheme] = useState<ThemeMode>(ThemeMode.Light);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
        setSystemTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.Dark : ThemeMode.Light);
    }, [])



    const buttonData: ButtonData = useMemo(() => {
        if (!mounted) {
            return {
                iconElm: <CircleNotch className='animate-spin' size={ICONSIZE} />,
                label: 'Loading...',
            }
        }
        switch (theme) {
            case ThemeMode.Light:
                return {
                    iconElm: <Sun size={ICONSIZE} />,
                    label: 'Light',
                }
            case ThemeMode.Dark:
                return {
                    iconElm: <MoonStars size={ICONSIZE} />,
                    label: 'Dark',
                }
            case ThemeMode.System:
                const iconElm = systemTheme === ThemeMode.Dark ? <MoonStars size={ICONSIZE} /> : <Sun size={ICONSIZE} />;
                return {
                    iconElm: iconElm,
                    label: 'System',
                }
            default:
                return {
                    iconElm: <Question size={ICONSIZE} />,
                    label: 'Unknown',
                }
        }
    }, [theme, mounted, systemTheme]);


    /* ドロップダウンメニュー */
    const dropdownData: DropdownData[] = dropdownItemEntries.map((item) => {
        switch (item) {
            case ThemeMode.Light:
                return {
                    mode: ThemeMode.Light,
                    iconElm: <Sun size={ICONSIZE} className='mr-2' />,
                    label: 'Light',
                }
            case ThemeMode.Dark:
                return {
                    mode: ThemeMode.Dark,
                    iconElm: <MoonStars size={ICONSIZE} className='mr-2' />,
                    label: 'Dark',
                }
            case ThemeMode.System:
                return {
                    mode: ThemeMode.System,
                    iconElm: <CircleHalf size={ICONSIZE} className='mr-2 ' />,
                    label: 'System',
                }
            default:
                return {
                    mode: ThemeMode.System,
                    iconElm: <Question size={ICONSIZE} className='mr-2' />,
                    label: 'Unknown',
                }
        }
    });

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="rounded-lg  p-2 text-gray-800 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-500 dark:text-gray-200 dark:outline-gray-700 dark:focus:outline-gray-300"
                    aria-label="画面テーマを変更">
                    {buttonData.iconElm}
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="w-40  rounded-lg bg-white shadow-lg backdrop-blur-sm dark:bg-gray-800">
                    <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
                        {dropdownData.map((data, index) => (
                            <DropdownMenu.RadioItem value={data.mode} key={index} className="flex w-full items-center justify-start px-4 py-2 text-gray-800 hover:bg-gray-200 radix-state-checked:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:radix-state-checked:bg-gray-700">
                                {data.iconElm} {data.label}

                                <DropdownMenu.ItemIndicator className="ml-auto">
                                    <CheckCircle />
                                </DropdownMenu.ItemIndicator>
                            </DropdownMenu.RadioItem>
                        ))}
                    </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}