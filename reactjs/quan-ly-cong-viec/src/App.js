import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import TaskList from './components/TaskList';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [], // id:unique , status , name
            isDisplayTaskForm : false,
            taskEditting : null,
            filter : {
                name :'',
                status : -1
            },
            keyword : null
        }
    }
    componentDidMount(){
        if (localStorage && localStorage.getItem("tasks"))
        {
            var tasks = JSON.parse(localStorage.getItem("tasks"));
            this.setState({
                tasks : tasks
            })
        }
        // localStorage.removeItem("tasks");
    }
    displayTaskForm = () => {
        if (this.state.taskEditting)
        {
            this.setState({
                isDisplayTaskForm : true,
                taskEditting : null
            })
        }
        else {
            this.setState({
                isDisplayTaskForm : !this.state.isDisplayTaskForm,
                taskEditting : null
            })
        }
    }
    onExitTaskForm = () => {
        this.setState({
            isDisplayTaskForm : false
        })
    }
    onSubmit = (data) => {
        var tasks = this.state.tasks;
        if (data.id =='')
        {
            if (tasks.length === 0)
                data.id = 1;
            else
                data.id = tasks[tasks.length-1].id+1;
            tasks.push(data);    
        }
        else 
        {
            let index = this.find(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks : tasks,
            isDisplayTaskForm : false,
        })
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
    onDelete =  (id) => {
        console.log(id);
        var tasks = this.state.tasks;
        var result =  tasks.filter(task => task.id!==id)
        
        this.setState({
            tasks : result,
            isDisplayTaskForm : false
        })
        localStorage.setItem("tasks",JSON.stringify(result));
    }
    onUpdate = (index) => {
        var tasks = this.state.tasks;
        var taskEditting = tasks[index];
        this.setState({
            taskEditting : taskEditting,
            isDisplayTaskForm : true
        });
    }
    find = (id) => {
        var tasks = this.state.tasks;
        for (let i=0;i<tasks.length;i++)
            if (tasks[i].id === id)
                return i;
        return -1;
    }
    onFilter = (name , status) => {
        status = parseInt(status);
        this.setState({
            filter : {
                name : name,
                status : status
            }
        })
    }
    onSearch = (value) => {
        this.setState({
            keyword : value
        })
    }
    render() {
        let isDisplayTaskForm = this.state.isDisplayTaskForm;
        let { tasks , filter , keyword } = this.state;
        if (filter){
            if (filter.name){
                tasks = tasks.filter((task) =>{
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                })
            }
            if (filter.status !== -1){
                let cmp = false;
                if (filter.status === 1)
                    cmp = true;
                tasks = tasks.filter((task) => {
                    return task.status === cmp;
                })    
            }
        }
        if (keyword)
        {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        let elementTaskForm = isDisplayTaskForm === true ? <TaskForm onSubmit = { this.onSubmit } onExitTaskForm={ this.onExitTaskForm } taskEditting = { this.state.taskEditting }/> : "";
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản lý công việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {elementTaskForm}
                    </div>
                    <div className={isDisplayTaskForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button className="btn btn-primary" onClick= { this.displayTaskForm }>
                            <span>+ Thêm công việc</span>
                        </button>
                        <hr />
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <Search onSearch = {this.onSearch} />
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <Sort />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks = { tasks } onDelete = { this.onDelete } onUpdate = { this.onUpdate } onFilter = { this.onFilter }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
