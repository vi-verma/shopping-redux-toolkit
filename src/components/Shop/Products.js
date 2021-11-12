import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_Products = [
  {
    id: 'p1',
    price: 6,
    title: 'My first Book',
    description: 'The first boook i ever wrote'
  },
  {
    id: 'p2',
    price: 4,
    title: 'My second Book',
    description: 'The second boook i ever wrote'
  }
]; 

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_Products.map(product => 
        <ProductItem
          key={product.id}
          id={product.id}
          title={ product.title}
          price={product.price}
          description={product.description}
        />)}
        
      </ul>
    </section>
  );
};


export default Products;
