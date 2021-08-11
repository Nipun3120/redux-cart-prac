import { uiActions } from "./ui-slice";

export const sendCartData = (cart)=> {
    return async(dispatch)=> {
        dispatch(uiActions.setNotification({
            status: 'pending',
            title: 'sending...',
            message: 'Sending cart data'
          }));
    

          const sendRequest = async()=> {
            const response = await fetch('https://react-practice-85c04-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
              });
    
            if(!response.ok) {
                throw new Error('Sending cart data failed')
            }
          }

          try{
            await sendRequest();
            dispatch(uiActions.setNotification({
                status: 'success',
                title: 'success !',
                message: 'Cart data sent'
            }));

          }catch(error) {
            dispatch(uiActions.setNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart data failed'
              }));
          }
          

        // const responseData = await response.json();
        // console.log(responseData);
    }
}