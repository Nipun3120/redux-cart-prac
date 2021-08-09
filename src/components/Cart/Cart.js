import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state=> state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>

      {cartItems.length > 0 
        ? cartItems.map(cartItem => 
            <CartItem 
              item={{
                title: cartItem.title,
                quantity: cartItem.quantity,
                total: cartItem.totalPrice,
                price: cartItem.price
              }}
            />
          )
        : <h4>No items in cart</h4>
      } 

        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
