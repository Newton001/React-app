import React from "react";
import loginImg from "../../login.svg";
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            username:"",
            email: email,
            password: password,
            role:"",
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }
    

  render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">DeKUT Admin DashBoard</div>
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
                    <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                  </div>
                </div>
            </div>
          </form>
          <div className="footer">
            <button type="button" className="btn">
              Register
            </button>
          </div>
        </div>
    );
  }
}
