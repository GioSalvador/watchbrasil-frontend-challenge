import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import List from "@/components/List";
import { Shelf } from "@/types/shelf";

type Props = {
  shelves: Shelf[];
};

export default function ComponentRenderer({ shelves }: Props) {
  const componentMap = {
    Banner: Banner,
    Carousel: Carousel,
    List: List,
  };

  return (
    <>
      {shelves
        .sort((a, b) => a.position - b.position)
        .map((shelf) => {
          const Component = componentMap[shelf.layout];

          if (!Component) return null;

          return <Component key={shelf.id} {...shelf} />;
        })}
    </>
  );
}