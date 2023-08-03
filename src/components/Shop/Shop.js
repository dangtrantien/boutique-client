import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import useHttp from '../../hooks/use-http';
import { productActions } from '../../store/product/product-slice';
import Category from './Category';
import ProductList from './ProductList';

import styles from './Shop.module.css';

// ==================================================

const Shop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const sendRequest = useHttp();

  const [category, setCategory] = useState(location.state?.category || 'all');

  // Hiển thị danh sách các product theo category
  const selectCategoryHandler = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  useEffect(() => {
    sendRequest({
      url:
        category === 'all'
          ? 'http://192.168.1.107:5000'
          : `http://192.168.1.107:5000/products/category?category=${category}`,
    })
      .then((result) => {
        if (result.error) {
          return alert(result.message);
        }

        dispatch(productActions.replaceProductSate(result));
      })
      .catch((err) => console.log(err));
  }, [category, sendRequest, dispatch]);

  return (
    <div className={styles['shop-container']}>
      <Category category={category} onSelectCategory={selectCategoryHandler} />

      <div className={styles['product-list']}>
        <div className={styles['action-container']}>
          <input type='text' placeholder='Enter Search Here!' />

          <select>
            <option value='default'>Default sorting</option>
            <option value='lowToHigh'>Price: Low to High</option>
            <option value='highToLow'>Price: High to Low</option>
          </select>
        </div>

        <ProductList />
      </div>
    </div>
  );
};

export default Shop;
