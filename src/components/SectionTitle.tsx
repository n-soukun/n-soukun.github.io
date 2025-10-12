import { clsx } from "clsx";

export interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) => {
  return (
    <h2 className={clsx(" mb-8 flex items-center gap-8", className)}>
      <div>
        <div className=" w-fit bg-clip-text text-transparent bg-linear-to-r from-sky-600 to-blue-600 text-3xl font-bold">
          {title}
        </div>
        <div className=" text-zinc-800 dark:text-zinc-200 text-md tracking-wider mt-1">
          {subtitle}
        </div>
      </div>
      <div className=" grow h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
    </h2>
  );
};
