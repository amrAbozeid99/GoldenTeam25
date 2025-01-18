import React, { useState } from 'react'
import { useContext } from 'react'
import { amrContext } from './Test'
import Card from './Card'
import { createContext } from 'react'
export const CardContext = createContext();
export const CardContextB = createContext();



function Zero() {

const [dataCard,setDataCard]=useState([])
const [dataCardB,setDataCardB]=useState('')



    const data  = useContext(amrContext)

//console.log(data)

  return (
  <CardContext.Provider value={dataCard}>
  <CardContextB.Provider value={dataCardB}>
  <>

    <div className='carts'>
        
        
  <Card/>
  
        
        {data.map(data => (
            
            <ul key={data.title}  className='apiData animate__animated animate__backInUp'>
                <li ><img loading='lazy' src={data.image} style={{width:"300px"}} /></li>  
                <li>{data.title}</li>
                <li>Size : {data.price} G.B</li>
                <div className='orderNaw' > <label className="styled-checkbox"><input type="checkbox"/><span className="custom-checkbox" ></span><span className='checkSend' onClick={()=>{console.log(setDataCard(





dataCard+<li>{data.title}</li>






                ),setDataCardB(dataCardB+data.price))}}>Click to add</span></label> </div>
            </ul>
    ))}
    </div>
    </>
    </CardContextB.Provider>
    </CardContext.Provider>
    )






}

export default Zero