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

function EmailForm(props) {
  let location = useLocation();
  console.log(location);
  const defaultValues = {
    relationship: "",

  };
  const { register, handleSubmit, errors, control } = useForm({ defaultValues });
  const [modalOpen, setModalOpen] = useState(false); // state that checks if modal is open or not
  const [data, setData] = useState(null);

  const onSubmit = data => {
    data.idocData = location.state.computeData;

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
              {/* <Grid
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
                <Grid
                  item
                  container
                  direction="row"
                  spacing={3}
                >
                  <Grid item xs={7}>
                    <Typography>
                      What is your relation to the inmate? (Eg. mother, father, sister, etc.)
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
                      Please write three reasons why the inmate should be considered for release (e.g. institutional record, medical condition, family responsibilities). Please write in complete sentences.
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
                      Who will the inmate be staying with?
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
                      Please write 3 sentences on how the inmate’s incarceration has affected their family or community. Please explain how he/she will contribute positively upon release.
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
                      What email or phone number would you like to be contacted at?
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
                      Please select which of the following areas of support will be provided to the inmate upon his/her release.
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
                      Please list the name and contact information for the people who will provide the above support. (Eg. John Doe, johndoe@gmail.com; Jane Doe, 555-555-5555)
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
              </Grid> */}
              
              <br />
              <br />
              <Grid container direction="row" alignItems="center">
                <Grid><Typography>Dear&nbsp;</Typography></Grid>
                <Grid><TextField name="wardenName" placeholder="Warden Name" inputRef={register({required: true})} /></Grid>
              </Grid>
              <br />
              <br />
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2}}>
                {location.state.computeData.name}, {location.state.computeData.idocNumber}, is my&nbsp;
                <TextField name="relation" placeholder="relation to writer" inputRef={register({required: true})} />
                and is eligible for transfer to home detention pursuant to&nbsp;
                <TextField name="statutory" placeholder="statutory provision" inputRef={register({required: true})} />
                I am writing to urge you to place {location.state.computeData.name} on home detention as soon as possible.&nbsp;
                {location.state.computeData.name} is an ideal candidate for home detention because &nbsp;
                <TextField name="reason1" style={{width: 300}} placeholder="reasons related to institutional record" inputRef={register({required: true})}/>,&nbsp;
                <TextField name="reason2" style={{width: 300}} placeholder="reasons related to medical condition" inputRef={register({required: true})}/>,&nbsp;
                <TextField name="reason3" style={{width: 300}} placeholder="reasons related to family responsibilities" inputRef={register({required: true})}/>.
                
              </Grid>
              <Grid><br /></Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2}}>
                If {location.state.computeData.name} is transferred to home detention, s/he can live with&nbsp;
                <TextField name="liveWith" placeholder="name" inputRef={register({required: true})}/>,&nbsp;
                <TextField name="relationLiveWith" placeholder="relation to prisoner" inputRef={register({required: true})}/>,&nbsp;
                <TextField name="phoneLiveWith" placeholder="Phone Number" inputRef={register({required: true})}/>,&nbsp;
                <TextField name="addressLiveWith" placeholder="Address" inputRef={register({required: true})}/>.&nbsp;
                {location.state.computeData.name} will receive support in the form of
                <label style={{fontWeight: "bold"}}>Assistance complying with parole requirements</label>
                <Checkbox name="parole" inputRef={register} />
                <label style={{fontWeight: "bold"}}>Groceries</label>
                <Checkbox name="groceries" inputRef={register} />
                <label style={{fontWeight: "bold"}}>Job placement</label>
                <Checkbox name="job" inputRef={register} />
                <label style={{fontWeight: "bold"}}>Assistance meeting medical needs</label>
                <Checkbox name="medical" inputRef={register} />
                from the following individuals/entities&nbsp; <TextField name="supportAndContact" style={{width: 300}} placeholder="Support and Contact Information" inputRef={register({required: true})}/>.
              </Grid>
              
              <Grid><br /></Grid>
              <Grid container alignItems="center" justify="center" style={{ lineHeight: 2}}>
                <TextField name="threeSentences" style={{width:600}} multiline inputRef={register({required: true})} rows={4} variant="outlined" placeholder="Three Sentences here regarding how prisoner’s incarceration has affected family members and community and why/how prisoner will contribute positively to the community upon release. "/>
              </Grid>

              <Grid><br /></Grid>
              <Grid container alignItems="center" justify="flex-start" style={{ lineHeight: 2}}>
                If I can provide you with any further information about this request for transfer to home detention, please contact me at&nbsp;
                <TextField name="email" placeholder="Email" inputRef={register({required: true})}/>&nbsp;or&nbsp;
                <TextField name="phone" placeholder="Phone Number" inputRef={register({required: true})}/>
                I will contact your office to set a time to discuss this request within the next week. 
              </Grid>

              <Grid container alignItems="center" justify="flex-start"><br />Thank you for your consideration. </Grid>
              
              <Grid><br /></Grid>
              <Grid container alignItems="center" justify="flex-start"><TextField name="submitter" placeholder="Name of Submitter" inputRef={register({required: true})}/></Grid>
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