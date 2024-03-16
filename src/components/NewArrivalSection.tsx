import Card from '@/components/Card';
import { ShoeItem } from '@/constant';
import { FC } from 'react';

interface itemsProps {
  items: ShoeItem;
}

const NewArrivalSection: FC<itemsProps> = ({ items }) => {
  return (
    <div className="flex-center mt-20">
      <div
        className="bg-center text-4xl font-extrabold"
        style={{ backgroundImage: "url('/lines.png')" }}
      >
        New Arrivals
      </div>
      <div className="">
        {/* {SHOE_LIST.map(shoe => (
        <Card key={shoe.id} item={shoe} />
      ))} */}
      </div>
    </div>
  );
};

export default NewArrivalSection;
