import React, { useState } from 'react';
import './App.css';
import {get_idocData} from './stub-idoc';


function App() {
  console.log(process.env.REACT_APP_API_URL);
  const [idocNum, setIdocNum] = useState("");

  const handleChange = (event) =>{
    setIdocNum(event.target.value);
  }

  const handleSubmit = (event) =>{
    console.log(get_idocData(idocNum));
    document.getElementById("jsonData").innerHTML = JSON.stringify(get_idocData(idocNum))
    event.preventDefault();
  }

  return (
    <div className="App">
      <div className="idocForm">
        <p>Use IDOC numbers: A00147, A00367, A01054</p>
        <form onSubmit={handleSubmit}>
          <label>
            IDOC number:
            <input type="text" onChange={handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <div id="jsonData"></div>
      </div>
    </div>
  );
}

export default App;