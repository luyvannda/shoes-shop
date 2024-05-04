import { FC } from 'react';
import CartItem from './CartItem';
import { ShoeItem } from '@/constant';

interface CartProps {
  cartItems: Array<{ product: ShoeItem; qty: number; size: number }>;
}

const Cart: FC<CartProps> = ({ cartItems }) => {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold">Cart</h2>
      <ul>
        {cartItems.map(cartItem => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem.product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
