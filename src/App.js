import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData } from './store/cart-actions';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';


let firstReload = true;

function App() {
  const cartDisplay = useSelector(state=> state.ui.cartDisplay);
  const cart = useSelector(state=> state.cart);
  const notification = useSelector(state=> state.ui.notification)
  const dispatch = useDispatch();

  useEffect(()=> {  
      if(firstReload) {
          firstReload = false;
          return;
      }
    
      dispatch(sendCartData(cart));
  }, [cart, dispatch]);


  // console.log(cart)
  return (
    <React.Fragment>
      <Notification 
        status={notification.status} 
        title={notification.title} 
        message={notification.message}
      />

      <Layout>
        {cartDisplay && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
