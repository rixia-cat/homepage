import type { Icon } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import dayjs, { type Dayjs } from "dayjs";

// #region birthday
const birthYear = 1997;
const birthMonth = 11;
export const calcAboutBirthUptime = (targetDate: Dayjs): { year: number; month: number } => {
  const aboutlyBirthDay = dayjs(`${birthYear}-${birthMonth}-01`);
  const diffYear = targetDate.diff(aboutlyBirthDay, "year");
  const diffMonth = targetDate.diff(aboutlyBirthDay, "month");
  return {
    year: diffYear,
    month: diffMonth - diffYear * 12,
  };
};
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
];

export const name = "rixia";
export const domain = "rixia.dev";
export const githubUsername = "rixia-cat";
export const githubLink = `https://github.com/${githubUsername}`;

export const leadingJobDescription = "フロントエンド、アプリが好き・得意なエンジニア";

export const interests = [
  "UI/UX",
  "フロントエンド",
  "モバイルアプリ",
  "スマホ",
  "ガジェット",
  "自作PC",
  "Linux",
  "ネコ🐈️",
  "ゲーム",
  "音楽",
  "ミリオンライブ",
  "車",
];

export const likeGames = ["崩壊:スターレイル", "崩壊3rd", "原神", "軌跡シリーズ"];

export const likesArtists = [
  "分島花音",
  "田所あずさ",
  "School Food Punishment",
  "la la larks",
  "ELECTROCUTICA",
  "Falcom Sound Team jdk",
];

type ProfileLink = {
  icon: Icon;
  title: string;
  url: string;
};
export const profileLinks: ProfileLink[] = [
  {
    icon: GithubLogo,
    title: "GitHub",
    url: githubLink,
  },
];
