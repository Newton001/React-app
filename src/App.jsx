import React from "react";
import "./App.scss";
import { Component } from "react";
import App1 from "./App1";
import Home from "./Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogginActive: true,
      };
      this.state = {
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      };
  
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
  
    componentDidMount() {
      //Add .right by default
      this.rightSide.classList.add("right");
    }
  
    checkLoginStatus() {
      axios
        .get("http://localhost:3001/logged_in", { withCredentials: true })
        .then(response => {
          if (
            response.data.logged_in &&
            this.state.loggedInStatus === "NOT_LOGGED_IN"
          ) {
            this.setState({
              loggedInStatus: "LOGGED_IN",
              user: response.data.user
            });
          } else if (
            !response.data.logged_in &
            (this.state.loggedInStatus === "LOGGED_IN")
          ) {
            this.setState({
              loggedInStatus: "NOT_LOGGED_IN",
              user: {}
            });
          }
        })
        .catch(error => {
          console.log("check login error", error);
        });
    }
  
    componentDidMount() {
      this.checkLoginStatus();
    }
  
    handleLogout() {
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      });
    }
  
    handleLogin(data) {
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user: data.user
      });
    }
  
    changeState() {
      const { isLogginActive } = this.state;
  
      if (isLogginActive) {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
      } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      }
      this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Switch >
                <Route path="/" exact component={App1} />
                <Route path="/Home" exact component={Home} />
              </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

//export default App;

