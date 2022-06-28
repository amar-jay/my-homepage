import { NextApiRequest, NextApiResponse } from "next";

const API_URL = "https://api.github.com/users/";

interface GithubData {
  [prop: string]: string | Object;
}
export const fetchData = async () => {
  const fetchUser = await fetch(API_URL + "amar-jay").then((r) => r.json());

  return {
    name: fetchUser.name,
    avatar_url: fetchUser.avatar_url,
    bio: fetchUser.bio,
    following: fetchUser.following,
    followers: fetchUser.followers,
    publicRepo: fetchUser.publicRepo,
  } as { [prop: string]: string };
};
export type DataStruct = {
  data: {
    name: string;
    bio: string;
    followers: number;
    following: number;
  };
  repos?: [
    {
      name: string;
      createdAt: string;
      lastUpdatedAt: string;
      languages: string[];
    }
  ];
};

export const fetchRepos: (username?: string) => Promise<GithubData> = async (
  username = "amar-jay"
) => {
  const respData = await fetch(API_URL + username + "/repos").then((resp) =>
    resp.json()
  );
  // .then((repos: typeof Data["repos"]) => {
  //   repos.forEach((item) => {
  //     Data.repos.push({
  //         name: item.name,
  //     }
  //   });
  // });

  return respData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ repos: await fetchRepos(), data: await fetchData() });
}
