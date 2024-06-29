import { Icon } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

export const leadingDescription = "Web・アプリ中心のエンジニア";
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