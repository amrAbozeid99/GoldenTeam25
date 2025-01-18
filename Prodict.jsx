import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Api from './Api'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'

const Prodict = () => {

  


  return (
    <>
    

    <div  className='nav'>
<div className='logo'> <Link to='/'><img src={require('./logo512.png')}/></Link> </div>
<div className='routes'>
<Link to='/'>Home</Link>
<Link to='/AllProducts'>Products</Link>
<Link to='/Prodict'><span className='whereNav  animate__animated animate__flash'>Games</span></Link>
<Link to='/Contacto'>Contact</Link>
</div>
</div>
<div className='navSpase'></div>





      <div className="prodictA">
        
      {/* <Api/>  */}
      <ProductList/>


    </div>
  
</>
  )
}

export default Prodict









