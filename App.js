import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[people,setPeople]=useState([{Name:"ali",Password:"1232",email:"ali@gmail.com"}]);
  // const list=[{Name:"ali",Password:"1232",email:"ali@gmail.com"}]
  // setPeople(list);

  function inputFunc(e){
    e.preventDefault();
// setPeople({...people},{e.target.Name:e.target.value})
setPeople({...people,[e.target.Name]:e.target.value})
console.log(people);
// setPeople(e.target.value);
  }
  return (
    <form onSubmit={inputFunc}>
      <input name='name' value={people.Name} />
      <input name='password' value={people.Password} />
      <input name='email' value={people.email}  />
      <button type='submit'>Submit</button>


    </form>
  );
}

export default App;
