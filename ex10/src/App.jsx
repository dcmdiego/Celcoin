import { useState } from "react";

function App() {

  const [text, setText] = useState(undefined);

  return (
    <div className="App">
      <textarea placeholder="Digite aí" rows={15} value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div className="mirror">
        <h1>Código</h1>
        {
          text !== undefined ? 
          text.toUpperCase() :
          "O texto em caixa alta"
        }
      </div>
    </div >
  );
}

export default App;
