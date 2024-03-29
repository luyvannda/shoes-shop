import Image from 'next/image';
import { ShoeItem } from '@/constant';

interface itemProps {
  item: ShoeItem;
}

export default function CartItem({ item }: itemProps) {
  return (
    <div className="flex cursor-pointer space-x-2 bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      <Image
        src={item.src}
        alt="shoes image"
        width={120}
        height={96}
        className=""
      ></Image>

      <div className="space-y-2">
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-gray-400 ">{item.description}</div>
      </div>
      <div className="font-bold">{`$${item.price}`}</div>
    </div>
  );
}
