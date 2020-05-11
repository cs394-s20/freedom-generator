import React, { useState } from 'react';
import './App.css';
import {get_idocData} from './stub-idoc';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';


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
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
        <div id="jsonData"></div>
      </div>
    </div>
  );
}

export default App;