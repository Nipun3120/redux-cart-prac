import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

function App() {
  const cartDisplay = useSelector(state=> state.ui.cartDisplay);
  const cart = useSelector(state=> state.cart);
  const notification = useSelector(state=> state.ui.notification)
  const dispatch = useDispatch();

  useEffect(()=> {
    const sendCartData = async ()=> {
      dispatch(uiActions.setNotification({
        status: 'pending',
        title: 'sending...',
        message: 'Sending cart data'
      }));

      const response = await fetch('https://react-practice-85c04-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if(!response.ok) {
          throw new Error('Sending cart data failed')
      }

      const responseData = await response.json();
      dispatch(uiActions.setNotification({
        status: 'success',
        title: 'success !',
        message: 'Cart data sent'
      }));

    }
    
    sendCartData().catch(error=> {
      dispatch(uiActions.setNotification({
        status: 'error',
        title: 'Error...',
        message: 'Sending cart data failed'
      }));
    })

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
