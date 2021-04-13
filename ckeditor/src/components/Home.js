import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react'
import axios from 'axios'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "<p>Hello</p>"
        }
    }
    onChange = (evt) => {
        // CKEditor.config.
        // CKEditor.config.entities = false;
        this.setState({
            data: evt.editor.getData()
        })
    }
    onSubmit = () => {
        var content = {
            content: this.state.data
        }
        axios.post("http://localhost:8081/add", content)
            .then(res => {
                console.log(res.data)
                // window.location.href = "http://localhost:8081/docx?id=" + res.data;
                window.location.href = "http://localhost:8081/docx?id="+res.data;
            })
    }
    render() {
        return (
            <div>
                <h2>Content</h2>
                <CKEditor data={this.state.data} onChange={this.onChange} 
                 config={{ width: 595, height: 450, allowedContent: true , htmlEncodeOutput :false , entities:false }} />
                <br></br>
                <button onClick={this.onSubmit} className="btn btn-primary"  style={{marginLeft:10}}   >Xuất docx</button>
            </div>
        )
    }
}
export default Home;
