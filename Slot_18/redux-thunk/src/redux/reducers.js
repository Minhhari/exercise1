// redux/reducers.js
const initialState = {
  products: [
    {
      id: '123456',
      name: 'Example Product',
      price: 9.99,
      description: 'This is an example product.',
      catalogs: ['catalog1', 'catalog2'],
    },
    {
      id: '216489',
      name: 'Beef Pho Noodle Soup',
      price: 19.99,
      description: 'Vietnamese beef pho noodle soup with fresh herbs and spices.',
      catalogs: ['catalog3'],
    },
  ],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;