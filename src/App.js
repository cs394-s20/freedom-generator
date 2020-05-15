import React, { useState } from 'react';
import './App.css';
import { get_idocData } from './stub-idoc';
import return_eligibility from './check-eligibility';
import { useForm } from 'react-hook-form';
import { TextField, Button, Checkbox, Grid, FormControlLabel } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { green, red } from '@material-ui/core/colors';
import { white } from 'color-name';
import ReactTooltip from "react-tooltip";

function App() {
  console.log(process.env.REACT_APP_API_URL);
  // const [idocNum, setIdocNum] = useState("");

  // Select icon based on return (innocent until proven guilty, unless they were already guilty..?)
  const [passed, setPassed] = useState([]);
  // Add the id to the array of passed items if it doesn't exist but if it does exist remove it
  const handleCriteriaChange = (id) => {
    let result = passed.includes(id) ? passed.filter(test => test != id) : [...passed, id]
    setPassed(result)
    // change <CheckCircleIcon /> to <CloseRoundedIcon /> at "id"
  }


  const { register, handleSubmit, errors } = useForm();

  // callback function for check eligibility.
  const [submitted, setSubmitted] = useState('');

  const onSubmit = data => {
    console.log("data:");
    console.log(data);
    setSubmitted('True');
    // handleCriteriaChange(101);
    // data.preventDefault();
    var idocNum = data["IDOC_Number"];
    var medical_furlough = data["medical_furlough"];
    console.log(get_idocData(idocNum));
    console.log(medical_furlough)
    //check eligibility
    var eligibility = return_eligibility(idocNum, medical_furlough)
    setPassed(eligibility)
    if (eligibility) {
      document.getElementById("eligibility").innerHTML = eligibility
    }
  };


  let popup = (
    <React.Fragment>
      <div className="infoIconWrapper">
        Eligible for medical furlough?
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html" target="_blank" data-tip data-for='popup'> <InfoIcon className="infoIcon" /> </a>
      </div>
      <ReactTooltip id='popup' type='error'>
        <span>Click to see who qualifies as eligible.</span>
      </ReactTooltip>
    </React.Fragment>
  )

  return (
    <div className="App">
      <div className="idocForm">

        <form onSubmit={handleSubmit(onSubmit)}>

          <Grid container justify="center">
            <Grid item>
              <FormControlLabel
                control={<TextField name="IDOC_Number" inputRef={register({ required: true })} />}
                label="IDOC Number &nbsp;"
                labelPlacement="start"
              />
              {errors.IDOC_Number && <p className="error">IDOC Number is required.</p>}
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item>
              <FormControlLabel
                control={<Checkbox name="medical_furlough" inputRef={register} inputProps={{ 'aria-label': 'Checkbox A' }} />}
                label={popup}
                labelPlacement="start"
              />
            </Grid>
          </Grid>


          
          
          <Button type="submit" variant="contained" >Submit</Button>
          <br />
          <br />
          <br />

          <div id="eligibility"></div>
          {submitted &&
            <div className="criteria">
              <div className="criterion">Medical furlough
              
                {passed.includes(" Medical Furlough") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="criterion">Release for home detention
                {passed.includes(" Home Detention") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="criterion">Electric Monitoring
                {passed.includes(" Electric Monitoring") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
            </div>}

        </form>
      </div>
    </div>
  );
}

export default App;