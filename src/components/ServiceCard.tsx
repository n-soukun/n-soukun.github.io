import { clsx } from "clsx";

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  linkIcon: React.ReactNode;
  linkText: string;
  tags?: string[];
}

export const ServiceCard = ({
  title,
  description,
  image,
  url,
  linkIcon,
  linkText,
  tags,
}: ServiceCardProps) => {
  return (
    <div className=" shadow rounded-2xl p-4 bg-white dark:bg-zinc-700">
      <img src={image} className=" rounded-lg w-full aspect-video" />
      <div className=" mt-4 text-zinc-900 dark:text-zinc-100 text-2xl font-bold">
        {title}
      </div>
      <div className=" mt-2 text-zinc-900 dark:text-zinc-100 leading-relaxed">
        {description}
      </div>
      {tags && (
        <div className=" mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className=" text-sm font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <a
        href={url}
        className={clsx(
          " flex items-center justify-center p-2 rounded-xl mt-4 transition-colors ",
          " bg-zinc-950 hover:bg-zinc-700 text-zinc-50 ",
          "dark:bg-zinc-50 dark:hover:bg-zinc-300 dark:text-zinc-950"
        )}
      >
        {linkIcon}
        <span className="mx-2">{linkText}</span>
      </a>
    </div>
  );
};
