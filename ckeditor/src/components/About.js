import React, { Component } from 'react'

class About extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <p>Đây là trang giới thiệu</p>
            </div>
        )
    }
}
export default About;