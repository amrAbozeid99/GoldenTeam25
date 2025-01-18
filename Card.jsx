import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CardContext, CardContextB } from './Zero'

const Card = () => {


    const data  = useContext(CardContext)
    const dataB  = useContext(CardContextB)

  return (
    <div>
      Card 
      {dataB}
      {data}
    </div>
  )
}

export default Card
