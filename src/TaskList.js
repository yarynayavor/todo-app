import React from 'react';
import ListItem from './ListItem';
import {
    Row,
    Col,
    ListGroup,
 } from 'react-bootstrap';

        const TaskList=(props)=> {
            return (
                <Row className="show-grid">
                        <Col sm={12} md={12} >
                            <ListGroup className={"listGroup"}>
                                {props.tasks.map( (task,index)=> <ListItem task={task} index={index} {...props}/>)}
                            </ListGroup>
                        </Col>
                    </Row>
            );
    };

    export default TaskList;