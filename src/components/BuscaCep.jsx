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
      <h1>Busque informação sobre determinado CEP</h1>
      <input
        type="text"
        name="cep"
        id="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <div className="grid">
        <p className="title_name">Retorno de dados:</p>
        <p className="text">CEP: {retorno.cep}</p>
        <p className="text">Logradouro: {retorno.logradouro}</p>
        <p className="text">Bairro: {retorno.bairro}</p>
        <p className="text">Cidade: {retorno.localidade}</p>
        <p className="text">Estado: {retorno.uf}</p>
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