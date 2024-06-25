
export type Article = {
    leaderEmoji: string;
    title: string;
    shortDescription: string;
    url: string;
    updatedAt: string;
    tags: {
        label: string;
        url: string;
    }[];
}