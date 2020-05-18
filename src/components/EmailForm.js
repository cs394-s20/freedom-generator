import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid, Typography, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { white, green, red } from '@material-ui/core/colors';
import Modal from './Modal/Modal.js'

const styles = {
  root: {
    background: "white",
  },
  input: {
    padding:-10
  }
};

function EmailForm(props) {
  let location = useLocation();
  const defaultValues = {
    relationship: "",

  };
  const { register, handleSubmit, errors, control } = useForm({defaultValues});
  const { classes } = props;
  const [modalOpen, setModalOpen] = useState(false); // state that checks if modal is open or not
  const [data, setData] = useState(null);

  const onSubmit = data => {
    data.idocData = location.state;

    // modal for email preview
    setData(data);
    setModalOpen(true);

    console.log(data);
  }

  // create modal component
  let modal;
  if (modalOpen){
    console.log(data)
    modal = (<Modal setModalOpen={setModalOpen} data={data}/>);
  }

  return (
    <div className="App">
      <div className="emailForm">
        <h1>Freedom Generator</h1>
        <div></div>
        <form class="formEmail" onSubmit={handleSubmit(onSubmit)}>
          <h3>Email Form</h3>
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
                  className={classes.root}
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
                  InputProps={{
                    className: classes.input
                    //style:{ background: 'black' }
                  }}
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
                  className={classes.root}
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
                  className={classes.root}
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
                  className={classes.root}
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
          <Button type="submit" variant="contained" color="primary">Preview Email</Button>
          {modal}
        </form>
      </div>
    </div>
  );
}

EmailForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmailForm);