import Link from 'next/link';
import Image from 'next/image';

export default function ShoeDetail() {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse">
      <div className="flex-1">
        <Image
          src="/n1-min.png"
          alt="A pair of Nike shoe"
          width={2199}
          height={1812}
        ></Image>
      </div>
      <div className="flex-1 space-y-6 ">
        <h1 className="text-5xl font-black md:text-9xl">Nike Air Max 270</h1>

        <p className="font-medium md:text-xl">
          The Nike Air Max 270 is a lifestyle shoe that&apos;s sure to turn
          heads with its vibrant color gradient.
        </p>

        <p className="text-3xl font-extrabold md:text-6xl">$100</p>
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
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
}
