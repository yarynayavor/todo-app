import React from 'react';
import InlineEditTask from './InlineEditTask';
import {
    Button,
    ListGroupItem,
} from 'react-bootstrap';

const ListItem=(
    {   task,
        index,
        onTaskClickHandler,
        deleteTask,
        editTask,
        onEditTaskId,
        onEditTaskValue,
        editTaskChange,
        onSaveEdit})=> {
    return (
        <ListGroupItem  className={"listItem"}
                        key={index}
                        bsStyle={`${task.isDone? 'success':'warning'}`}>
            {task.isDone? <i className="fa fa-check-square-o" aria-hidden="true"></i> : <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>}
            {onEditTaskId===task.id? <InlineEditTask
                onEditTaskValue={onEditTaskValue}
                editTaskChange={editTaskChange}
                onSaveEdit={onSaveEdit}
            /> : task.title}

            <Button onClick={ ()=>  deleteTask(task.id)} bsStyle="danger" className={"listItemBtn deleteBtn"} >
                <i className="fa fa-trash" aria-hidden="true"></i>
            </Button>
            <Button  onClick={ ()=>  editTask(task.id)} bsStyle="info" className={"listItemBtn editBtn"} disabled={task.isDone}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </Button>
            <Button  onClick={  ()=> onTaskClickHandler(task.id)} bsStyle="success" className={"listItemBtn doneBtn"} disabled={task.isDone}>
                <i className="fa fa-check" aria-hidden="true"></i>
            </Button>

        </ListGroupItem>

    )
}

export default ListItem;