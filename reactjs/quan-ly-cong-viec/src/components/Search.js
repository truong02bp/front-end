import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    onClick = () => {
        this.props.onSearch(this.state.keyword);
    }
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" name="keyword" placeholder="Nhập thông tin" onChange = {this.onChange }/>
                <button className="btn btn-primary" style={{ marginLeft: 10 }} name="keyword" onClick = { this.onClick }>
                    <span>Tìm</span>
                </button>
            </div>
        )
    }
}
