import React, { Component } from 'react'

export default class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            name : '',
            status : false
        }
    }
    componentWillMount(){
        let task = this.props.taskEditting;
        if (task != null)
        {
            this.setState({
                id : task.id,
                name : task.name,
                status : task.status
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.taskEditting)
        {
            let task = nextProps.taskEditting;
            this.setState({
                id : task.id,
                name : task.name,
                status : task.status
            })
        }
        else 
        {
            this.setState({
                id : '',
                name : '',
                status : false
            })
        }
    }
    onExitTaskForm = () => {
        this.props.onExitTaskForm()
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === "status")
            value = value === "true" ? true : false;
        this.setState({
            [name] : value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
    }
    onClear = () => {
        this.setState({
            id : '',
            name :'',
            status : false
        })
    }
    render() {
        
        return (
            <div className="card text-white bg-warning">
                <div className="card-header">
                    <h3 className="card-title">
                        {this.state.id ==='' ? "Thêm công việc" : "Cập nhật công việc"}
                        <span className="fa fa-times-circle text-right" onClick={ this.onExitTaskForm } style={{float:"right"}}>

                        </span>
                    </h3>
                </div>
                <div className="card-body bg-white">
                    <form>
                        <div className="form-group" style={{ color: "black" }}>
                            <label>Tên : </label>
                            <input type="text" className={"form-control"} name="name" value={this.state.name} onChange = {this.onChange} />
                        </div>
                        <div className="form-group" style={{ color: "black" }}>
                            <label>Trạng thái</label>
                            <select name="status" value={ this.state.status } onChange = {this.onChange} className="form-control">
                                <option value={true}>
                                    Kích hoạt
                                            </option>
                                <option value={false}>
                                    Ẩn
                                            </option>
                            </select>
                        </div>
                        <button type="submit" onClick={ this.onSubmit } className="btn btn-warning">Lưu lại</button>
                                    &nbsp
                        <button type="submit" onClick={ this.onClear } className="btn btn-danger">Hủy bỏ</button>
                    </form>
                </div>
            </div>
        )
    }
}

