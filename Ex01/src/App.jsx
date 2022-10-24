import Titulo from "./Components/Titulo";
import Lista from "./Components/Lista";

//Exercicio: Criação de uma lista de compras
//Possui 2 elementos: Titulo e Lista

function App() {

  const listaCompras = ["Pão", "Banana", "Milk Shake de Doce de Leite", "Nutella", "Sorvete"];

  return (

    <>

    <Titulo> Lista de Compras </Titulo>

    <Lista>
      {listaCompras}
    </Lista>

    </>

  );
}

export default App;
