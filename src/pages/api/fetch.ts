import { NextApiRequest, NextApiResponse } from "next";

const API_URL = "https://api.github.com/users/amar-jay";

export type IData = {
  data: {
    name: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
  };
  repos: {
    full_name: string;
    description: string;
    created_at: string;
    updated_at: string;
    language: string;
  }[];
};

const Data: IData = { data: {} as any, repos: [] };
export const fetchData = async () => {
  const fetchUser: IData["data"] = await fetch(API_URL)
    .then((r) => {
      return r.json();
    })
   
  Data.data.name = fetchUser.name;
  Data.data.bio = fetchUser.bio;
  Data.data.following = fetchUser.following;
  Data.data.followers = fetchUser.followers;
  Data.data.public_repos = fetchUser.public_repos;
};

export const fetchRepos = async () => {
  const fetchRepos: IData["repos"] = await fetch(API_URL + "/repos")
    .then((resp) => resp.json())
   

  fetchRepos?.forEach((repo) => {
    Data?.repos.push({
      full_name: repo.full_name,
      description: repo.description,
      language: repo.language,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
    });
  });

  return true;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    await fetchRepos();
    await fetchData();

  res.status(200).json(Data);
}
