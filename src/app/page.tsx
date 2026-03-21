import { getShelves } from "@/services/api";

export default async function Home() {
  const shelves = await getShelves(1);
  console.log(shelves)
  
  return (
    <main>
      <h1>Watch Brasil Challenge</h1>
    </main>
  );
}
