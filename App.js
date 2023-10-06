import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useEffect, useRef, useState } from 'react';

function App() {

  //:::::::::::::::::::::::::::::Custom API:::::::::::::::::::::::::


  //:::::::::::::::::::::::::::UserRef:::::::::::::::::::::::::::::

  // const refContainer=useRef('');
  // const[value,setValue]=useState('0');

  // function handlBTN(){
  //   refContainer.current++;
  //   setValue(refContainer.current);
  // }
  // return(
  //   <>
  //   <p>testing mutating or persisting btw re-renders:{refContainer.current}</p>
  //   <h4>{value}</h4>
  //   <button onClick={handlBTN}>Click here</button>
  //   </>
  // )
//::::::::::::::::::::::::::::::::::::::::::::::::::
//   const refcontainer=useRef('');

//   function inputfunc(e){
// // console.log(e.target.value);
// refcontainer.current.value=' ';
// refcontainer.current.focus();
//   }

//   // const[people,setPeople]=useState([{Name:"ali",Password:"1232",email:"ali@gmail.com"}]);
//   const [shipping,setShipping]=useState(false);
//   const [program,setprogram]=useState("programs")
//   // const list=[{Name:"ali",Password:"1232",email:"ali@gmail.com"}]
//   // setPeople(list);
  
//   //:::::::::::::::::::::::::::::::::::::::::::::::Reverse Algorithm:::::::::::::::::::::::::::
//   // function resverseStr(){
//   //   const str="Ali";
//   //   const reserve=str.split([]).reverse().join();
//   //   return reserve;


//   // }
//   const list=["Java","React","Angular"];

//   function dropfunc(e){
//     e.preventDefault();
//     setprogram(e.target.value);
//   }
  
  
//   useEffect(()=>{
//     console.log(program);

//   },[program])

//   function inputFunc(e){
//     // e.preventDefault();
//     setShipping(e.target.checked);
// // setPeople({...people},{e.target.Name:e.target.value})
// // setPeople({...people,[e.target.Name]:e.target.value})
// // setPeople(e.target.value);
// console.log(shipping);

//   }
//   return (
//     // <form onSubmit={inputFunc}>
//     <>
//     <input type='text' ref={refcontainer}/>
//       <label>Free Shipping</label>
//       <input name='name'  type='checkbox' checked={shipping} onChange={inputFunc}/>
//       <label htmlFor='Shipping' name='shipement'>shapement</label>
//       {/* <input name='email' value={people.email}  /> */}
//       <button type='submit' onClick={inputfunc}>Submit</button>


    //   <select name='framework' onChange={dropfunc}>
    //         <option value=" ">select a program</option>
    //         {list.map((item)=>{
    //       return(
    //         <option value={item}>{item}</option>
            
    //       )
    //     })}
    //   </select>


    // {/* // </form> */}
    // </>
  // );
  return(
    <><Navbar/></>
  )
}

export default App;
