import React , {useState , useEffect} from 'react'
import { BrowserRouter , Link, Route , Routes } from 'react-router-dom';
import  ScaleLoader  from 'react-spinners/ScaleLoader'
import Home from './Home';
import { Nav } from 'react-bootstrap';
import About from './About';
import Contacto from './Contacto';
import './App.css'
import axios from 'axios';
import {Container , Row , Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import Prodict from './Prodict';
import Api from './Api';
import 'animate.css';
import {data} from './Api'
import Accessories from './Accessories';
import AllProducts from './AllProducts';
import SimpleSlider from './SimpleSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './Contact';
import ProductList from './ProductList';
import FRontEnd from './FRontEnd';

const App = () => {

  const [data , setData] = useState([]);
  const [loding , setLodong] = useState(false);

useEffect (()=> {
  setLodong(true);
  setTimeout(()=> {
    setLodong(false);
  } , 3000)
},[])





  return (
    <div className='dodo'>


      {
 
 loding ? 
 <div className='loding'>
 <ScaleLoader color="#e94f08" cssOverride={{}} height={200} 
      loading margin={4} radius={15} speedMultiplier={2} width={15} /> <h1 className='loading000'>Loading ...</h1> <FRontEnd/> </div>
      : 





      

        <>

    


        <BrowserRouter>
        {data.map(data=>{<h1>{data.id}</h1>})}



        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Prodict' element={<Prodict/>} />
          <Route path='/Api' element={<Api/>} />
          <Route path='/Accessories' element={<Accessories/>} />
          <Route path='/AllProducts' element={<AllProducts/>} />
          <Route path='/SimpleSlider' element={<SimpleSlider/>} />
          <Route path='/ProductList' element={<ProductList/>} />
        </Routes>
        <FRontEnd/>
        </BrowserRouter>
        </>
      }
    </div>
  )
}

export default App
