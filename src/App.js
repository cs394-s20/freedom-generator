import React, { useState } from 'react';
import './App.css';
import {get_idocData} from './stub-idoc';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { white } from 'color-name';

function App() {
  console.log(process.env.REACT_APP_API_URL);
  const [idocNum, setIdocNum] = useState("");


  const { register, handleSubmit, errors } = useForm();
  // callback function for check eligibility.
  const onSubmit = data => {
    console.log(data);
  };

  const handleChange = (event) =>{
    setIdocNum(event.target.value);
  }

  // const handleSubmit = (event) =>{
  //   console.log(get_idocData(idocNum));
  //   document.getElementById("jsonData").innerHTML = JSON.stringify(get_idocData(idocNum))
  //   //event.preventDefault();
  // }

  return (
    <div className="App">
      <div className="idocForm">
        <p>Use IDOC numbers: A00147, A00367, A01054</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="IDOC Number" name="IDOC_Number" inputRef={register({required: true})} />
          { errors.IDOC_Number && <p>IDOC Number is required.</p> }
          <br />
          <br />
          <div className="criteria">
            <h5>Medical Furlough</h5>
            <h5>Over 55 years old</h5>
            <h5>12 months or less left on sentence</h5>
            <h5>Served 25% of prison term</h5>
            <h5>Convicted of class 2, 3, or 4 felony offense</h5>
            <h5>Not convicted of exclusive event</h5>
          </div>
          <Button type="submit" variant="contained" >Submit</Button>
        </form>
        <div id="jsonData"></div>
      </div>
    </div>
  );
}

export default App;