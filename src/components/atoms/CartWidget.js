import { useContext } from 'react';
import {FiShoppingCart} from 'react-icons/fi'
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {cartQuantity} = useContext(CartContext)

  return (
    <div className='flex items-center text-black text-2xl'>
      <FiShoppingCart/>
      <span className='m-1 text-lg'>{cartQuantity()}</span>
    </div>
  );
}

export default CartWidget