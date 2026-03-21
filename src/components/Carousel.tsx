import { Shelf } from "@/types/shelf";

type Props = Shelf;

export default function Carousel({ title, items }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-white mb-2">{title}</h2>

      <div className="flex gap-3 overflow-x-auto">
        {items.map((item) => (
          <div key={item.id} className="min-w-[120px]">
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-[80px] object-cover rounded"
            />
            <p className="text-white text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}