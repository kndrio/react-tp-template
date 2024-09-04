import React, { useState, useEffect } from "react";

const Livros = ({ livro, index, onClick }) => {
  return (
    <a key={index} className="card" onClick={onClick}>
      <h1>{livro.titulo}</h1>
    </a>
  );
};

const Exercise09 = () => {
  const [livros, setLivros] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.npoint.io/8a069655810f56575d70",
        );
        if (!response.ok) {
          throw new Error("Erro de rede");
        }

        const responseData = await response.json();
        setLivros(responseData["livros"]);
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    }
    fetchData();
  }, []);

  if (!livros) {
    return <h1 className="title">Carregando...</h1>;
  }

  const handleClick = (livro) => {
    alert(`Título: ${livro.titulo}\n
    Ano de Publicação: ${livro.ano_publicacao}\n
    Descricao: ${livro.descricao}\n`);
  }

  return (
    <>
      <h1 className="title">09 - Laboratório de Promisses: Livros</h1>
      {livros.map((livro, index) => (
        <Livros livro={livro} key={index} onClick={() => handleClick(livro)} />
      ))}
    </>
  );
};

export default Exercise09;
