// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showError: false,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMssg => {
    this.setState({
      errorMsg: errorMssg,
      showError: true,
    })
  }

  submitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="label-element" htmlFor="password-input">
          PASSWORD
        </label>
        <input
          className="input-container"
          id="password-input"
          type="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="label-element" htmlFor="username-input">
          USERNAME
        </label>
        <input
          className="input-container"
          id="username-input"
          type="text"
          value={username}
          onChange={this.onChangeUserName}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {errorMsg, showError} = this.state
    return (
      <div className="login-form-main-bg-container">
        <div className="login-form-inner-bg-container">
          <div className="webiste-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-image-login-page"
            />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="webiste-login-image-login-page"
          />
          <form className="form-bg-container" onSubmit={this.submitLoginForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-image-login-page-lg"
            />
            {this.renderUserNameField()}
            {this.renderPasswordField()}
            <button className="login-submit-button" type="submit">
              Login
            </button>
            {showError && <p className="error-message"> {errorMsg} </p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
