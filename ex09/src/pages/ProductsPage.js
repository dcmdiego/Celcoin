import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Product from "../components/Product";
import CartContext from "../context/cart";


const products = [
  { name: "Bolo de aniversário", icon: "🎂", price: 20.9 },
  { name: "Balão", icon: "🎈", price: 5.6 },
  { name: "Confete", icon: "🎉", price: 2.9 },
  { name: "Suco de caixinha", icon: "🧃", price: 1.9 },
  { name: "Doces diversos", icon: "🍬", price: 12.3 }
];

export default function ProductsPage() {
  const navigate = useNavigate();

  const {cart, setCart} = useContext(CartContext)

  function addProductOnCart() {
    if (isProductAlreadySelected()) {
      const newProductList = removeProductFromCart();
      setCart(newProductList);
    } else {
      setCart([...cart, products]);
    }
  }

  function removeProductFromCart() {
    return cart.filter(productOnCart => products.id !== productOnCart.id);
  }

  function isProductAlreadySelected() {
    return cart.find(productOnCart => products.id === productOnCart.id);
  }


  return (
    <div className="ProductsPage">
      <h1>Produtos disponíveis</h1>
      <p>Por questões de estoque, as compras estão limitadas a uma unidade por cpf.</p>
      {
        products.map(product => {
          return (
            <Product
              key={product.name}
              name={product.name}
              icon={product.icon}
              price={product.price}
              onClick={addProductOnCart}
            />
          )
        })
      }
      <button onClick={() => navigate("/checkout")}>Fechar compra</button>
    </div>
  )
}