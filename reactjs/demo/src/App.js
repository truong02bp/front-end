import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Setting from './components/Setting';
import Size from './components/Size';
import Reset from './components/Reset';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            size: 15
        }
        // this.onSetColor = this.onSetColor.bind(this);
    }
    onSetColor = (params) => {
        this.setState({
            color: params
        })
    }
    onSetSize = (params) => {
        this.setState({
            size : params 
        })
    }
    onReset = () => {
        this.setState({
            color :'red',
            size : 15
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ColorPicker color={this.state.color} onReceviceColor={this.onSetColor} />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Size size = {this.state.size} onReceviceSize = {this.onSetSize} />
                        <Reset onReceviceReset = { this.onReset }/>
                    </div>
                </div>
                <Setting color={this.state.color} size={this.state.size} />
            </div>
        );
    }
}

export default App;
