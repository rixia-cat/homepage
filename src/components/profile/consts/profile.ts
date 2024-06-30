import { Icon } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import dayjs from "dayjs";

// #region birthday
const birthYear = 1997;
const birthMonth = 11;
export const calcAboutBirthUptime = (): { year: number, month: number } => {
    const nowDay = dayjs();
    const aboutlyBirthDay = dayjs(`${birthYear}-${birthMonth}-01`);
    const diffYear = nowDay.diff(aboutlyBirthDay, "year");
    const diffMonth = nowDay.diff(aboutlyBirthDay, "month");
    return {
        year: diffYear,
        month: diffMonth - (diffYear * 12)
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
    "    @@@@@@@@@@@@@@@@@@@@@@@@@@@  @@     @@@      @@@@@@@@@@      "
];

export const name = "rixia";
export const domain = "rixia.dev";

export const leadingJobDescription = "Web・アプリ中心のエンジニア";
export const likesDescription = "PC,スマホ,ガジェット,車";

type ProfileLink = {
    icon: Icon,
    url: string
}
export const profileLinks: ProfileLink[] = [
    {
        icon: GithubLogo,
        url: "https://github.com/rixia-cat",
    },
];
