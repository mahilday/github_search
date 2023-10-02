import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

interface HeaderProps {
  colorScheme: string;
  handleChangeColorScheme: () => void;
}

const Header = ({ colorScheme, handleChangeColorScheme }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-semibold tracking-wide text-2xl text-typographyDark dark:text-white">
        devfinder
      </div>
      <div className="flex dark:text-white uppercase items-center gap-1">
        <span
          onClick={handleChangeColorScheme}
          className="text-sm cursor-pointer hover:opacity-90"
        >
          {colorScheme === "light" ? "Dark" : "Light"}
        </span>
        <span>
          {colorScheme === "light" ? (
            <MoonIcon className="h-4 w-4" />
          ) : (
            <SunIcon className="h-4 w-4" />
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
