import React, { useState } from 'react';
import './App.css';
import {get_idocData} from './Components/01_Atoms/stub-idoc';
import {return_eligibility} from './Components/01_Atoms/check-eligibility;'

function App() {
  const [idocNum, setIdocNum] = useState("");

  const handleChange = (event) =>{
    setIdocNum(event.target.value);
  }

  const handleSubmit = (event) =>{
    console.log(get_idocData(idocNum));
    document.getElementById("jsonData").innerHTML = JSON.stringify(get_idocData(idocNum))
    event.preventDefault();
  }

  const printEligibility = (idocNum) =>{
    if (handleSubmit)
      return_eligibility(idocNum)
  }

  return (
    <div className="App">
      <p>Use IDOC numbers: A00147, A00367, A01054</p>
      <form onSubmit={handleSubmit}>
        <label>
          IDOC number:
          <input type="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <div id="jsonData"></div>
      <printEligibility></printEligibility>
    </div>
  );
}

export default App;