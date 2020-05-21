import React, { useState, useEffect } from 'react';
import return_eligibility from '../check-eligibility';
import { useForm } from 'react-hook-form';
import { TextField, Button, Checkbox, Grid, FormControlLabel, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { green, red } from '@material-ui/core/colors';
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';
import {get_idocData} from '../stub-idoc';
import ReleaseMechanism from './ReleaseMechanism';
import Mechanisms from '../Mechanisms';

export default function Home() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [computeData, setComputeData] = useState(null);

  var mechanisms = <div></div>;
  if (computeData != null) {
    mechanisms = computeData.data.map((rm) => {
      
      return (
        <ReleaseMechanism isPassed={rm.passed} conditions={rm.conditions} description={rm.text}/>
      )
    });
  }

  const onSubmit = formData => {
    setLoading(true);
    setComputeData(null);
    get_idocData(formData["IDOC_Number"]).then(response => {
      response.text().then(t => {
        var data = JSON.parse(t);
        data.highRisk = formData["medical_furlough"];
        setComputeData({data: Mechanisms.compute(data)});
        setLoading(false);
      });
    });
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
                control={<TextField InputProps={{style:{ background: 'white', paddingLeft:10 }}}name="IDOC_Number" inputRef={register({ required: true })} />}
                label="IDOC Number: &nbsp;"
                labelPlacement="start"
                Props={{style:{ color:"white" }}}
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
          <Button type="submit" variant="contained" onClick={() => setLoading(true)}>Import Data</Button>
          <br />
          <br />
            {loading && <div id = "Loading">Loading...</div>}
          <br />
          <br />
            {computeData!=null && 
              mechanisms
            }
            {computeData!=null &&
              <div>
                <Link to="/email">
                  <Button type="submit" variant="contained" color="primary">Draft Petition</Button>
                </Link>
              </div>
            }
        </form>
      </div>
    </div>
  );
}