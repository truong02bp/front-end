import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
class App extends Component 
{
  constructor(props)
  {
      super(props);
      this.state = {
        files : null
      };
      this.onHandleSubmit = this.onHandleSubmit.bind(this);
      this.onFileChange = this.onFileChange.bind(this);

  }
  onFileChange(event){
    this.setState({
      files : event.target.files
    })
  }
  onHandleSubmit(event)
  {
      event.preventDefault();
      var target = event.target;
      var name = target.name;
      var value = target.value 
      this.setState(
        {
        [name] : value
      });
      axios.post("http://localhost:8081/files",this.state.files)
      .then(res => {
        console.log(res.data);
      })
  }
  render()
  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="card">
              <div className="card-body bg-primary">
                <h4 className="card-title ">Form</h4>
              </div>
              <form onSubmit = { this.onHandleSubmit } encrypt = "multipart/form-data" >
                <div className="form-group">
                  <label> Username: </label>
                  <input type="file"
                    className="form-control" name="files" multiple onChange={this.onFileChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                <button type="reset" className="btn btn-danger">Xóa </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
