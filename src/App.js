import { useState } from "react";
import "./App.css"; // importei pra dentro do meu projeto TODO o css do arquivo app.css

function App() {
  const [cep, setCep] = useState("");
  const [retorno, setRetorno] = useState({});

  // criei um função assincrona para buscar o cep
  async function buscaCEP() {
    // const resultado aguarda e recebe o resultado da requisição (solução da promessa)
    const resultado = await fetch("https://viacep.com.br/ws/01001000/json/");
    // // const json aguarda e recebe o resultado da requisição (solução da promessa)
    const json = await resultado.json();

    setRetorno(json);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input
        type="text"
        name="cep"
        id="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <div>
        <p>CEP: </p>
        <p>Logradouro: {retorno.logradouro}</p>
        <p>Bairro: {retorno.bairro}</p>
        <p>Cidade: {retorno.localidade}</p>
        <p>Estado:{retorno.localidade}</p>
      </div>
      <button
        onClick={() => {
          buscaCEP();
        }}
      >
        Busca CEP
      </button>
    </div>
  );
}

export default App;
