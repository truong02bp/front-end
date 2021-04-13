import React, { Component } from 'react'

export default class TaskItem extends Component {

    onDelete = () => {
        var id = this.props.task.id;
        this.props.onDelete(id);
    }
    onUpdate = () => {
        var index = this.props.index;
        this.props.onUpdate(index);
    }
    render() {
        var { task } = this.props;
        return (
            <tr>
                <td className="text-center">
                    <span className="label">{task.id}</span>
                </td> 
                <td className="text-center">
                    <span className="label">{task.name}</span>
                </td>
                <td className="text-center" >
                    <span className={task.status === true ? "badge badge-success" : "badge badge-danger"}>
                        {task.status === true ? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button className="btn-warning btn" onClick={ this.onUpdate }>
                        <span className="fa fa-pencil mr-5"> Sửa</span>
                    </button> &#160;
                    <button className="btn-warning btn" onClick={ this.onDelete } >
                        <span className="fa fa-trash mr-5" > Xoá</span>
                    </button>
                </td>
            </tr>
        )
    }
}
