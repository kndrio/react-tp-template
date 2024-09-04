import React, { useState, useEffect } from "react";

const Clubs = ({club, index}) => {
  return (
    <div key={index} className="card">
      <h2>{club.name}</h2>
      {club.sports && Object.keys(club.sports).map((sport, sportIndex) => (
      <h3>{sport.toUpperCase()}</h3>
      ))}
    </div>
  )
}

const Exercise08 = () => {
  const [data, setData] = useState([]);

  useEffect (() => {
    async function fetchData(){
      try{
        const response = await fetch('https://api.npoint.io/1172879cd354856dcc96');
        if(!response.ok) {
          throw new Error('Erro de rede');
        }

        const responseData = await response.json();
        setData(responseData['clubs']);
      }
      catch(error){
        console.error('Erro ao buscar dados', error);
      }
    }
    fetchData();
  }, []
    )

  if(!data){
    return <div>Carregando...</div>
  }


  return (
    <>
      <h1>08 - Laboratório de Promisses: Lista de Times Poliesportivos</h1>
      {data.map((club, index) => (
        <Clubs club={club} key={index} />
      ))
      }
    </>
  );
}

export default Exercise08;