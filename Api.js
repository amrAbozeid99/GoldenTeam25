// import React, { useContext } from 'react'
// import { useState , useEffect } from 'react'
// import 'animate.css';
// import { createContext } from 'react';
// import  { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Link } from 'react-router-dom';
// import { Button, Label } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
// import { PacmanLoader } from 'react-spinners';
// import  ScaleLoader  from 'react-spinners/ScaleLoader'
// import HashLoader from 'react-spinners/HashLoader';
// import ProductList from './ProductList';

// const Api = () => {

// const [data , setData]=useState([])


// //https://apih-24dd2.web.app/api.json

// //https://fakestoreapi.com/products


//  useEffect(()=>{


//     fetch("\Mapi.json")
//      .then(res=>res.json())
//      .then(data=>{
//         //console.log(data)
//          setData(data)

//      },[])
//  })


// // fetch('')
// //   .then(response => {
// //     if (!response.ok) {
// //       throw new Error('Network response was not ok');
// //     }
// //     return response.json();
// //   })
// //   .then(data => console.log(data))
// //   .catch(error => console.error('Fetch error:', error));



// const[mone,setMone]=useState(0)
// const [loding,setLodong]=useState(false)
// const [title,setTitle]=useState([])









// useEffect(()=>{
//     setLodong(true)
//     setTimeout(()=>{setLodong(false)},2500)
// },[])




// // const handleRefresh = () => {
// //   setTimeout(() => {
// //     window.location.reload();
// //   }, 1000); 
// // }



// const [bgColor, setBgColor] = useState('#000000a1');



// const navigate = useNavigate();
// const handleClickB = () => {
//   setTimeout(() => {
//     navigate('/Contact'); 
//   }, 1000); 
// };

// const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm('service_rbp8max', 'template_gajonz9', form.current, {
//       publicKey: 'y1niHeZ9lTaiUtQ0g',
//     })
//     .then(
//       () => {
//         console.log('SUCCESS!');
//       },
//       (error) => {
//         console.log('FAILED...', error.text);
//       },
//     );
//       e.target.reset()
//   };


// const changBackground = ()=>{}


// const [search , setSearch] = useState('')




// const [hesham , setHesham] = useState(false)
// const inputRef = useRef(null)
// const handleClickH = () => {
//   if(inputRef.current){
//   inputRef.current.focus()
// }
// }
// const handleInputClick = (e)=>{
//   console.log(e.target.value.length)
//   if(e.target.value.length >= 11 ){setHesham(true)} else if (e.target.value.length <= 11 ){setHesham(false)}
  
// }

// const [nexta , setNexta] = useState(false)
// const [nextb , setNextb] = useState(true)

// const NextData = ()=>{
//   setNexta(true)
//   setNextb(false)
// }







// const[inputValueName,setInputValueName]= useState ('')
// const[inputValueEmail,setInputValueEmail]= useState ('')
// const[inputValuePhone,setInputValuePhone]= useState ('')
// const handelChangeName = (e)=>{setInputValueName(e.target.value)}
// const handelChangeEmail = (e)=>{setInputValueEmail(e.target.value)}
// const handelChangePhone = (e)=>{setInputValuePhone(e.target.value)}




// const[nextC,setNextC]= useState(false)
// const[nextD,setNextD]= useState(true)
// const nextButtom = ()=>{if(inputValuePhone.length <= 10){setNextC(false)}else{setNextC(true);setNextD(false)};}


// const [lodingB , setLodongB] = useState(false);

// useEffect (()=> {
//   setLodongB(true);
//   setTimeout(()=> {
//     setLodongB(false);
//   } , 2000)
// },[])


//   return (
// <>
// {loding ? 
//  <div className='loding'>
//  <PacmanLoader
//   color="#adff2f"
//   cssOverride={{}}
//   size={77}
//   speedMultiplier={1}
// /> <h1 className='loading000'>Games Loading ...</h1> </div>

//      :

     

//     <div className='Apia'>  



// <div className='navSpase'></div>
// <div className='navSpase'></div>



// <div className={nexta ? 'searthZoneDiv':"nexta"}>
// <input className='searthZone' type="text" placeholder="ابحث عن اللعبة هنا" onChange={(e)=>{setSearch(e.target.value)}}  />
// </div>








//         <div className='tata'>
//       <div className='total'>

        
        
        
    
        
//       <div className={nextb ? 'forminfo':"nexta"}><h1 className='forminfoB'>املأ البيانات ثم اضغط على زر تسجيل البيانات </h1></div>

//       <div className={nextb ? 'formData':"nexta"}>
//       <label>Name</label>
//       <input className='Name getData' type="text" name="Name" value={inputValueName} onChange={handelChangeName} />
//       </div>


//       <div className={nextb ? 'formData':"nexta"}>
//       <label>Phone</label>
//       <input className='Phone getData' type="text" name="Phone"  value={inputValuePhone} onChange={handelChangePhone}  />
//       </div>


//      {/* <div className={nextb ? 'formData':"nexta"}>
//       <label>Email</label>
//       <input className='Email getData' type="email" name="Email"  value={inputValueEmail} onChange={handelChangeEmail} />
//       </div> */}



//       <div className={nextb ? 'formData':"nexta"}>

//         <div className={nextD ? 'next':"nextD"} onClick={nextButtom}> تسجيل البيانات </div>
//         <div className={nextC ? 'lodingB':"nextC"}>
//  <HashLoader color="#adff2f" cssOverride={{}} height={200} 
//       loading margin={4} radius={15} speedMultiplier={2} width={15}   size={105}/>     
//       <h1 className={nextC ? 'nextTEXT':"nextC"}> تم تسجيل البيانات اضغط التالى لاختيار الالعاب </h1> </div>
//         <div className={nextC ? 'next':"nextC"} onClick={NextData}> Next </div>
//        </div>
    
    
    
//         <form ref={form} onSubmit={sendEmail}>

//       {/* <div className={nexta ? 'formData':"nexta"}>
//       <label>Email</label>
//       <input className='Email getData' type="email" name="Email"  value={inputValueEmail} readOnly  />
//       </div> */}

//       <div className={nexta ? 'formData':"nexta"}>
//       <label>Name</label>
//       <input className='Name getData' type="text" name="Name" value={inputValueName} readOnly/>
//       </div>


//       <div className={nexta ? 'formData':"nexta"}>
//       <label>Phone</label>
//       <input className='Phone getData' type="text" name="Phone" value={inputValuePhone} readOnly />
//       </div>





//       <div className={nexta ? 'forminfo':"nexta"}><h1 className='forminfoB'>الان قم باختيار الالعاب اسفل الصفحة ثم اضغط على زر ارسال او حذف </h1></div>
//       <div className={nexta ? 'forminfo':"nexta"}><h1 className='forminfoB'>يمكنك البحث عن لعبة معينة من خلال خانة البحث اعلاه بشرط الا يكون اول حرف كبير </h1></div>

//       <div className={nexta ? 'formData':"nexta"} >
//       <label>Size by gigabyte</label>
//       <input className='Size getData' type="text" name="Size"  value={mone} />
//       </div>

//       <div className={nexta ? 'formData':"nexta"}>
//       <label>Selected Games</label>
//       <textarea id='message' className='MessageProdact getData' name="message" value={title}/>
//       </div> 



// <div className={nexta ? 'formData':"nexta"}>
//       <div className='deleate'> <label className="styled-checkbox"><input type="checkbox"/><span className='checkDelete' onClick={()=>{console.log(setTitle(''),setMone(0))}}>Click to Delete</span></label> </div>
// </div>


// <div className={nexta ? 'formData':"nexta"}>
//       <input className='Send' type="submit" value="Click to Send" onClick={handleClickB} />
//       </div>




// <div className={nexta ? 'carts':"nexta"}>
  





  
//       {data.filter((data)=>{
//         return search.toLocaleLowerCase() === '' ? data : data.title.toLocaleLowerCase().includes(search) 
//       }).map(data=>(
            
//             <ul key={data.title} className='apiData animate__animated animate__backInUp'  style={{ backgroundColor: bgColor }} >
//                 <li ><img loading='lazy' src={data.image} style={{width:"300px"}}  /></li> 
//                 <li>{data.title}</li>
//                 <li>Size : {data.price} G.B</li>
//                 <Label />
//                 <div className='orderNaw'> <label className="styled-checkbox"><input type="checkbox"/><span className="custom-checkbox" onClick={()=>{console.log(setTitle(title+data.title),setMone(data.price+mone))}}></span><span className='checkSend' onClick={()=>{console.log(setTitle(title+data.title),setMone(data.price+mone))}}>Click to add</span></label> </div>
//             </ul>
//     ))}
// </div>









//     </form>

//     </div>
    
    
    
    
    
    
    
    
    
    
    
    
 
//         </div>
//     </div>
//    }   </>

//   )
// }

// export default Api


// // animate__animated animate__bounce animate__fadeInUpBig