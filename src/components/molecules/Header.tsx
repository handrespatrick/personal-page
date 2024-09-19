import { useTheme } from "@/hooks/useTheme";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#ffffffde] dark:bg-[#0a0a0a]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-[#646cff]">
              {title.toUpperCase()}
            </a>
          </div>
          <button
            className="bg-transparent p-0 transition-transform ease-in-out hover:scale-110"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
