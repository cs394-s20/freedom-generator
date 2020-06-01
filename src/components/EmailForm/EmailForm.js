import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid, Typography, Switch, Select, MenuItem, Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { white, green, red } from '@material-ui/core/colors';
import Modal from '../Modal/Modal.js';
import '../../styles/styles.scss';
import Tabs from '../Tabs/Tabs';


function EmailForm(props) {
  let location = useLocation();
  console.log("this")
  console.log(location);
  const defaultValues = {
    relationship: "",

  };
  const { register, handleSubmit, errors, control } = useForm({ defaultValues });
  const [modalOpen, setModalOpen] = useState(false); // state that checks if modal is open or not
  const [data, setData] = useState(null);

  const onSubmit = data => {
    data.idocData = location.state.computeData;
    data.statuteNumber = location.state.statuteNumber;

    // modal for email preview
    setData(data);
    setModalOpen(true);
    console.log(data);
  }

  // create modal component
  let modal;
  if (modalOpen) {
    console.log(data)
    document.getElementById("overlay").style.opacity = 0.7;
    document.getElementById("overlay").style.pointerEvents = "none";
    modal = (<Modal setModalOpen={setModalOpen} data={data} />);
  }
  else if (document.getElementById("overlay")) {
    document.getElementById("overlay").style.opacity = 1;
    document.getElementById("overlay").style.pointerEvents = "auto";


  }

  var nameArr = location.state.computeData.name.split(',');
  var inmateName = nameArr[1] + " " + nameArr[0];

  return (
    <div>
      <div id="overlay">
        <Tabs computeData={location.state.computeData} />
        <div className="Email">
          <div>
            <h1>Step 3 of 3</h1>
            <h2>Fill in the form below to generate an email petitioning for early release.</h2>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction="row" alignItems="center">
                <Grid><Typography>Dear&nbsp;</Typography></Grid>
                <Grid><TextField name="wardenName" placeholder="warden name" inputRef={register({ required: true })} /></Grid>,
              </Grid>
              <br />
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                {inmateName} ({location.state.computeData.idocNumber}) is my&nbsp;
                <TextField style={{ marginLeft: '10px' }} name="relation" placeholder="relation to writer" inputRef={register({ required: true })} />
                and is eligible for transfer to home detention pursuant to {location.state.statuteNumber}.
              </Grid>
              <br />
              <Grid container alignItems="center" textAlign="left" justify="flex-start" style={{ lineHeight: 2 }}>
                I am writing to urge you to place {inmateName} on home detention as soon as possible.&nbsp;
                {inmateName} is an ideal candidate for home detention because &nbsp;
                <TextField name="reason1" style={{ width: 300 }} placeholder="first reason for release" inputRef={register({ required: true })} />,&nbsp;
                <TextField name="reason2" style={{ width: 300 }} placeholder="second reason for release" inputRef={register({ required: true })} />, and &nbsp;
                <TextField name="reason3" style={{ width: 300 }} placeholder="third reason for release" inputRef={register({ required: true })} />.

              </Grid>
              <Grid><br /></Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                If {inmateName} is transferred to home detention, they can live with&nbsp;
                <TextField name="liveWith" placeholder="name" inputRef={register({ required: true })} />,&nbsp;
                <TextField name="relationLiveWith" placeholder="relation to inmate" inputRef={register({ required: true })} />,&nbsp;
                <TextField name="phoneLiveWith" placeholder="phone number" inputRef={register({ required: true })} />,&nbsp;
                <TextField name="addressLiveWith" placeholder="address" inputRef={register({ required: true })} />.&nbsp;
              </Grid>
              <br />

              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                {inmateName} will receive support in the form of
              </Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                <Checkbox name="parole" inputRef={register} color="primary" />
                <label style={{ fontWeight: "bold" }}>Assistance complying with parole requirements</label>
              </Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                <Checkbox name="groceries" inputRef={register} color="primary" />
                <label style={{ fontWeight: "bold" }}>Groceries</label>
              </Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                <Checkbox name="job" inputRef={register} color="primary" />
                <label style={{ fontWeight: "bold" }}>Job placement</label>
              </Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                <Checkbox name="medical" inputRef={register} color="primary" />
                <label style={{ fontWeight: "bold" }}>Assistance meeting medical needs</label>
              </Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                from the following individuals / entities:&nbsp; <TextField name="supportAndContact" style={{ width: 300 }} placeholder="name(s) and contact information" inputRef={register({ required: true })} />.
              </Grid>
              <Grid><br /></Grid>
              <Grid container alignItems="center" justify="center" style={{ lineHeight: 2 }}>
                <TextField name="threeSentences" style={{ width: 600 }} multiline inputRef={register({ required: true })} rows={4} variant="outlined" placeholder="Three Sentences here regarding how prisoner’s incarceration has affected family members and community and why/how prisoner will contribute positively to the community upon release. " />
              </Grid>

              <Grid><br /></Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                If I can provide you with any further information about this request for transfer to home detention, please contact me at&nbsp;
                <TextField name="email" placeholder="email" inputRef={register({ required: true })} />&nbsp;or&nbsp;
                <TextField name="phone" placeholder="phone number" inputRef={register({ required: true })} />.
              </Grid>
              <br />
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2 }}>
                I will contact your office to set a time to discuss this request within the next week.
              </Grid>
              <Grid container alignItems="center" justify="flex-start"><br />Thank you for your consideration. </Grid>
              <Grid container alignItems="center" justify="flex-start"><TextField name="submitter" placeholder="name of submitter" inputRef={register({ required: true })} /></Grid>
              <div className="marginTop">
                <Button className="button" type="submit" variant="contained" color="primary">Preview Email</Button>
              </div>
            </form>
          </div>
        </div>

      </div>
      {modal}
    </div>
  );
}

EmailForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default EmailForm;