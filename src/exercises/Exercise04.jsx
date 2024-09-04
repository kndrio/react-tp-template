// src/exercises/Exercise01.js
import React, { useCallback } from "react";

//CALLBACK HELL
const Exercise04 = () => {

  function fetchData(callback){
    setTimeout( () => 
      {
        callback(null, 'Dados carregados com sucesso!')
      }
    );
  }

  function processData(data, callback){
    setTimeout ( () => 
      {
        callback(null, data + ' processado com sucesso!');
      }
    )
  }

  function saveData(processData, callback) {
    setTimeout ( () => 
      {
        callback(null, `Dados salvos: ${processData}`);
      }
    )
  }

  fetchData((err, data) => 
    {
      if(err){
        console.log("Erro ao buscar dados", err);
      }
      else{
        processData(data, (err, processData) => 
          {
            if(err){
              console.log("Erro ao processar dados", err);
            }
            else{
              saveData(processData, (err, data) => 
                {
                  if(err){
                    console.log("Erro ao salvar dados", err);
                  }
                  else{
                    console.log(data);
                  }
                }
              );
            }
          }
        );
      }
    }      
  );
  

  return (
    <h1>Callback HELL</h1>
  )
  
}

export default Exercise04;