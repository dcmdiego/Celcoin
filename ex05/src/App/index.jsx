import { useState } from "react";
import Product from "../Product";
import "./app.css"

const products = [
  { name: "Bolo de aniversário", icon: "🎂", price: 20.9 },
  { name: "Balão", icon: "🎈", price: 5.6 },
  { name: "Confete", icon: "🎉", price: 2.9 },
  { name: "Suco de caixinha", icon: "🧃", price: 1.9 },
  { name: "Doces diversos", icon: "🍬", price: 12.3 }
];

const App = () => {

  const [total, setTotal] = useState(0);

  const produtos = products.map((product) => (
    <Product
    icon={product.icon}
    name={product.name}
    price={product.price}
    updateTotal={(price) => {setTotal(total + price)}}
    />
  ))

  return (

    <>

    <div className="register">
      <h3>Total da compra: - R$  {total.toFixed(2).toString().replace(".", ",")} </h3>
    </div>

    <div>

    {produtos}

    </div>
    
    </>

  );

}

export default App

