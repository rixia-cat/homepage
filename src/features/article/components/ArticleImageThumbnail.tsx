import Image from "next/image";

type ArticleImageThumbnailProps = {
  title: string;
  leadingImageUrl: string;
};

export default function ArticleImageThumbnail({ title, leadingImageUrl }: ArticleImageThumbnailProps) {
  return (
    <div className="relative grid h-full max-h-full min-h-full w-full min-w-full max-w-full rounded-md ">
      <Image
        src={leadingImageUrl}
        alt={`${title}のサムネイル`}
        quality={85}
        fill
        sizes="20vw"
        className="col-start-1 row-start-1 rounded-md object-cover"
      />
      <div className="absolute top-0 left-0 col-start-1 row-start-1 h-full max-h-full min-h-full w-full max-w-full rounded-md shadow-inner " />
    </div>
  );
}
