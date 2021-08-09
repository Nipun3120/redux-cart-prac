import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'p1',
    price: 6,
    title: 'Book_1',
    description: 'This is a book'
  },
  {
    id: 'p2',
    price: 10,
    title: 'Book_2',
    description: 'This is second book'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(product => (
          <ProductItem 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />))}
      </ul>
    </section>
  );
};

export default Products;
