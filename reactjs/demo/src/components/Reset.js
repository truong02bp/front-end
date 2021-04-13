import React, { Component } from 'react';

class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onReset = () => {
        this.props.onReceviceReset();
    }
    render() {
        return (
            <div className="hihi">
                <button type="button" className="btn btn-primary" onClick = { this.onReset }>Reset</button>
            </div>
        );
    }
}

export default Reset;