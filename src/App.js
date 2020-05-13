import React, { useState } from 'react';
import './App.css';
import {get_idocData} from './stub-idoc';
import return_eligibility from './check-eligibility';

function App() {
  const [idocNum, setIdocNum] = useState("");

  const handleChange = (event) =>{
    setIdocNum(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(get_idocData(idocNum));
    document.getElementById("jsonData").innerHTML = JSON.stringify(get_idocData(idocNum))
    //check eligibility
    var eligibility = return_eligibility(idocNum)
    if (eligibility) {
      document.getElementById("eligibility").innerHTML = eligibility
    }
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
      <div id="eligibility"></div>
    </div>
  );
}

export default App;