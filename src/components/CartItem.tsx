import Image from 'next/image';
import { QTY, SIZES, ShoeItem } from '@/constant';
import { CiTrash } from 'react-icons/ci';
import Select from './Select';

interface cartItemProps {
  item: ShoeItem;
}

export default function CartItem({ item }: cartItemProps) {
  return (
    <div className="cursor-pointer  space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      <div className="flex space-x-2">
        {/* Image */}
        <Image
          src={item.src}
          alt="shoes image"
          width={120}
          height={96}
          className=""
        ></Image>

        <div className="space-y-2">
          {/* Title and Description */}
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-gray-400 ">{item.description}</div>
        </div>

        {/* Price */}
        <div className="font-bold">{`$${item.price}`}</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select title="" options={SIZES} />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select title="" options={QTY} />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
}
