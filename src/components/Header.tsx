import { useTheme } from "@/hooks/useTheme";
import { Switch } from "./ui/switch";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className=" sticky top-0 px-4 py-2 bg-white dark:bg-zinc-800 shadow">
      <div className="mx-auto flex items-center container ">
        <h1 className="text-3xl font-bold">n-soukun</h1>
        <div className=" grow"></div>
        <button
          className={clsx(
            " flex items-center gap-1 p-1 rounded-full border transition-colors",
            "border-zinc-300 dark:border-zinc-700",
            "hover:border-orange-400 hover:text-orange-400",
            "dark:hover:border-blue-400 dark:hover:text-blue-400"
          )}
          onClick={handleToggle}
        >
          {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
          <Switch checked={theme === "dark"} />
        </button>
      </div>
    </header>
  );
};
