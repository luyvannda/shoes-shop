import Card from '@/components/Card';
import { ShoeItem } from '@/constant';
import { Dispatch, FC, SetStateAction } from 'react';

interface itemsProps {
  items: ShoeItem[];
  onClickCard: Dispatch<SetStateAction<ShoeItem>>;
}

const NewArrivalSection: FC<itemsProps> = ({ items, onClickCard }) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div
          className="bg-center text-4xl font-extrabold dark:text-white"
          style={{ backgroundImage: "url('/lines.png')" }}
        >
          New Arrivals
        </div>
      </div>
      <div className=" mt-10 grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 lg:gap-x-10 xl:grid-cols-3 xl:gap-x-16">
        {items.map(item => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
