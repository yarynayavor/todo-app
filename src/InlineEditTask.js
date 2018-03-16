import React from 'react';
import {
    Button,
    FormGroup,
    FormControl} from 'react-bootstrap';

const InlineEditTask=(
    {   onEditTaskValue='',
        editTaskChange=()=>{},
        onSaveEdit=()=>{}
    })=> {
    return(
        <FormGroup controlId="editTask" className={"form-edit"}>
            <FormControl
                type="text"
                value={onEditTaskValue}
                placeholder="Edit your task..."
                onChange={editTaskChange}
            />
            <Button onClick={onSaveEdit} type="submit" bsStyle="info" className={"buttonEditSave"}>
                <i className="fa fa-save" aria-hidden="true"></i>
            </Button>
        </FormGroup>

    )
}

export default InlineEditTask;