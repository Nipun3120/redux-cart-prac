import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartDisplay = useSelector(state=> state.ui.cartDisplay);
  return (
    <Layout>
      {cartDisplay && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
