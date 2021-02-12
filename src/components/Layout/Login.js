import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "this.state.name",
      password: "this.state.password",
    };
  }
  login() {
    console.warn(this.state);
    fetch("http://localhost:3003/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          localStorage.setItem("login", JSON.stringify(resp));
          console.warn(this.props.history.push("/"));
        } else {
          alert("please check username and password");
        }
      });
    });
  }
  render() {
    return (
      <div className="content">
        <input
          type="text"
          placeholder="Enter Name"
          name="user"
          onChange={(event) => this.setState({ name: event.target.value })}
        />{" "}
        <br /> <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(event) => this.setState({ password: event.target.value })}
        />{" "}
        <br /> <br />
        <button
          onClick={() => {
            this.login();
          }}
        >
          Login
        </button>
      </div>
    );
  }
}
