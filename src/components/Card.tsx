import { ShoeItem } from "@/constant";
import Image from "next/image"
import { FC } from "react";


interface CardProps {
 item: ShoeItem;
}

const Card: FC<CardProps> = ({item}) => {
    const {id, src, className, title, description, price} = item;
    return <div>
    <div>
        <div>{title}</div>
        <div>SHOP NOW +</div>
    </div>
        <Image
        src={src}
        alt="Shoe Image"
        width={300}
        height={300}
        ></Image>
    </div>
}

export default Card