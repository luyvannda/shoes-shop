import Image from 'next/image';
import { QTY, SIZES, ShoeItem } from '@/constant';
import { CiTrash } from 'react-icons/ci';
import Select from './Select';

interface cartItemProps {
  item: {
    product: ShoeItem;
    qty: number;
    size: number;
  };
}

export default function CartItem({
  item: { product, qty, size },
}: cartItemProps) {
  return (
    <div className="cursor-pointer  space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-gray-900 dark:hover:bg-night-50">
      <div className="flex space-x-2">
        {/* Image */}
        <Image
          src={product.src}
          alt="shoes image"
          width={120}
          height={96}
          className=""
        ></Image>

        <div className="space-y-2">
          {/* Title and Description */}
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-justify text-sm text-gray-400">
            {product.description}
          </div>
        </div>

        {/* Price */}
        <div className="font-bold dark:text-white">{`$${product.price}`}</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              title=""
              defaultValue={size}
              options={SIZES}
              className={'w-16 p-1 pl-2'}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              title=""
              defaultValue={qty}
              options={QTY}
              className={'w-16 p-1 pl-2'}
            />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
