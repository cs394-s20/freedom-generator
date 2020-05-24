import React from 'react';
import './Modal.scss';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function Modal(props){
    var parole = props.data.parole ? "Assistance complying with parole requirements" : null;
    var groceries = props.data.groceries ? "Groceries" : null;
    var job = props.data.job ? "Job Placement" : null;
    var medical = props.data.medical ? "Assistance meeting medical needs" : null;
    var checkboxContent = "";
    checkboxContent += parole + (props.data.groceries ? ", Groceries" : "") + (props.data.job ? ", Job Placement" : "") + (props.data.medical ? ", Assistance meeting medical needs" : "");

    let emailContent = "Dear " + props.data.wardenName + "\n\n" +  props.data.idocData.name + ", " + props.data.idocData["idocNumber"] + ", is my " + props.data.relation + 
    ", and is eligible for transfer to home detention pursuant to " + props.data.statutory + "." + 
    " I am writing to urge you to place " + props.data.idocData.name + " on home detention as soon as possible. " + 
    props.data.idocData.name + " is an ideal candidate for home detention because " + props.data.reason1 + ", " + props.data.reason2 + ", " + props.data.reason3 + "." + "\n\n If " +
    props.data.idocData.name + " is transferred to home detention, s/he can live with " + props.data.liveWith + ", " + props.data.relationLiveWith + ", " +
    props.data.phoneLiveWith + ", " + props.data.addressLiveWith + ". " + props.data.idocData.name + " will receive support in the form of " + checkboxContent +
    " from the following individuals/entities " + props.data.supportAndContact + ". \n\n" + props.data.threeSentences +
    "\n\nIf I can provide you with any further information about this request for transfer to home detention, please contact me at " +
    props.data.email + " or " + props.data.phone + ". I will contact your office to set a time to discuss this request within the next week. \n\n" +
    "Thank you for your consideration. \n\n" + props.data.submitter;


    return(
        <div className="modal">
            <div className="modal__close">
                <span className="x" onClick={()=>props.setModalOpen(false)}>x</span>
            </div>
            <div className="title">Email Draft</div>
            <TextField
                id="previewEmailTextField"
                multiline
                variant="outlined"
                rows={13}
                defaultValue={emailContent}
                fullWidth
            />
            <br />
            <br />
            <Button variant="contained" color="secondary" className="export-button">Export</Button>
        </div>
    )
}

export default Modal;