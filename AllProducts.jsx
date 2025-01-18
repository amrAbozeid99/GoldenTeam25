import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {
return (
<>
<div  className='nav'>
<div className='logo'> <Link to='/'><img src={require('./logo512.png')}/></Link> </div>
<div className='routes'>
<Link to='/'>Home</Link>
<Link to='/AllProducts'><span className='whereNav'>Products</span></Link>
<Link to='/Contacto'>Contact</Link>
</div>
</div>
<div className='navSpas'></div>
<div className='home'>


<h1 class="hardsoffers">All Products</h1>
<div className="homeAlpha">
  <div className='lenkhome  animate__animated animate__flash'><Link className='linkada' to='/Prodict'><img className='linkada' src={require("./3img/games.jpg")} alt="games" style={{width:'90%'}} /></Link></div>
  <div className='lenkhome  animate__animated animate__flash'><Link className='linkada' to='/About'><img className='linkada' src={require("./3img/hards.jpg")} alt="hards" style={{width:'90%'}} /></Link></div>
  <div className='lenkhome  animate__animated animate__flash'><Link className='linkada' to='/Accessories'><img className='linkada' src={require("./3img/accesore.png")} alt="acces" style={{width:'90%'}} /></Link></div>
</div>

    </div></>
  )
}

export default AllProducts
