import React, { useState, useEffect } from "react";

const Eventos = ({ evento, index, onClick }) => {
  return (
    <a key={index} className="card" onClick={onClick}>
      <h1>{evento.nome}</h1>
    </a>
  );
};

const Exercise10 = () => {
  const [eventos, setEventos] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedEvento, setSelectedEvento] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.npoint.io/1758fed3b92ac6e45e43",
        );
        if (!response.ok) {
          throw new Error("Erro de rede");
        }

        const responseData = await response.json();
        setEventos(responseData["eventos"]);

        //extrair categorias únicas
        const uniqueCategorias = Array.from(new Set(responseData["eventos"].map((evento) => evento.categoria)));
        console.log(uniqueCategorias);
        setCategorias(uniqueCategorias);
        setLoading(false);
        
      } catch (error) {
        console.error("Erro ao buscar dados", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (!eventos) {
    return <h1 className="title">Carregando...</h1>;
  }

  const handleSearchChange = (event) => {
    console.log(event);
    setSearchTerm(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setSelectedCategoria(event.target.value);
  }

  const filteredEventos = eventos.filter( evento => {
    const searchMatch = evento.nome.toLowerCase().includes(searchTerm.toLowerCase()) || evento.local.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch = selectedCategoria === "" || evento.categoria === selectedCategoria;

    return searchMatch && categoryMatch;
  });
  
  const handleClick = (evento) => {
    selectedEvento ? setSelectedEvento(null) : setSelectedEvento(evento);
  }


  return (
    <>  
      <h1 className="title">10 - Laboratório de Promisses: Pt2</h1>



      
      <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange}/>

      <select onChange={handleCategoryChange}>
        <option value="">Todas as categorias</option>
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      </div>

      {
        selectedEvento && (
          <div className="modal">
            <h2>{selectedEvento.nome}</h2>
            <p>{selectedEvento.local}</p>
            <p>{selectedEvento.categoria}</p>
            <p>{selectedEvento.data}</p>
            <p>{selectedEvento.local}</p>
            <img src={selectedEvento.imagem} />
          </div>
        )
        
      }


      
      {
        filteredEventos
        .map((evento, index) => (
        <Eventos evento={evento} key={index} onClick={() => handleClick(evento)} />
        ))
      
      }
    </>
  );
};

export default Exercise10;
