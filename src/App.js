import React, { useState } from 'react';
import './App.css';
import { get_idocData } from './stub-idoc';
import return_eligibility from './check-eligibility';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Checkbox, Grid, FormControlLabel, Typography, Select, MenuItem } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { green, red } from '@material-ui/core/colors';
import { white } from 'color-name';
import ReactTooltip from "react-tooltip";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Home() {
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
      if (eligibility.includes(" Home Detention" || eligibility.includes(" Electric Monitoring") || eligibility.includes(" Medical Furlough"))) {
        document.getElementById("eligibility").innerHTML = eligibility.split(' ').slice(0, 2) + ' is eligible to petition for release.';
      }
      else { document.getElementById("eligibility").innerHTML = eligibility.split(' ').slice(0, 2) + ' is not eligible to petition for release.' }
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
        <h1>Freedom Generator</h1>
        <h5>Enter IDOC number to check eligibility for release</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container justify="center">
            <Grid item>
              <FormControlLabel
                control={<TextField name="IDOC_Number" inputRef={register({ required: true })} />}
                label="IDOC Number: &nbsp;"
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
          <Button type="submit" variant="contained" >Import Data</Button>
          <br />
          <br />
          <br />
          {submitted &&
            <div className="criteria">
              <div className="criterion">Medical furlough

                {passed.includes(" Medical Furlough") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="criterion">Release for home detention
                {passed.includes(" Home Detention") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="sub-criterion">Over 55 years of age
                {passed.includes(" Over 55 years of age") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="sub-criterion">Less than 12 months left on sentence
                {passed.includes(" Less than 12 months left on sentence") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="sub-criterion">Served at least 25% of prison term
                {passed.includes(" Served at least 25% of prison term") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="sub-criterion">Not an excluded offense
                {passed.includes(" Not a excluded offense") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="criterion">Electronic Monitoring
                {passed.includes(" Electric Monitoring") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="sub-criterion">Convicted of Class 2, 3, or 4 felony offense
                {passed.includes(" Convicted of Class 2, 3, or 4 felony offense") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>
              <div className="sub-criterion">Not an excluded offense
                {passed.includes(" Not an excluded offense Electronic") ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
              </div>

            </div>}
        </form>
        {/* add by zhu, will be deleted */}
        {/* or window.location.href */}
        <Button onClick={() => { window.open('/email') }}>test Button</Button>
        <div id="eligibility"></div>
      </div>
    </div>
  );
}


function EmailForm() {
  const defaultValues = {
    relationship: "",

  };
  const { register, handleSubmit, errors, control } = useForm({defaultValues});
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="App">
      <div className="idocForm">
        <h1>Freedom Generator</h1>
        <h5>Email Form</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            justify="flex-start"
            direction="column"
            alignItems="flex-start"
            spacing={3}>
            <Grid
              item
              container
              direction="row"
              spacing={3}
            >
              <Grid item xs={6}>
                <Typography>
                  Email Address:
              </Typography>
              </Grid>
              <Grid item>
                <TextField
                  name="emailAddress"
                  size="small"
                  variant="outlined"
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid",
                    }
                  })}
                />
                {errors.emailAddress && errors.emailAddress.type === "required" && <p className="error">Email address is required.</p>}
                {errors.emailAddress && errors.emailAddress.type === "pattern" && <p className="error">Invalid Email Address.</p>}
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              spacing={3}
            >
              <Grid item xs={6}>
                <Typography>
                  What shelter will you provide for this individual?
              </Typography>
              </Grid>
              <Grid item>
                <TextField
                  name="shelter"
                  multiline={true}
                  inputRef={register({
                    required: true
                  })}
                  rows={4}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              spacing={3}
            >
              <Grid item xs={6}>
                <Typography>
                  What is your relationship to this individual?
              </Typography>
              </Grid>
              <Grid item>
                <Controller 
                  as = {
                  <Select>
                    <MenuItem value="Mother">Mother</MenuItem>
                    <MenuItem value="Father">Father</MenuItem>
                  </Select>
                  }
                  name="relationship"
                  control={control}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              spacing={3}
            >
              <Grid item xs={6}>
                <Typography>
                  What can you say to vouch for this person's character?
              </Typography>
              </Grid>
              <Grid item>
                <TextField
                  name="character"
                  multiline={true}
                  inputRef={register({
                    required: true
                  })}
                  rows={4}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <br />
          <br />
          <Button type="submit" variant="contained" >Preview Email</Button>
        </form>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/email" component={EmailForm} />
      </Switch>
    </Router>
  );
}

export default App;