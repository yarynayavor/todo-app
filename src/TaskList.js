import React from 'react';
import {
    Button,
    Row,
    Col,
    ListGroup,
    ListGroupItem} from 'react-bootstrap';


        const TaskList=({tasks,onTaskClickHandler,deleteTask})=> {

            return (
                <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <ListGroup className={"listGroup"}>
                                {tasks.map( (task,index)=>
                                    <ListGroupItem  className={"listItem"} key={index} bsStyle={`${task.isDone? 'success':'warning'}`}>
                                            {task.isDone? <i className="fa fa-check-square-o" aria-hidden="true"></i> : <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>}

                                            {task.title}

                                            <Button onClick={ ()=>  deleteTask(task.id)} bsStyle="danger" className={"listItemBtn deleteBtn"} >
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </Button>
                                            <Button bsStyle="info" className={"listItemBtn editBtn"} disabled={task.isDone}>
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </Button>
                                            <Button  onClick={  ()=> onTaskClickHandler(task.id)} bsStyle="success" className={"listItemBtn doneBtn"} disabled={task.isDone}>
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                            </Button>

                                        </ListGroupItem>)}
                            </ListGroup>
                        </Col>
                    </Row>
            );
    };

    export default TaskList;