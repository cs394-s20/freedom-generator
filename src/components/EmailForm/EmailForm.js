import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid, Typography, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { white, green, red } from '@material-ui/core/colors';
import Modal from '../Modal/Modal.js';
import '../../styles/styles.scss';

function EmailForm(props) {
  let location = useLocation();
  const defaultValues = {
    relationship: "",

  };
  const { register, handleSubmit, errors, control } = useForm({ defaultValues });
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
  if (modalOpen) {
    console.log(data)
    document.getElementById("overlay").style.opacity = 0.7;
    modal = (<Modal setModalOpen={setModalOpen} data={data} />);
  }
  else if (document.getElementById("overlay")) {
    document.getElementById("overlay").style.opacity = 1;

  }
  
  return (
    <div>
      <div id="overlay">
        <div className="Home">
          <div className="emailFormBg">
            <h1>Freedom Generator</h1>
            <div></div>
            <form class="emailForm" onSubmit={handleSubmit(onSubmit)}>
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
                  <Grid item xs={7}>
                    <Typography>
                      What is the name of the Warden you are addressing?
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      className="input"
                      name="wardenName"
                      size="small"
                      variant="outlined"
                      inputRef={register({
                        required: true,
                      })}
                    />
                  </Grid>
                </Grid>
                {/* <Typography>
                      What is your relationship to this individual?
              </Typography>
                  </Grid>
                  <Grid item>
                    <Controller
                      as={
                        <Select>
                          <MenuItem value="Mother">Mother</MenuItem>
                          <MenuItem value="Father">Father</MenuItem>
                        </Select>
                      }
                      name="relationship"
                      control={control}
                      className="input"
                    />
                  </Grid>
                 */}
                <Grid
                  item
                  container
                  direction="row"
                  spacing={3}
                >
                  <Grid item xs={7}>
                    <Typography>
                      What is you relation to the inmate?
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      name="relation"
                      className="input"
                      multiline={true}
                      inputRef={register({
                        required: true
                      })}
                      rows={2}
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
                  <Grid item xs={7}>
                    <Typography>
                    Please write three reasons why [fill in prisoner name] should be considered for [Release mechanism] (e.g. institutional record, medical condition, family responsibilities). Please write in complete sentences.
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      name="reasonsWhy"
                      className="input"
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
                  <Grid item xs={7}>
                    <Typography>
                      Who will the prisoner be staying with?
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      className="input"
                      name="personName"
                      size="small"
                      variant="outlined"
                      inputRef={register({
                        required: true,
                      })}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  spacing={3}
                >
                  <Grid item xs={7}>
                    <Typography>
                      What is their phone number?
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      className="input"
                      name="personPhone"
                      size="small"
                      variant="outlined"
                      inputRef={register({
                        required: true,
                      })}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  spacing={3}
                >
                  <Grid item xs={7}>
                    <Typography>
                      What is the address of where the inmate will be staying?
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      name="address"
                      className="input"
                      multiline={true}
                      inputRef={register({
                        required: true
                      })}
                      rows={2}
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
                  <Grid item xs={7}>
                    <Typography>
                    Please write 3 sentences on how [fill in prisoner name]’s incarceration has affected family or a community. Also speak on how he/she will contribute positively upon release.
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      name="community"
                      className="input"
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
                  <Grid item xs={7}>
                    <Typography>
                    What email or phonenumber would you like to be contacted at?
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      className="input"
                      name="contactInfo"
                      size="small"
                      variant="outlined"
                      inputRef={register({
                        required: true,
                      })}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  spacing={3}
                >
                  <Grid item xs={7}>
                    <Typography>
                      Will the prisoner recieve support in the form of 
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <div className="checklist">
                      <div className="checklist__item">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <label class="form-check-label" for="defaultCheck1">
                        Assistance complying with parole requirements
                        </label>
                      </div>
                      <div className="checklist__item">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <label class="form-check-label" for="defaultCheck1">
                        Groceries
                        </label>
                      </div>
                      <div className="checklist__item">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <label class="form-check-label" for="defaultCheck1">
                          Job placement
                        </label>
                      </div>
                      <div className="checklist__item">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <label class="form-check-label" for="defaultCheck1">
                          Assistance meeting medical needs
                        </label>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  spacing={3}
                >
                  <Grid item xs={7}>
                    <Typography>
                    For each support please list the contact information for who will provide.
              </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      name="supportContactInfo"
                      className="input"
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
            </form>
          </div>
        </div>

      </div>
      {modal}
    </div >
  );
}

EmailForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default EmailForm;