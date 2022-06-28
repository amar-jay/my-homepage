const API_URL = "https://api.github.com/users/";

interface GithubData {
  [prop: string]: string | Object;
}
export const fetchData: () => Promise<{
  [prop: string]: string;
}> = async () => {
  const fetchUser = await fetch(API_URL + "amar-jay").then((r) => r.json());

  return {
    name: fetchUser.name,
    avatar_url: fetchUser.avatar_url,
    bio: fetchUser.bio,
    following: fetchUser.following,
    followers: fetchUser.followers,
    publicRepo: fetchUser.publicRepo,
  };
};

export const fetchRepos: (username?: string) => Promise<GithubData> = async (
  username = "amar-jay"
) => {
  const respData = await fetch(API_URL + username + "/repos").then((resp) =>
    resp.json()
  );

  return respData;
};
