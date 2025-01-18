import React from 'react'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import { Container} from 'reactstrap';
import {   CardBody , CardTitle , CardText, CardSubtitle } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import SimpleSlider from './SimpleSlider';
import AllProducts from './AllProducts';


const Home = () => {





  const handleClick = () => {
    alert('coming soon');
  };











  const form = useRef();

    
    
    return (
      
      
<>
<div  className='nav'>
<div className='logo'> <Link to='/'><img src={require('./logo512.png')}/></Link> </div>
<div className='routes'>
<Link to='/'><span className='whereNav'>Home</span></Link>
<Link to='/AllProducts'>Products</Link>
<Link to='/Contacto'>Contact</Link>
</div>
</div>

<div className='navSpas'></div>

<div className="swieber">
<SimpleSlider/>
</div>

      <div className='home'>



<div className="Ahomelanka">
  <div className='lenkhome  animate__animated animate__backInUp'><Link className='homelanka' to='/AllProducts'> Browse our products</Link></div>
  <div className='lenkhome  animate__animated animate__backInUp'><Link className='homelanka' to='/Contacto'>Contact us</Link></div>
</div>









      







      </div>


      </>
  )
}

export default Home