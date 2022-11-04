import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Product from "./Product";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:idProduct" element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
