import { Shelf } from "@/types/shelf";

type Props = Shelf;

export default function Banner({ title, subtitle, items }: Props) {
  const item = items[0];

  return (
    <div className="w-full h-[300px] relative text-white">
      <img
        src={item.image_url}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-4 left-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}