import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './ProductList.module.css';

// ==================================================

const ProductList = () => {
  const totalProduct = useSelector((state) => state.product.total);
  const products = useSelector((state) => state.product.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);

  const changePageHandler = (direction) => {
    if (direction === 'next') {
      setCurrentPage((prev) => (prev === products.length ? 1 : prev + 1));
    } else {
      setCurrentPage((prev) => (prev === 1 ? products.length : prev - 1));
    }
  };

  // Render value theo page
  useEffect(() => {
    if (products.length !== 0) {
      setCurrentProducts(products[currentPage - 1].results);
    } else {
      setCurrentProducts([]);
    }
  }, [products, currentPage]);

  return (
    <>
      <div className={styles['list-container']}>
        {currentProducts?.length === 0 && (
          <h3 className={styles.error}>Can not find any available product!</h3>
        )}

        {currentProducts?.length !== 0 &&
          currentProducts?.map((product) => (
            <div key={product._id} className={styles['product-container']}>
              <Link to={`/product/${product._id}`}>
                <img src={product.img1} alt={product.name} />
              </Link>

              <p className={styles['product-name']}>{product.name}</p>

              <p className={styles['product-price']}>
                {product.price?.toLocaleString('de-DE')} VND
              </p>
            </div>
          ))}
      </div>

      <div className={styles['pagination-container']}>
        <div>
          <button type='button' onClick={changePageHandler.bind(null, 'prev')}>
            &laquo;
          </button>

          <button type='button' className={styles.active}>
            {currentPage}
          </button>

          <button type='button' onClick={changePageHandler.bind(null, 'next')}>
            &raquo;
          </button>
        </div>

        <p>Showing 1-8 of {totalProduct} results</p>
      </div>
    </>
  );
};

export default ProductList;
