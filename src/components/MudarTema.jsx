import React, { useEffect, useState } from "react";

export default function MudarTema() {
  const [tema, setTema] = useState("light");
  const [emoji, setEmoji] = useState("☀️"); // Estado inicial do emoji

  // Efeito que é acionado sempre que o tema muda
  useEffect(() => {
    const mudaTema = () => {
      const body = document.body;
      if (tema === "dark") {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    };
    mudaTema();
  }, [tema]);

  // Função para alternar entre os temas e emojis
  const trocaTema = () => {
    setTema(tema === "light" ? "dark" : "light");
    // Verifica qual emoji está sendo exibido e troca para o outro
    if (emoji === "☀️") {
      setEmoji("🌜"); // Troca para o emoji de tema escuro
    } else {
      setEmoji("☀️"); // Troca para o emoji de tema claro
    }
  };

  return (
    <div>
      <button className="teste" onClick={trocaTema}>{emoji}</button>
    </div>
  );
}
