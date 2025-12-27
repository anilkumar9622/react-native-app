import { Item } from "../types/item";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (): Promise<Item[]> => {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) {
    throw new Error("Unable to fetch posts");
  }

  return response.json();
};
