import React from 'react'
import { Link } from 'react-router-dom'

const Accessories = () => {
  return (
    <><div  className='nav'>
<div className='logo'> <Link to='/'><img src={require('./logo512.png')}/></Link> </div>
<div className='routes'>
<Link to='/'>Home</Link>
<Link to='/AllProducts'>Products</Link>
<Link to='/Accessories'><span className='whereNav   animate__animated animate__flash'>Accessories</span></Link>
<Link to='/Contacto'>Contact</Link>
</div>
</div>
<div className='navSpas'></div>
    <div className='Accessories'> 
      Accessories comming soon
    </div></>
  )
}

export default Accessories
