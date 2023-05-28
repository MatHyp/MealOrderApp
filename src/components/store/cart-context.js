import react from "react";

const CartContext = react.createContext({
  items: [],
  totalAmount: 0,
  halo: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearAll: () => {},
});

export default CartContext;
