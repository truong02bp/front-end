import React, { Component } from 'react'
import TaskItem from './TaskItem';
import HeadTable from './HeadTable';
export default class TaskList extends Component {
    
    
    render() {
        var tasks = this.props.tasks;
        var elementTask = tasks.map((task , index) => {
            return <TaskItem key = {task.id} index = { index } task = {task} onDelete = { this.props.onDelete } onUpdate = { this.props.onUpdate }/>
        })
        return (
            <table>
                <HeadTable onFilter = { this.props.onFilter }/>
            <tbody>
                { elementTask }
            </tbody>
            </table>
        )
    }
}
