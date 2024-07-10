import Image from "next/image";

type LeadingSectionProps = {
  leadingImageUrl: string;
  title: string;
  description: string;
};

export default function LeadingSection({ leadingImageUrl, title }: LeadingSectionProps) {
  return (
    <div>
      <div className="relative mb-10 grid h-40 w-full rounded-xl ">
        {leadingImageUrl ? (
          <Image
            src={leadingImageUrl}
            layout="fill"
            className="col-start-1 row-start-1 h-full max-h-full w-full max-w-full rounded-xl object-cover"
            alt={`${title}のイメージ画像`}
            priority={true}
            loading="eager"
          />
        ) : null}

        <div className="col-start-1 row-start-1 h-full max-h-full min-h-full rounded-xl bg-gray-900/40 shadow-inner backdrop-blur-sm" />

        <div className="col-start-1 row-start-1 h-full rounded-xl px-2 ">
          <div className="flex h-full items-center justify-center">
            <h1 className=" text-center font-bold text-3xl text-gray-100 mix-blend-luminosity dark:text-gray-200 ">
              <span className="drop-shadow">{title}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
