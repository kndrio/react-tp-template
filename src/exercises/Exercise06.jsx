  // src/exercises/Exercise01.js
  import React from "react";

  //Uso da Promisse Simples Resolv / Reject
  const Exercise06 = () => {


    const myPromise = new Promise((resolv, reject) => 
      {
        const sucess = false;
        if(sucess){
          resolv('A promisse foi bem sucedida!');
        } else {
          reject('A Promisse falhou!');
        }
      }
    )

    myPromise.then((message) => {
      console.log(message);
    })
    .catch((error) =>
      {
        console.error(error); // a promisse falhou
      })

    return (
      <h1>06 - Promise Resolv / Reject</h1>
    )
    
  }

export default Exercise06;