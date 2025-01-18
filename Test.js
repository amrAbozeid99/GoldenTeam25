import React from 'react'
import { createContext } from 'react'
import { useState , useEffect } from 'react'
import Zero from './Zero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './Card';

export const amrContext = createContext();


const Test = () => {

const [data , setData]=useState([])
const [amr ,setAmr] = useState(data)

useEffect(()=>{


    fetch("https://fakestoreapi.com/products")
     .then(res=>res.json())
     .then(data=>{
        //console.log(data)
         setData(data)

     },[])
 })





  return (
    <amrContext.Provider value={data}>
         <Zero/>
    </amrContext.Provider>


    
  )
}

export default Test
