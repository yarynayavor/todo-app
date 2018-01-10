import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import TaskList from './TaskList';
import AddNewTask from './AddNewTask';
import {Grid} from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.state = {
            tasks: JSON.parse(localStorage.getItem('tasks')) || [],
            addInputValue: ''
        }

        this.onAddInputHandlerChange = this.onAddInputHandlerChange.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.onTaskClickHandler = this.onTaskClickHandler.bind(this);

    }

    onAddInputHandlerChange(e) {
        this.setState({
            addInputValue: e.target.value
        })
    }

    addNewTask() {
        let {tasks, addInputValue} = this.state;
        if (addInputValue) {
            tasks.push({
                title: addInputValue,
                isDone: false,
                id: uuid()
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
            alert("write something");
        }


        this.setState({
            tasks: JSON.parse(localStorage.getItem('tasks')),
            addInputValue: ''
        })
    }

    deleteTask(_id) {
        let {tasks} = this.state;
        let _tasks = tasks.filter(task => task.id != _id);
        localStorage.setItem('tasks', JSON.stringify(_tasks));

        this.setState({
            tasks: _tasks
        })
    }

    //
    // editTask() {
    //
    // }

    onTaskClickHandler(_id) {
        let {tasks} = this.state;
        tasks.map((task) => {
            if (_id === task.id) {
                task.isDone = !task.isDone;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                console.log(task);
            }
            return task;
        });
        this.setState({tasks});
    }

    render() {
        const {addInputValue, tasks} = this.state;
        return (
            <div className="App">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <Grid>
                    <AddNewTask addInputValue={addInputValue}
                                addNewTask={this.addNewTask}
                                onAddInputHandlerChange={this.onAddInputHandlerChange}/>
                    <TaskList tasks={tasks} onTaskClickHandler={this.onTaskClickHandler} deleteTask={this.deleteTask}/>
                </Grid>
            </div>
        );
    }
}

export default App;

