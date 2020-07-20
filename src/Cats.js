import React, { useEffect, useState, Component } from 'react'

import './App.css'

const Cats =  ({facts})=>{


    return(

  <div className="items">     
<h1 className="subtitle">{facts}</h1>
</div>

    );
 }
 
 export default Cats;