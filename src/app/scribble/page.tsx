import ProfileCard from "@/features/profile/components/ProfileCard";
import ScribbleListView from "@/features/scribble/ScribbleCardGridView";
import type { TypeScribbleSkeleton } from "@/types/generated/contentful";
import { contentfulClient } from "@/util/contentful";
import { Note } from "@phosphor-icons/react/dist/ssr";
import type { Metadata, ResolvingMetadata } from "next/types";
import type { ComponentProps } from "react";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export async function generateMetadata({}, parent: ResolvingMetadata): Promise<Metadata> {
  const parentMetadata = await parent;
  return {
    title: "scribble - rixia.dev",
    description: "とりとめのないメモ・雑記",
    openGraph: {
      ...parentMetadata.openGraph,
      title: "scribble - rixia.dev",
      description: "とりとめのないメモ・雑記",
      type: "website",
      url: "https://rixia.dev/scribble",
    },
  };
}

export default async function ScribblePage() {
  const scribbleCollection = await contentfulClient.getEntries<TypeScribbleSkeleton>({
    content_type: "scribble",
    order: ["-sys.updatedAt"],
  });

  type ScribbleListViewProps = ComponentProps<typeof ScribbleListView>;
  const scribbles: ScribbleListViewProps["scribbles"] = scribbleCollection.items.map((article) => {
    const retData: ScribbleListViewProps["scribbles"][number] = {
      id: article.sys.id,
      title: article.fields.title,
      body: article.fields.body,
      createdAt: article.sys.createdAt,
      updatedAt: article.sys.updatedAt,
      url: `/scribble/${article.sys.id}`,
    };
    return retData;
  });
  return (
    <div className="mx-auto flex max-w-full grow justify-center lg:max-w-screen-lg">
      <main className="max-w-full grow px-4 py-6 md:max-w-screen-md">
        <div className="h-14">
          <h1 className="flex flex-row items-center ">
            <Note className="mr-2" size="2.3rem" />
            <span className="mr-4 font-bold text-2xl text-blueblack dark:text-blueblack-dark ">Scribbles</span>
            <span className="text-gray-500 text-xs sm:text-sm dark:text-gray-400"> // とりとめのないメモ・雑記</span>
          </h1>
        </div>

        <ScribbleListView scribbles={scribbles} />
      </main>
      <aside className="mt-14 hidden w-64 min-w-64 max-w-64 flex-col gap-y-4 px-2 py-6 lg:flex">
        <ProfileCard />
      </aside>
    </div>
  );
}
