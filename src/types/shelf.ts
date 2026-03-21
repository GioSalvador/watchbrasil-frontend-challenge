export type Shelf = {
  id: number;
  position: number;
  title: string;
  subtitle: string;
  layout: "Banner" | "Carousel" | "List";
  items: ShelfItem[];
};

export type ShelfItem = {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
  domain: string;
};