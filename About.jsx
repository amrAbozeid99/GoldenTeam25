import React from 'react'
import { useState , useEffect } from 'react'
import Api from './Api'
import { Row } from 'reactstrap'
import { Link } from 'react-router-dom'


const About = () => {

const [loding , setLoding]=useState(false)

useEffect(
  ()=>{
    setLoding(true);
    setTimeout(()=>{setLoding(false)},1000)

  },[]
)




  return (
   <>
<div  className='nav'>
<div className='logo'> <Link to='/'><img src={require('./logo512.png')}/></Link> </div>
<div className='routes'>
<Link to='/'>Home</Link>
<Link to='/AllProducts'>Products</Link>
<Link to='/About'><span className='whereNav   animate__animated animate__flash'>Hard drive</span></Link>
<Link to='/Contacto'>Contact</Link>
</div>
</div>
<div className='navSpas'></div>
  
    
    <div>
      <h1 className='hardsoffers'>Hard drive offers</h1>
  


      <div className="newprod">
        
        <div className='divHard  animate__animated animate__backInUp'>
        <img src={require('./3img/hards/1tera new.png')} alt="1teraNEW"  style={{width:"100%"}}/>
        </div>

        <div className='divHard  animate__animated animate__backInUp'>
        <img src={require('./3img/hards/500GB.png')} alt="500GB"  style={{width:"100%"}}/>
        </div>

        <div className='divHard  animate__animated animate__backInUp'>
        <img src={require('./3img/hards/1tera.png')} alt="1tera"  style={{width:"100%"}}/>
        </div>

        <div className='divHard  animate__animated animate__backInUp'>
        <img src={require('./3img/hards/2tera.png')} alt="2tera"  style={{width:"100%"}}/>
        </div>

        <div className='divHard  animate__animated animate__backInUp'>
        <img src={require('./3img/hards/3tera.png')} alt="3tera"  style={{width:"100%"}}/>
        </div>

      </div>







      </div>
   
   </>
  )
}

export default About
