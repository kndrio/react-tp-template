// src/exercises/Exercise07.js
import React from "react";

//Uso Fetch com Async / await
const Exercise07 = () => {

  async function fetchData(){
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    }
    catch (error){
      console.error(error);
    }
  }

  fetchData();
  
  return (
          <>
            <h1>07 - Uso Fetch com Async / await</h1>
          </>
         );
}

export default Exercise07;