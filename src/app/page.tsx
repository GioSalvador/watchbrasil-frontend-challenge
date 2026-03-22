import { getShelves } from "@/services/api";
import ComponentRenderer from "@/renderer/ComponentRenderer";

export default async function Home() {
  const shelves = await getShelves(1);
  console.log(shelves)
  
  return (
    <main className="bg-black min-h-screen">
      <ComponentRenderer shelves={shelves} />
    </main>
  );
}
