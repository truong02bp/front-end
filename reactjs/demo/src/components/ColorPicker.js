import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        }
    }
    showColor = (color) => {
        return {
            backgroundColor: color
        };
    }
    setColor(color){
        this.props.onReceviceColor(color);
    }
    render() {
        var elements = this.state.colors.map((color, index) => {
            return <span key={index} className={this.props.color === color ? 'colorPicker active' : 'colorPicker'} style={this.showColor(color)}
                onClick={() => this.setColor(color) }>
            </span>
        })
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="card text-white bg-primary">
                    <div className="card-header">
                        Color picker
                    </div>
                </div>
                <div className="card-body content">
                    {elements}
                </div>
            </div>
        );
    }
}

export default ColorPicker;