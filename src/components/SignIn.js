import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SignIn extends Component {
  constructor () {
    super();
    this.state = {
      // Update state values with input field as user makes changes through functions below (_handleInput...)
      name: "",
      email: "",
      password: "",
    }

    // Bind all functions that use 'this'
    this._handleSumbit = this._handleSumbit.bind(this);
    this._handleInputEmail = this._handleInputEmail.bind(this);
    this._handleInputPassword = this._handleInputPassword.bind(this);

  }

  _handleSumbit (event) {
    event.preventDefault();
    // AJAX post request to create user.
    const url = "http://localhost:3001/api/user_token";
    axios.post(url, {
      auth: {
        email: this.state.email,
        password: this.state.password,
      }
    })
    .then((results) => {
      console.log(results.data);
      localStorage.setItem("jwt", results.data.jwt);
    })
    .catch(error => console.log('error', error));;
  }

  _handleInputEmail (event) {
    this.setState({
      email: event.target.value,
    });
  }

  _handleInputPassword (event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={ this._handleSumbit } >
          <label htmlFor="email">
            Email:
            <input type="email" id="email" onChange={ this._handleInputEmail } />
          </label>

          <label htmlFor="password">
            Password:
            <input type="password" id="password" onChange={ this._handleInputPassword } />
          </label>

          <input type="submit" value="Sign In" />
        </form>
      </div>)
  }
}

export default SignIn;
