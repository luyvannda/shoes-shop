import Link from 'next/link';
import Image from 'next/image';
import Select from './Select';
import { QTY, SIZES } from '@/constant';
import { ShoeItem } from '@/constant';
import { FC } from 'react';

interface ShoeDetailProps {
  shoe: ShoeItem;
}

const ShoeDetail: FC<ShoeDetailProps> = ({ shoe }) => {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse">
      {/* Shoes Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center  h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <Image
            src={shoe.src}
            alt="A pair of Nike shoe"
            width={2199}
            height={1812}
            className="animate-float"
          ></Image>
        </div>
      </div>
      <div className="flex-1 space-y-6 dark:text-white ">
        {/* Shoes text details */}
        <h1 className="text-5xl font-black md:text-9xl">{shoe.title}</h1>

        <p className="font-medium md:text-xl">{shoe.description}</p>

        <div className="flex space-x-6">
          <p className="text-3xl font-extrabold md:text-6xl">{shoe.price}</p>

          <Select title={'QTY'} options={QTY} />
          <Select title={'SIZE'} options={SIZES} />
        </div>

        {/* Shoes Button and Link */}
        <div className="space-x-10">
          <button className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-gray-100 dark:text-black">
            Add to bag
          </button>

          <Link
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
