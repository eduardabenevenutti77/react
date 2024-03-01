import { useEffect, useState } from "react";

export default function MudarTema() {
  const [tema, setTema] = useState("light");

  // toda vez que a variável tema muda esta função dentro de useEffect é chamada
  // e com isto executada a lógica de trocar o tema
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

  const trocaTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={trocaTema}>☀️</button>
    </div>
  );
}