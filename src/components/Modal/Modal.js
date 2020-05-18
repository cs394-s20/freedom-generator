import React from 'react';
import './Modal.scss';
import { Button } from '@material-ui/core';

function Modal(props){
    return(
        <div className="modal">
            <div className="modal__close">
                <span className="x" onClick={()=>props.setModalOpen(false)}>x</span>
            </div>
            <p><strong>To:</strong> idoc@idoc.com</p>
            <p><strong>From: </strong> {props.data.emailAddress}</p>
            <p><strong>Shelter: </strong>{props.data.shelter}</p>
            <p><strong>Relationship: </strong>{props.data.relationship}</p>
            <p><strong>Character: </strong>{props.data.character}</p>

            <Button variant="contained" color="secondary">Export</Button>
        </div>
    )
}

export default Modal;