// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  onLogin(e) {
    e.preventDefault();

    // Kick off state change to say we're logged in
    this.props.dispatch(login(
      this.refs.email.value,
      this.refs.password.value
    ));

    localStorage.setItem('isLoggedIn', 'true');
  }

  render() {
    const inputStyle = {
      padding: 10,
      border: '1px solid #333',
      borderRadius: 5,
      margin: '10px 0',
    };
    return (
      <div
        style={{ padding: 25 }}
      >
        <form onSubmit={this.onLogin.bind(this)}>
          <div>
            <input
              style={inputStyle}
              ref='email'
              type='email'
              required
              placeholder='Email Address'
            />
          </div>
          <div>
            <input
              style={inputStyle}
              ref='password'
              type='password'
              required
              placeholder='Password'
            />
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
