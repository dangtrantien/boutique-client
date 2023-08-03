import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user/user-slice';
import productReducer from './product/product-slice';

// ==================================================

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export default store;
