import React from 'react';
import Clock from 'react-live-clock';
import {
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Row,
    Col
    } from 'react-bootstrap';

const AddNewTask=({addInputValue,addNewTask,onAddInputHandlerChange})=> {
    return (
        <div>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <Col smOffset={2} sm={10} md={10} className={"mainPage"}>
                                <Clock className={"clockStyle"} format={'HH:mm:ss'} ticking={true} timezone={'Europe/Kiev'} />
                                <FormGroup
                                    controlId="addNewTask"
                                >
                                    <ControlLabel className="ControlLabel">{'What is your main focus for today?  '}</ControlLabel>
                                    <FormControl
                                        type="text"
                                        maxLength={50}
                                        value={addInputValue}
                                        placeholder="enter your task here..."
                                        onChange={onAddInputHandlerChange}
                                    />
                                   <FormControl.Feedback />
                                </FormGroup>
                            </Col>
                        </Col>
        </Row>
            <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <Button onClick={addNewTask} type="submit" className={"buttonAdd"}>+</Button>
                        </Col>
                    </Row>
        </div>
        );
    };

export default AddNewTask;
