import React, { Component } from 'react'

export default class HeadTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            status : -1
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name ==='name' ? value : this.state.name,
            name ==='status' ? value : this.state.status
        )
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center"> Trạng thái</th>
                    <th className="text-center">Hành động</th>
                </tr>
                <tr>
                    <th className="text-center"></th>
                    <th className="text-center">
                        <input type="text" className="form-control" name="name" onChange = {this.onChange} />
                    </th>
                    <th className="text-center">
                        <select name="" id="" className="form-control" name="status" onChange = {this.onChange}>
                            <option value={-1}> Tất cả </option>
                            <option value={0}> Ẩn </option>
                            <option value={1}> Kích hoạt </option>
                        </select>
                    </th>
                </tr>
            </thead>
        )
    }
}
