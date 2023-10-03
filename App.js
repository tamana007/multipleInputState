import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[people,setPeople]=useState([{Name:"ali",Password:"1232",email:"ali@gmail.com"}]);
  // const list=[{Name:"ali",Password:"1232",email:"ali@gmail.com"}]
  // setPeople(list);

  function inputFunc(e){
// setPeople({...people},{e.target.Name:e.target.value})
setPeople({...people,[e.target.Name]:e.target.value})
  }
  return (
    <form>
      <input Name='Name' value={people} onChange={inputFunc} />
      <input Name='Password' value={people} onChange={inputFunc}/>
      <input Name='email' value={people} onChange={inputFunc} />


    </form>
  );
}

export default App;
