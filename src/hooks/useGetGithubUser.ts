import { Octokit } from "octokit";
import { useState } from "react";

const octokit = new Octokit({
  auth: "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",
});

const useGetGithubUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const getUser = async (username: string) => {
    setIsLoading(true);
    try {
      const data = await octokit.request("GET /users/{username}", {
        username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      setUser(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    getUser,
    user,
  };
};

export default useGetGithubUser;
