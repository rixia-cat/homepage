import Image from "next/image";

type LeadingSectionProps = {
  leadingImageUrl: string;
  title: string;
  description: string;
};

export default function LeadingSection({ leadingImageUrl, title, description }: LeadingSectionProps) {
  return (
    <div>
      <div className="relative grid h-40 w-full overflow-hidden rounded-xl ">
        {leadingImageUrl ? (
          <Image
            src={leadingImageUrl}
            fill
            className="col-start-1 row-start-1 h-full max-h-full w-full max-w-full rounded-xl object-cover"
            alt={`${title}のイメージ画像`}
            priority={true}
            loading="eager"
          />
        ) : null}

        <div className="col-start-1 row-start-1 h-full max-h-full min-h-full rounded-xl bg-gray-900/40 shadow-inner backdrop-blur-sm" />

        <div className="col-start-1 row-start-1 h-full rounded-xl px-2 ">
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className=" text-center font-bold text-2xl text-gray-100 mix-blend-luminosity sm:text-3xl dark:text-gray-200 ">
              <span className="drop-shadow">{title}</span>
            </h1>

            <p className="mt-6 line-clamp-2 max-w-xl break-words px-6 text-center text-gray-100 text-sm mix-blend-luminosity sm:text-base dark:text-gray-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
