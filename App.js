import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import DashBoard from './DashBoard';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//import PopUp from './PopUp'
//import AuthApi from './AuthApi';

class LoginPage extends Component {
  //const [ auth,setAuth ] = React.useState(false);
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      shift:'',
      clicked:false
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
if((this.state.username==="Stafny") && (this.state.password==='123')){
//this.setState({shift:'true'});
console.log("dsg");
  }
  

else if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
}

else if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
} 
else {
  return this.setState({ error: 'Invalid Creentials' });
}

return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
  handleClick=()=>{
    this.setState({clicked:'true'});
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <section className="login">
        <div className="facebook">Facebook</div>
        <div className="loginContainer">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <div className="error" data-test="error" onClick={this.dismissError}>
              <button id="errorbutton" onClick={this.dismissError}>✖</button><br></br>
              {this.state.error}
              
            </div>
          }
          <label>User Name</label>
          <input type="text" id="Username" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
<br></br>
          <label>Password</label>
          <input type="password" id="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
<div className="btnContainer">
          <button id="submitbutton" data-test="submit" onClick={this.handleClick}>Log In</button>
          {this.clicked? <DashBoard/> :null}
          <DashBoard></DashBoard>
          </div>
        </form>
      </div>
      </section>
    );
  }
}

/*const Routes=()=>{
  return(
  <Switch>
    <ProtectedRoute path="/DashBoard" component={DashBoard}/>
    
  </Switch>
  )
}
const ProtectedRoute = ({component:Component,...rest})=>{
  return(
    <Route
    {...rest}
    render={()=>(
    <component/>)}
    />
  )
} */

export default LoginPage;