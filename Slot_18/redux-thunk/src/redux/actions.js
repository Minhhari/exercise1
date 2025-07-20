

export const addProduct = (product) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({ type: 'ADD_PRODUCT', payload: product });
        resolve();
      }, 500); 
    });
  };
};

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});