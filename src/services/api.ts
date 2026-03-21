import { Shelf } from "@/types/shelf";

const BASE_URL = "https://simple-test-api-s02c.onrender.com";

export async function getShelves(page = 1): Promise<Shelf[]> {
  const res = await fetch(`${BASE_URL}/shelves?page=${page}`);

  if (!res.ok) {
    throw new Error("Error searching for shelves");
  }

  return res.json();
}