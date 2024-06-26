'use client';

import { ShoeItem } from '@/constant';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

interface CardProps {
  item: ShoeItem;
  onClick: Dispatch<SetStateAction<ShoeItem>>;
}

const Card: FC<CardProps> = ({ item, onClick }) => {
  const { id, src, color, title, description, price } = item;
  return (
    <div
      onClick={() => onClick(item)}
      className="relative max-w-xl  transform cursor-pointer  transition hover:scale-105"
      style={{ backgroundColor: `${color}` }}
    >
      <div className={`p-8`}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <Image
        src={src}
        alt="Shoe Image"
        width={180}
        height={260}
        className="absolute left-[40%] top-5 h-40 w-56"
      ></Image>
    </div>
  );
};

export default Card;
