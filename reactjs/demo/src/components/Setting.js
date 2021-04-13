import React, { Component } from 'react';

class Setting  extends Component {
    constructor(props) {
        super(props);
        this.setStyle = this.setStyle.bind(this);
    }
    setStyle() {
        return {
            color : this.props.color,
            fontSize : this.props.size
        }
    }
    render() { 
        return (  
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <p>Color : { this.props.color } - Fontsize : { this.props.size } </p>
                    <div className="content" style = { this.setStyle() } >
                        Nội dung setting
                    </div>
            </div>
        );
    }
}
 
export default Setting;