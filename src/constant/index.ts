import { StaticImageData } from 'next/image';
import nike1 from '/public/n1-min.png';
import nike2 from '/public/n2-min.png';
import nike3 from '/public/n3-min.png';
import nike4 from '/public/n4-min.png';

export const SIZES = [41, 42, 43, 44, 45, 46, 47];
export const QTY = [1, 2, 3, 4, 5];

export interface ShoeItem {
  id: number;
  src: StaticImageData;
  color: string;
  title: string;
  description: string;
  price: number;
}

export const SHOE_LIST: ShoeItem[] = [
  {
    id: 1,
    src: nike1,
    color: '#EEFFA4',
    title: 'Nike Air Max 270',
    description:
      "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient.",
    price: 160,
  },
  {
    id: 2,
    src: nike2,
    color: '#DDCEFD',
    title: 'Nike Air Vapor',
    description:
      "The Nike Air Vapor is a sleek and stylish shoe that's perfect for any occasion. It's the perfect shoe for any active lifestyle.",
    price: 100,
  },
  {
    id: 3,
    src: nike3,
    color: '#DAFFA2',
    title: 'Nike Air Max 2090',
    description:
      "The Nike Air Max 2090 is shoe that's both stylish and comfortable. It's the perfect shoe for any fashion-forward individual.",
    price: 150,
  },
  {
    id: 4,
    src: nike4,
    color: '#FCC4EA',
    title: 'Nike Air Blazer',
    description:
      "The Nike Air Blazer is a classic shoe that's perfect for any casual occasion. It's the perfect shoe for any laid-back individual.",
    price: 110,
  },
];
