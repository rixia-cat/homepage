"use client"
import { CheckCircle, CircleHalf, CircleNotch, type Icon, MoonStars, Question, Sun } from "@phosphor-icons/react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useTheme } from "next-themes"
import { useEffect, useMemo, useState } from "react"

enum ThemeMode {
  Light = "light",
  Dark = "dark",
  System = "system",
}
type ButtonData = {
  iconElm: Icon
  label: string
}
type DropdownData = {
  mode: ThemeMode
  iconElm: Icon
  label: string
}
const dropdownItemEntries = [ThemeMode.Light, ThemeMode.Dark, ThemeMode.System]

const ICONSIZE = 24

export const ThemeSettingButton = () => {
  const [mounted, setMounted] = useState(false)
  const [systemTheme, setSystemTheme] = useState<ThemeMode>(ThemeMode.Light)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setSystemTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeMode.Dark : ThemeMode.Light)
  }, [])

  const buttonData: ButtonData = useMemo(() => {
    if (!mounted) {
      return {
        iconElm: CircleNotch,
        label: "Loading...",
      }
    }
    switch (theme) {
      case ThemeMode.Light:
        return {
          iconElm: Sun,
          label: "Light",
        }
      case ThemeMode.Dark:
        return {
          iconElm: MoonStars,
          label: "Dark",
        }
      case ThemeMode.System: {
        const iconElm = systemTheme === ThemeMode.Dark ? MoonStars : Sun
        return {
          iconElm: iconElm,
          label: "System",
        }
      }
      default:
        return {
          iconElm: Question,
          label: "Unknown",
        }
    }
  }, [theme, mounted, systemTheme])

  /* ドロップダウンメニュー */
  const dropdownData: DropdownData[] = dropdownItemEntries.map((item) => {
    switch (item) {
      case ThemeMode.Light:
        return {
          mode: ThemeMode.Light,
          iconElm: Sun,
          label: "Light",
        }
      case ThemeMode.Dark:
        return {
          mode: ThemeMode.Dark,
          iconElm: MoonStars,
          label: "Dark",
        }
      case ThemeMode.System:
        return {
          mode: ThemeMode.System,
          iconElm: CircleHalf,
          label: "System",
        }
      default:
        return {
          mode: ThemeMode.System,
          iconElm: Question,
          label: "Unknown",
        }
    }
  })

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-lg border border-gray-400/35 p-2 text-gray-800 dark:border-gray-700 dark:text-gray-200 "
          aria-label="画面テーマを変更"
          type="button"
        >
          {<buttonData.iconElm size={ICONSIZE} />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="mx-4 w-40 rounded-lg border border-gray-300 bg-white/75 shadow-lg backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/75"
          sideOffset={5}
        >
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            {dropdownData.map((data) => (
              <DropdownMenu.RadioItem
                value={data.mode}
                key={data.mode}
                className="flex w-full items-center justify-start radix-state-checked:bg-gray-200 px-4 py-2 text-gray-800 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-200 dark:radix-state-checked:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {<data.iconElm size={ICONSIZE} className="mr-2" />} {data.label}
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
