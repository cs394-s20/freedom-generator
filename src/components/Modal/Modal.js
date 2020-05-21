import React, { useState } from 'react';
import './Modal.scss';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function Modal(props){
    const [ preview, setPreview] = useState(false);

    let emailContent = "Dear {warden variable} \n\n {prisoner name}, " + props.data.idocData["IDOC_Number"] + ", is my " + props.data.relationship + 
                       ", and is eligible for transfer to home detention pursuant to {statutory provision variable}." + 
                       "I am writing to urge you to place " + "{prisoner name}" + " on home detention as soon as possible." + 
                       " {prisoner name} " + " is an ideal candidate for home detention because " + " {three reasons} " + " If " +
                       " {prisoner name} " + " is transferred to home detention, s/he can live with " + " {user's name} " + props.data.relationship + 
                       " {phone number and address}. " + "{prisoner name} " + "will receive support in the form of " + "{balabala}" + 
                       " from the following individuals/entities " + " {list support and contact information}. "


    return(
        // <div className="modal">
        //     <div className="modal__close">
        //         <span className="x" onClick={()=>props.setModalOpen(false)}>x</span>
        //     </div>
        //     <p><strong>To:</strong> idoc@idoc.com</p>
        //     <p><strong>From: </strong> {props.data.emailAddress}</p>
        //     <p><strong>Shelter: </strong>{props.data.shelter}</p>
        //     <p><strong>Relationship: </strong>{props.data.relationship}</p>
        //     <p><strong>Character: </strong>{props.data.character}</p>
        //     <br/>
        //     <br/>
        //     <Button variant="contained" color="secondary" className="export-button">Export</Button>
        // </div>

        <div className="modal">
            <div className="modal__close">
                <span className="x" onClick={()=>props.setModalOpen(false)}>x</span>
            </div>
            <TextField
                id="previewEmailTextField"
                multiline
                variant="outlined"
                rows={13}
                defaultValue={emailContent}
                fullWidth
            />
            <Button variant="contained" color="secondary" className="export-button">Export</Button>
        </div>
    )
}

export default Modal;