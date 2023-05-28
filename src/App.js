import Navigation from "./components/Layouts/Navigation.js";
import Header from "./components/Layouts/Header";
import FoodList from "./components/FoodList/FoodList.js";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.js";
import CartProvider from "./components/store/CartProvide.js";
import { useState } from "react";

function App() {
  const [cartIsVisibled, setCardIsVisibled] = useState(false);

  const visibleCartHandler = () => {
    setCardIsVisibled(true);
  };

  const hideCartHandler = () => {
    setCardIsVisibled(false);
  };

  return (
    <CartProvider>
      <Navigation changeCartToVisible={visibleCartHandler} />
      <Header cart={cartIsVisibled} />
      <FoodList cart={cartIsVisibled} />
      {cartIsVisibled && <ShoppingCart hideCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
