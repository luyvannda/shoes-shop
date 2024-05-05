import { IoIosArrowDown } from 'react-icons/io';
import { twMerge } from 'tw-merge';

interface SelectProps {
  title: string;
  options: number[];
  className?: string;
  defaultValue?: number;
}

export default function Select({
  title,
  options,
  className,
  defaultValue,
}: SelectProps) {
  return (
    <div className="relative">
      {/* twMerge is function that specify that new className we added will overwrite the previous one, in our case we overwritten `w-24 p-4` with `w-16 p-1` */}

      <select
        defaultValue={defaultValue || ''}
        className={twMerge(
          `w-24 cursor-pointer appearance-none border border-gray-300 bg-white p-4 ${className}`
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
