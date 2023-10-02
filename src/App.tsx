import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import useGetGithubUser from "./hooks/useGetGithubUser";
import UserCard from "./components/userCard";


function App() {
  const [searchString, setSearchString] = useState<string>("");
  const [colorScheme, setColorScheme] = useState<"dark" | "light">("light");
  const { user, getUser, isLoading } = useGetGithubUser();

  const handleGetUser = () => {
    getUser(searchString);
  };

  const handleSearchString = (value: string) => {
    setSearchString(value);
  };

  const handleChangeColorScheme = () => {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  };
  return (
    <div className={`${colorScheme} h-screen w-full`}>
      <div className="bg-lightGrey dark:bg-gitDark  flex items-center w-full h-full">
        <section className="w-11/12 grid gap-8 mx-auto h-max lg:w-8/12 2xl:w-6/12">
          <Header
            colorScheme={colorScheme}
            handleChangeColorScheme={handleChangeColorScheme}
          />
          <Search
            isLoading={isLoading}
            user={user}
            searchString={searchString}
            handleGetUser={handleGetUser}
            handleSearchString={handleSearchString}
          />
          {user !== null && <UserCard userDetails={user}/>}
        </section>
      </div>
    </div>
  );
}

export default App;
