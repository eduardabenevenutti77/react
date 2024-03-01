import { useState } from "react";

export default function BuscaCep() {
  const [cep, setCep] = useState("");
  const [retorno, setRetorno] = useState({});

  // criei um função assincrona para buscar o cep
  async function buscaCEP() {
    // const resultado aguarda e recebe o resultado da requisição (solução da promessa)
    const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    // // const json aguarda e recebe o resultado da requisição (solução da promessa)
    const json = await resultado.json();

    setRetorno(json);
    console.log(retorno);
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
        <p>Estado:{retorno.uf}</p>
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