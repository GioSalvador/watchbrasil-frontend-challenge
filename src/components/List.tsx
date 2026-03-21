import { Shelf } from "@/types/shelf";

type Props = Shelf;

export default function List({ title, items }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-white mb-2">{title}</h2>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <img
              src={item.image_url}
              alt={item.title}
              className="w-[80px] h-[60px] object-cover rounded"
            />

            <div>
              <p className="text-white text-sm font-bold">
                {item.title}
              </p>
              <p className="text-gray-400 text-xs">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}