import { getShelves } from "@/services/api";
import ComponentRenderer from "@/renderer/ComponentRenderer";
import Navbar from "@/components/Navbar";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const shelves = await getShelves(page);
  // console.log(shelves)

  return (
    <main className="bg-black min-h-screen">
      <Navbar currentPage={page} />
      <ComponentRenderer shelves={shelves} />
    </main>
  );
}