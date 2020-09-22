import React from "react";
import loginImg from "../../login.svg";
import axios from "axios";
import Home from "../../Home";
import { useHistory } from 'react-router';



function Login () {

  routeChange=()=>{
    let path = <Home/> ;
    let history = useHistory();
    history.push(path)
  }

  return (
    <div className="base-container" ref={this.props.containerRef}>
      <div className="header">Dekut Admin DashBoard</div>
      <form onSubmit={this.handleSubmit}>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" 
              value={this.state.password}
              onChange={this.handleChange}
              required/>
            </div>
          </div>
        </div>
      </form>
      <div className="footer">
        <button type="submit" className="btn" onClick={this.routeChange}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
