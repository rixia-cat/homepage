import type { Icon } from "@phosphor-icons/react"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr"
import dayjs, { type Dayjs } from "dayjs"

// #region birthday
const birthYear = 1997
const birthMonth = 11
export const calcAboutBirthUptime = (targetDate: Dayjs): { year: number; month: number } => {
  const aboutlyBirthDay = dayjs(`${birthYear}-${birthMonth}-01`)
  const diffYear = targetDate.diff(aboutlyBirthDay, "year")
  const diffMonth = targetDate.diff(aboutlyBirthDay, "month")
  return {
    year: diffYear,
    month: diffMonth - diffYear * 12,
  }
}
// #endregion

export const logoAsciiArt = [
  "                               @@@                @@@            ",
  "                              @@@@@@            @@@@@@           ",
  "                             @@@@@@@@@@      @@@@@@@@@@          ",
  "                             @@@   @@@@@@@@@@@@@@   @@@          ",
  "                            @@@@      @@@@@@@@      @@@@         ",
  "                           @@@@                      @@@@        ",
  "                          @@@@                        @@@@       ",
  "                          @@@                          @@@       ",
  "                         @@@@                          @@@@      ",
  "                        @@@@        @@        @@        @@@@     ",
  "                        @@@                              @@@@    ",
  "                       @@@@                               @@@    ",
  "                      @@@@                                @@@@   ",
  "                     @@@@                                  @@@@  ",
  "                     @@@                                    @@@  ",
  "    @@@@@@@@        @@@@                                    @@@@ ",
  "  @@@@@@@@@@@@@@@   @@@                                      @@@ ",
  " @@@@      @@@@@    @@@                                      @@@ ",
  " @@@                 @@@           @@@@@@  @@@@@@           @@@@ ",
  " @@@@                 @@@@       @@@    @@@@    @@@       @@@@@  ",
  "  @@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@    @@@     @@@@@@@@@@@@@@   ",
  "    @@@@@@@@@@@@@@@@@@@@@@@@@@@  @@     @@@      @@@@@@@@@@      ",
]

export const name = "rixia"
export const domain = "rixia.dev"

export const leadingJobDescription = "フロントエンド、アプリが好き・得意なエンジニア"
export const likesDescription = "PC,スマホ,ガジェット,車"

type ProfileLink = {
  icon: Icon
  url: string
}
export const profileLinks: ProfileLink[] = [
  {
    icon: GithubLogo,
    url: "https://github.com/rixia-cat",
  },
]
