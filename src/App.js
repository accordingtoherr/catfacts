import React, { useEffect, useState, Component } from 'react'
import Cats from './Cats.js'
import './App.css'


//Hooks//

const App = () => {
  const [cat, setCats] = useState([]);
  // const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('dogs');
  

  useEffect(() => {
    getCatFact();
  }, [])

  const getCatFact = async () => {
    const response = await fetch(`https://cat-fact.herokuapp.com/facts`)
   
    
    const data = await response.json();
    console.log(data);

 setCats(data.all); 
    
  }


//   const updateSearch = e => {
// setSearch(e.target.value);
// console.log(search);
//   };

//   const getSearch = e => {
// e.preventDefault();
// setQuery(search);

//   }

  return (
    <div className="App">
      <h1 className="header">
       Cat Facts
      </h1>

      <form className="searchform">
        <input type="text" className="searchbar"></input>
        <button type="submit" className="button">Search</button>
      </form>
      {cat.map(facts=> (
   <Cats facts={facts.text} /> 
 ))}
       
    
  
   </div>

  );
};

export default App;