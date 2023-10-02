import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

interface SearchProps {
  searchString: string;
  handleGetUser: () => void;
  handleSearchString: (value: string) => void;
  user?: any;
  isLoading: boolean;
}

const Search = ({
  searchString,
  isLoading,
  user,
  handleGetUser,
  handleSearchString,
}: SearchProps) => {
  return (
    <div>
      <section className="flex relative w-full items-center bg-offWhite dark:bg-secondaryDarkBlue rounded-lg p-5 shadow-sm gap-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gitBlue" />
        <input
          className="text-sm focus:border-none bg-transparent dark:text-white focus:outline-none min-w-[80%]"
          type="text"
          value={searchString}
          onChange={(e) => handleSearchString(e.target.value)}
          placeholder="Search Github Username"
        />
        <div className="absolute right-5">
          <span className="text-red-500">{user.length === 0 ? "No results" : ""}</span>
          <Button onClick={handleGetUser}>
            {isLoading ? "Loading ..." : "Search"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Search;
