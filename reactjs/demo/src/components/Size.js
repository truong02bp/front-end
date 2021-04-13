import React, { Component } from 'react';

class Size extends Component {
    constructor(props) {
        super(props);
    }
    sizeUp = () => {
        this.props.onReceviceSize(this.props.size+1);
    }
    sizeDown = () => {
        this.props.onReceviceSize(this.props.size-1);
    }
    render() {
        return (
            <div>
                <div className="card text-white bg-danger">
                    <div className="card-header">
                        Size
                            </div>
                </div>
                <div className="card-body content">
                    <button type="button" className="btn btn-success" onClick = {this.sizeUp}>Tăng</button>
                    <button type="button" className="btn btn-success" onClick = {this.sizeDown}>Giảm</button>
                </div>
            </div>

        );
    }
}

export default Size;