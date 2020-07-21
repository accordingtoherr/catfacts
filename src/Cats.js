import React, { useEffect, useState, Component } from 'react'

import './App.css'

const Cats =  ({facts})=>{


    return(

  <div className="items">     
  
<h2 className="subtitle">{facts}</h2>
</div>

    );
 }
 
 export default Cats;